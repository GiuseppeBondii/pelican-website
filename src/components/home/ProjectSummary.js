import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
const ProjectSummary = () => {
  const { data } = useContext(LanguageContext);
  const { projectSummary } = data.home;

  return (
    <section className="section summary-section">
      <div className="container summary-content">
        <h2>{projectSummary.title}</h2>
        <p className="summary-text">{projectSummary.description}</p>
        <div className="summary-link-container">
           <a href="https://www.clinicaltrials.gov/study/NCT07089550" target="_blank" rel="noreferrer" className="summary-link">
             {projectSummary.linkText}
           </a>
           <p className="ethics-approval">{projectSummary.ethicsApproval}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectSummary;