import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import '../styles/VisitorStats.css';

const VisitorStats = () => {
  const { t } = useTranslation();
  
  const stats = [
    {
      id: 1,
      number: t('visitorStats.stats.gorillaTrekking.number'),
      label: t('visitorStats.stats.gorillaTrekking.label'),
      description: t('visitorStats.stats.gorillaTrekking.description')
    },
    {
      id: 4,
      number: t('visitorStats.stats.wildlife.number'),
      label: t('visitorStats.stats.wildlife.label'),
      description: t('visitorStats.stats.wildlife.description')
    },
    {
      id: 2,
      number: t('visitorStats.stats.satisfaction.number'),
      label: t('visitorStats.stats.satisfaction.label'),
      description: t('visitorStats.stats.satisfaction.description')
    },
    {
      id: 3,
      number: t('visitorStats.stats.departures.number'),
      label: t('visitorStats.stats.departures.label'),
      description: t('visitorStats.stats.departures.description')
    },
  ];

  return (
    <section className="visitor-stats">
      <div className="stats-card">
        <div className="stats-header">
          <div>
            <h2 className="stats-title">{t('visitorStats.title')}</h2>
            <p className="stats-subtitle">{t('visitorStats.subtitle')}</p>
          </div>
          <div className="stats-buttons">
            <Link to="/destinations">
            <button className="demo-btn">
              <span className="btn-icon">◎</span> {t('visitorStats.buttons.explore')}
            </button>
            </Link>
            <Link to="/inquiries">
                        <button className="get-started-btn">{t('visitorStats.buttons.startHere')} <span className="btn-arrow">→</span></button>

            </Link>
          </div>
        </div>

        <div className="stats-container">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="stat-item"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.1 * index
              }}
            >
              <motion.div
                className="stat-number"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1
                }}
              >
                {stat.number}
              </motion.div>
              <motion.div
                className="stat-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {stat.label}
              </motion.div>
              <motion.div
                className="stat-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                {stat.description}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisitorStats;
