import React, { useState, useEffect } from "react";

const FormWithDynamicQuestions = () => {
    const [formData, setFormData] = useState({ name: "", mobile: "", age: "", field: "" });
    const [dataFetched, setDataFetched] = useState(false);
    const [fields, setFields] = useState({});
    const [questions, setQuestions] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [timer, setTimer] = useState(600);
    const [intervalId, setIntervalId] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/Assessment.json"); 
                const data = await response.json();
                setFields(data.fields || {});
                setDataFetched(true);
            } catch (error) {
                console.error("Error fetching JSON data:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (isSubmitted && timer > 0) {
            const interval = setInterval(() => {
                setTimer((prevTime) => prevTime - 1);
            }, 1000);
            setIntervalId(interval); // Save interval ID
        } else if (timer === 0) {
            clearInterval(intervalId); // Clear interval when time is up
        }

        return () => clearInterval(intervalId); // Cleanup interval when component unmounts or timer changes
    }, [isSubmitted, timer]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Get questions based on the selected field
        const selectedField = fields[formData.field];
        if (selectedField && selectedField.questions) {
            setQuestions(selectedField.questions);
        } else {
            setQuestions([]); // Default to empty array if no questions exist
        }

        setIsSubmitted(true);
    };

    const handleBackClick = () => {
        clearInterval(intervalId); // Stop the timer when "Back" is clicked
        setIsSubmitted(false); // Go back to the form state
        setTimer(600); // Optionally reset the timer
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    };

    return (
        <div className="p-4 max-w-lg mx-auto border rounded shadow">
            <h1 className="text-xl font-bold mb-4">Dynamic Questions Form</h1>

            {!dataFetched ? (
                <p>Loading...</p>
            ) : (
                <>
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="mobile" className="block text-sm font-medium mb-1">
                                    Mobile
                                </label>
                                <input
                                    type="text"
                                    id="mobile"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="age" className="block text-sm font-medium mb-1">
                                    Age
                                </label>
                                <input
                                    type="number"
                                    id="age"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="field" className="block text-sm font-medium mb-1">
                                    Select Field
                                </label>
                                <select
                                    id="field"
                                    name="field"
                                    value={formData.field}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded"
                                    required
                                >
                                    <option value="">-- Select a Field --</option>
                                    {Object.keys(fields).map((field) => (
                                        <option key={field} value={field}>
                                            {field.charAt(0).toUpperCase() + field.slice(1)}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </form>
                    ) : (
                        <div>
                            <h2 className="text-lg font-semibold mb-2">
                                Questions for {formData.field.charAt(0).toUpperCase() + formData.field.slice(1)}
                            </h2>
                            {questions.length > 0 ? (
                                <ul className="list-disc list-inside space-y-1">
                                    {questions.map((question, index) => (
                                        <li key={index}>{question}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No questions available for the selected field.</p>
                            )}
                            <div className="mt-4">
                                <p className="font-semibold">
                                    Time Remaining: {formatTime(timer)}
                                </p>
                            </div>
                            <button
                                onClick={handleBackClick}
                                className="mt-4 w-full py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600"
                            >
                                Back
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default FormWithDynamicQuestions;
