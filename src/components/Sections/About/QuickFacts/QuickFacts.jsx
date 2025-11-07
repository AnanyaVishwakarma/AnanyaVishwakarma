import React from 'react';
import Card from '../../../Common/Card/Card.jsx';
import FactItem from './FactItem/FactItem.jsx';
import { MapPin, Mail, Calendar } from 'lucide-react';
import './QuickFacts.css';

const QuickFacts = () => {
  const facts = [
    {
      icon: <MapPin className="fact-icon" />,
      label: "Location",
      value: "Varanasi, India"
    },
    {
      icon: <Mail className="fact-icon" />,
      label: "Status",
      value: "Available for opportunities"
    },
    {
      icon: <Calendar className="fact-icon" />,
      label: "Focus",
      value: "Full-stack development"
    }
  ];

  return (
    <div className="quick-facts animate-fade-in-right">
      <Card variant="glass" className="quick-facts__card">
        <h3 className="quick-facts__title">Quick Facts</h3>
        <div className="quick-facts__list">
          {facts.map((fact, index) => (
            <FactItem
              key={index}
              icon={fact.icon}
              label={fact.label}
              value={fact.value}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default QuickFacts;