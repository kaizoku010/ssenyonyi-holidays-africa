import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// English translations
const enTranslations = {
  navbar: {
    home: "HOME",
    packages: "PACKAGES",
    destinations: "DESTINATIONS",
    gallery: "GALLERY",
    contact: "CONTACT",
    tours: "TOURS",
    offers: "OFFERS"
  },
  callToAction: {
    title: "PLAN YOUR ADVENTURE TODAY",
    description: "Join thousands of travelers who have experienced the world with us",
    button: "Start Planning"
  },
  footer: {
    about: {
      title: "DERIQ TRAVELS",
      description: "We specialize in creating unforgettable travel experiences around the world. Our expert team crafts personalized itineraries to match your travel style."
    },
    quickLinks: {
      title: "Quick Links",
      home: "Home",
      packages: "Packages",
      destinations: "Destinations",
      gallery: "Gallery",
      contact: "Contact"
    },
    contactUs: {
      title: "Contact Us",
      address: "123 Travel Street, Adventure City",
      phone: "+1 (555) 123-4567",
      email: "info@deriqtravels.com"
    },
    newsletter: {
      title: "Newsletter",
      description: "Subscribe to our newsletter for travel tips and exclusive offers.",
      placeholder: "Your email address",
      button: "Subscribe"
    },
    copyright: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service"
  },
  comingSoon: {
    title: "COMING SOON",
    description: "Get ready for an extraordinary travel experience with Nyonyi holidays Africa. We're crafting unforgettable adventures that will take you off the beaten path to discover hidden gems and authentic cultural experiences around Uganda.",
    viewFullSite: "View Full Site",
    viewComingSoon: "View Coming Soon Page"
  },
  languageSwitcher: {
    language: "Language",
    english: "English",
    chinese: "中文"
  },
  homePage: {
    about: {
      title: "ABOUT NYONYI HOLIDAYS",
      subtitle: "Explore. Connect. Protect.",
      description1: "Nyonyi Holidays Africa is a premier East African travel company dedicated to crafting unforgettable journeys across Uganda, Rwanda, and beyond. Rooted in the Swahili word for \"bird,\" Nyonyi represents freedom, elegance, and the boundless spirit of exploration that guides our brand.",
      description2: "From gorilla trekking in Bwindi Impenetrable Forest to chimpanzee tracking in Kibale, and game drives in Murchison Falls to Rwanda's golden savannahs of Akagera National Park, we connect discerning travelers with authentic experiences that leave lasting impressions.",
      features: {
        conservation: "Conservation-Focused",
        community: "Community Support",
        authentic: "Authentic Experiences"
      },
      discover: {
        title: "DISCOVER",
        subtitle: "The heart of East Africa"
      }
    },
    features: {
      title: "SPECIAL FEATURES",
      subtitle: "What makes our travel experiences unique",
      premiumService: {
        title: "Premium Service",
        description: "We go above and beyond to ensure your journey is perfect from start to finish."
      },
      guidedTours: {
        title: "Guided Tours",
        description: "Expert guides lead you through the most scenic routes and hidden gems of each destination."
      },
      photoOpportunities: {
        title: "Photo Opportunities",
        description: "Capture stunning landscapes and memorable moments with perfect photo spots throughout your journey."
      },
      culinaryExperiences: {
        title: "Culinary Experiences",
        description: "Taste authentic local cuisine and learn about traditional food preparation techniques."
      },
      premiumAccommodations: {
        title: "Premium Accommodations",
        description: "Stay in carefully selected hotels and resorts that offer comfort and authentic local atmosphere."
      }
    },
    callToAction: "Start Your Adventure"
  }
};

// Chinese translations
const zhTranslations = {
  navbar: {
    home: "首页",
    packages: "旅游套餐",
    destinations: "目的地",
    gallery: "图库",
    contact: "联系我们",
    tours: "旅游",
    offers: "优惠"
  },
  callToAction: {
    title: "今天就计划您的冒险",
    description: "加入成千上万与我们一起体验世界的旅行者",
    button: "开始计划"
  },
  footer: {
    about: {
      title: "DERIQ 旅行",
      description: "我们专注于创造难忘的全球旅行体验。我们的专家团队根据您的旅行风格定制个性化的行程。"
    },
    quickLinks: {
      title: "快速链接",
      home: "首页",
      packages: "旅游套餐",
      destinations: "目的地",
      gallery: "图库",
      contact: "联系我们"
    },
    contactUs: {
      title: "联系我们",
      address: "123 旅行街, 冒险城",
      phone: "+1 (555) 123-4567",
      email: "info@deriqtravels.com"
    },
    newsletter: {
      title: "新闻通讯",
      description: "订阅我们的新闻通讯，获取旅行提示和独家优惠。",
      placeholder: "您的电子邮件地址",
      button: "订阅"
    },
    copyright: "版权所有。",
    privacyPolicy: "隐私政策",
    termsOfService: "服务条款"
  },
  comingSoon: {
    title: "即将推出",
    description: "准备好与 Nyonyi 非洲假日一起体验非凡的旅行。我们正在打造难忘的冒险，带您走出常规路线，发现乌干达的隐藏宝藏和真实的文化体验。",
    viewFullSite: "查看完整网站",
    viewComingSoon: "查看即将推出页面"
  },
  languageSwitcher: {
    language: "语言",
    english: "English",
    chinese: "中文"
  }
};

// Initialize i18next
i18n
  // Load translations using http backend
  .use(Backend)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    fallbackLng: 'en',
    debug: true,
    supportedLngs: ['en', 'zh'],

    // Add resources directly to ensure translations are available immediately
    resources: {
      en: {
        translation: enTranslations
      },
      zh: {
        translation: zhTranslations
      }
    },

    interpolation: {
      escapeValue: false, // React already safes from XSS
    },

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },

    backend: {
      loadPath: './locales/{{lng}}/translation.json',
    },

    react: {
      useSuspense: false, // Set to false to avoid issues with Suspense
    },
  });

export default i18n;
