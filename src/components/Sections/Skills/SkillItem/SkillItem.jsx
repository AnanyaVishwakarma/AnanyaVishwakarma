import React from 'react';
import Skills from '../Skills';
import './SkillItem.css';

const SkillItem = ({ skill, level }) => {
  return (
    <div className="skill-item">
      <span className="skill-item__name">{skill}</span>
      {level && (
        <div className="skill-item__level">
          <div 
            className="skill-item__level-bar"
            style={{ width: `${level}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default SkillItem;