import React from 'react';
import data from '../../data/pelicanData.json';

const NewsSection = () => {
  const { newsSection } = data.home;

  return (
    <section className="section news-section">
      <div className="container">
        <h2>{newsSection.title}</h2>
        <div className="news-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          
          {newsSection.news.map((item, index) => (
            <div key={index} className="news-card">
              <span className="news-date">{item.date}</span>
              <h3 style={{ marginTop: '10px', color: 'var(--ocean-blue)' }}>{item.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default NewsSection;