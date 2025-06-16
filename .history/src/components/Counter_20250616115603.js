import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import '../styles/slidercounter.css';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { counter } from '@fortawesome/fontawesome-svg-core';

const Counter = () => {
  const { t } = useTranslation();
  
  const stats = [
    {
      id: 1,
      number: <CountUp end={100} duration={2.75} suffix='%'/> ,
      label: t('visitorStats.stats.gorillaTrekking.label'),
      description: t('visitorStats.stats.gorillaTrekking.description')
    },
    {
      id: 4,
      number: <CountUp end={81} duration={3.75} suffix='+'/>,
      label: t('visitorStats.stats.wildlife.label'),
      description: t('visitorStats.stats.wildlife.description')
    },
    {
      id: 2,
      number:  <CountUp end={4.9} duration={3.75} decimals={1}
 suffix=''/>,
      label: t('visitorStats.stats.satisfaction.label'),
      description: t('visitorStats.stats.satisfaction.description')
    },
    {
      id: 3,
      number: <CountUp end={100} duration={2.75} suffix='%'/> ,
      label: t('visitorStats.stats.departures.label'),
      description: t('visitorStats.stats.departures.description')
    },
  ];

  return (
    <section className="visitor-stats-">
      <div className="stats-card-">
        <div className="stats-header-">
          <div className="stats-buttons-">
            <Link to="/destinations">
            <button className="demo-btn-">
              <span className="btn-icon">◎</span> {t('visitorStats.buttons.explore')}
            </button>
            </Link>
            <Link to="/trip-planner">
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
                className="stat-number-"
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
                className="stat-label-"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {stat.label}
              </motion.div>
              <motion.div
                className="stat-description-"
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

export default Counter;
