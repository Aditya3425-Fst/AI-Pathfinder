import React from 'react';
import StudentSkillsAssessment from '../components/SkillEnhancement/StudentSkillsAssessment'
const SkillTestPage = () => (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center pl-28 pr-28 pt-4 pb-4 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-4">Skill Test Page</h1>
            <StudentSkillsAssessment/>
        </div>
    </div>
);

export default SkillTestPage;
