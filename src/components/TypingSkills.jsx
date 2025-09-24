import React, { useState, useEffect } from "react";

const TypingSkills = () => {
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  const skills = [
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];

  useEffect(() => {
    const typeSpeed = 100;
    const eraseSpeed = 50;
    const pauseTime = 2000;

    let timeout;

    if (isTyping) {
      if (currentText.length < skills[currentSkillIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(
            skills[currentSkillIndex].slice(0, currentText.length + 1)
          );
        }, typeSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseTime);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, eraseSpeed);
      } else {
        const nextSkillIndex = (currentSkillIndex + 1) % skills.length;
        setCurrentSkillIndex(nextSkillIndex);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, currentSkillIndex, skills]);

  return (
    <div >
      <div className="border border-gray-700  rounded-lg p-1 pb-2 w-full max-w-2xl font-mono text-sm">
        {/* Terminal Header */}
        <div className="flex items-center mb-4 pb-2 border-b border-gray-700">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="ml-2 text-gray-400">skills.js</span>
        </div>

        {/* Code Content */}
        <div className="text-white">
          <span className="text-purple-400 md:text-2xl">let </span>
          <span className="text-blue-400 md:text-2xl">skills </span>
          <span className="text-white md:text-2xl">= </span>
          <span className="text-green-400 md:text-2xl">"</span>
          <span className="text-green-400  md:text-2xl md:font-bold">
            {currentText}
            <span className="animate-pulse md:text-2xl">|</span>
          </span>
          <span className="text-green-400 md:text-2xl">"</span>
        </div>
      </div>
    </div>
  );
};

export default TypingSkills;
