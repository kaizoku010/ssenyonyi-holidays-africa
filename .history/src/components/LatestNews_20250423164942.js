import React from 'react';
import '../styles/LatestNews.css';
import kitandra from '../media/kitandra.jpg';
import kitandra2 from '../media/kitandra2.jpg';

const newsItems = [
  {
    id: 1,
    title: 'New Safari Adventure Package Launched',
    date: 'June 15, 2023',
    image: kitandra,
    excerpt: 'Experience the thrill of African wildlife with our new comprehensive safari package.'
  },
  {
    id: 2,
    title: 'Top 10 Beach Destinations for 2023',
    date: 'May 28, 2023',
    image: kitandra2,
    excerpt: 'Discover the most pristine and breathtaking beaches around the world for your next vacation.'
  },
  {
    id: 3,
    title: 'Cultural Immersion Tours Now Available',
    date: 'April 10, 2023',
    image: kitandra,
    excerpt: 'Dive deep into local traditions and authentic experiences with our new cultural tours.'
  }
];

const LatestNews = () => {
  return (
    <section className="latest-news">
      <div className="news-container">
        <div className="section-header">
          <h2>LATEST UPDATES</h2>
          <p>Stay informed about our newest offerings and travel tips</p>
        </div>
        
        <div className="news-grid">
          {newsItems.map(item => (
            <div key={item.id} className="news-card">
              <div className="news-image">
                <img src={item.image} alt={item.title} />
                <div className="news-date">{item.date}</div>
              </div>
              <div className="news-content">
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <a href="#" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all-container">
          <a href="#" className="view-all-button">View All News</a>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
