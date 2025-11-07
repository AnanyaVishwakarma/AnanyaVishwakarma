import React from 'react';
import SectionTitle from '../../Common/SectionTitle/SectionTitle';
import SkillCategory from './SkillCategory/SkillCategory';
import { Code, Smartphone, Palette, Database } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend",
      icon: <Code className="skill-category-icon" />,
      skills: ["React", "JavaScript", "HTML5", "CSS3"]
    },
    {
      name: "Backend",
      icon: <Smartphone className="skill-category-icon" />,
      skills: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      name: "Database",
      icon: <Database className="skill-category-icon" />,
      skills: ["PostgreSQL", "MySQL"]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="skills__container container">
        <SectionTitle level={2}>Skills & Technologies</SectionTitle>
        
        <div className="skills__grid animate-stagger">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              name={category.name}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;