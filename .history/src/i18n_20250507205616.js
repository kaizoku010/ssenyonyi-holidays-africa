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
    title: "Experience Magic",
    description: "Immerse yourself in Africa's breathtaking landscapes and unforgettable wildlife encounters.",
    locationTitle: "Explore Africa",
    locationDescription: "Home to mountain gorillas, stunning landscapes, and diverse wildlife.",
    actionButton: "Plan Your Safari"
  },
  footer: {
    about: {
      title: "Nyoni Holiday Africa",
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
      email: "info@nyoniholidayafrica.com"
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
    title: "体验乌干达的魔力",
    description: "沉浸在令人叹为观止的风景和难忘的野生动物邂逅中。",
    locationTitle: "探索乌干达",
    locationDescription: "山地大猩猩，壮丽的风景和多样的野生动物的家园。",
    actionButton: "规划您的野生动物园之旅"
  },
  footer: {
    about: {
      title: "Nyoni Holiday Africa",
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
      email: "info@Nyoni Holidayafrica.com"
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
  },
  homePage: {
    about: {
      title: "关于 NYONYI 假日",
      subtitle: "探索。连接。保护。",
      description1: "Nyonyi 非洲假日是一家顶级的东非旅游公司，致力于在乌干达、卢旺达及其他地区打造难忘的旅程。",
      description2: "从布温迪密林中的大猩猩追踪到基巴莱的黑猩猩追踪，从默奇森瀑布的游猎到卢旺达阿卡盖拉国家公园的金色大草原，我们将有眼光的旅行者与真实体验联系起来。",
      features: {
        conservation: "以保护为重点",
        community: "社区支持",
        authentic: "真实体验"
      },
      discover: {
        title: "探索",
        subtitle: "东非的心脏"
      }
    },
    features: {
      title: "特色服务",
      subtitle: "是什么让我们的旅行体验与众不同",
      premiumService: {
        title: "优质服务",
        description: "我们竭尽全力确保您的旅程从始至终都是完美的。"
      },
      guidedTours: {
        title: "导游服务",
        description: "专业导游带您穿越每个目的地最风景如画的路线和隐藏的宝藏。"
      },
      photoOpportunities: {
        title: "摄影机会",
        description: "在整个旅程中，通过完美的拍照点捕捉令人惊叹的风景和难忘的时刻。"
      },
      culinaryExperiences: {
        title: "美食体验",
        description: "品尝正宗的当地美食，了解传统的食物制作技术。"
      },
      premiumAccommodations: {
        title: "高级住宿",
        description: "入住精心挑选的酒店和度假村，提供舒适和正宗的当地氛围。"
      }
    },
    callToAction: "开始您的冒险"
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
