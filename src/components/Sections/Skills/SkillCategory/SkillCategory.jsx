import React from 'react';
import Card from '../../../Common/Card/Card';
import SkillItem from '../SkillItem/SkillItem';
import './SkillCategory.css';
import Skills from '../Skills';

const SkillCategory = ({ name, icon, skills }) => {
  return (
    <Card variant="glass" hover className="skill-category animate-fade-in-up">
      <div className="skill-category__header">
        <div className="skill-category__icon">
          {icon}
        </div>
        <h3 className="skill-category__name">{name}</h3>
      </div>
      
      <div className="skill-category__skills">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </Card>
  );
};

export default SkillCategory;