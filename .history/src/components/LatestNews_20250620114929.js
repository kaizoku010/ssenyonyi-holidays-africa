import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LatestNews.css';
import kitandra from '../media/chimp.jpg';
import kitandra2 from '../media/buh.jpg';
import lake from "../media/gols.jpg"
import { Link } from 'react-router-dom';

const LatestNews = () => {
  const { t } = useTranslation();

  const newsItems = [
    {
      id: 1,
      title: t('latestNews.newsItems.safari.title'),
      date: t('latestNews.newsItems.safari.date'),
      image: kitandra,
      link:"1",
      excerpt: t('latestNews.newsItems.safari.excerpt')
    },
    {
      id: 2,
      title: t('latestNews.newsItems.beaches.title'),
      date: t('latestNews.newsItems.beaches.date'),
      image: kitandra2,
      link: "3",
      excerpt: t('latestNews.newsItems.beaches.excerpt')
    },
    {
      id: 3,
      title: t('latestNews.newsItems.cultural.title'),
      date: t('latestNews.newsItems.cultural.date'),
      image: lake,
      excerpt: t('latestNews.newsItems.cultural.excerpt'),
      link:"2"
    }
  ];
  return (
    <section className="latest-news">
      <div className="news-container">
        <div className="section-header">
          <h2>{t('latestNews.header.title')}</h2>
          <p>{t('latestNews.header.subtitle')}</p>
        </div>

        <div className="news-grid">
          {newsItems.map(item => (
            <div key={item.id} className="news-card">
              <div className="news-image">
                <img src={item.image} alt={item.title} />
                {/* <div className="news-date">{item.date}</div> */}
              </div>
              <div className="news-content">
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <Link to={`/packages/${item.link}`}>
                <p className="read-more-text">{t('latestNews.readMore')} <i className="fas fa-arrow-right"></i></p>
              </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <a href="#" className="view-all-button">{t('latestNews.viewAll')}</a>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
