import React from 'react';
import './ProblemSolving.css';
import leetcodeScreenshot from '../../../../public/images/LeetProfileSS.png';

const ProblemSolving = ({ username = 'ananya707', solvedCount = 130 }) => {
  return (
    <section className="problem-solving" aria-labelledby="ps-heading">
      <div className="ps-container">
        <header className="ps-header">
          <h2 id="ps-heading" className="ps-title">Problem Solving & Competitive Coding</h2>
          <p className="ps-sub">
            Strengthening algorithmic thinking through regular practice. Currently
            <span className="ps-highlight"> {solvedCount}+ problems</span> solved on LeetCode.
          </p>
        </header>

        <div className="ps-grid">
          <figure className="ps-card" aria-label="LeetCode profile screenshot">
            <img
              src={leetcodeScreenshot}
              alt={`LeetCode profile screenshot showing ${solvedCount}+ solved problems`}
              className="ps-screenshot"
              loading="lazy"
            />
            <figcaption className="ps-caption">LeetCode | {solvedCount}+ solved</figcaption>
          </figure>

          <div className="ps-actions">
            <div className="ps-buttons">
              <a
                className="ps-btn ps-btn-primary"
                href={`https://leetcode.com/${username}/`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LeetCode profile in new tab"
              >
                View LeetCode Profile →
              </a>
            </div>

            <ul className="ps-badges" aria-hidden="false">
              <li className="ps-badge">Algorithms</li>
              <li className="ps-badge">Data Structures</li>
              <li className="ps-badge">Problem Solving</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
