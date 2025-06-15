import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// English translations
const enTranslations = {
  navbar: {
    home: "HOME",
    about: "ABOUT",
    packages: "PACKAGES",
    destinations: "DESTINATIONS",
    gallery: "GALLERY",
    contact: "INQUIRE NOW",
    tours: "TOURS",
    offers: "OFFERS"
  },
  packagesPage: {
    title: "Safari packages & destinations",
    subtitle: "Explore our carefully crafted experiences across East Africa",
    featuredPackages: "Featured Packages",
    allPackages: "All Safari Packages",
    from: "From",
    perPerson: "per person",
    viewDetails: "View Details",
    inquireNow: "Inquire Now",
    highlights: "Highlights",
    accommodation: "Accommodation",
    inclusions: "Inclusions",
    tabs: {
      all: "All Packages",
      midRange: "Mid-Range",
      highEnd: "High-End"
    }
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
      title: "Nyonyi Holiday Africa",
      description: "A premier East African travel company dedicated to crafting unforgettable journeys across Uganda, Rwanda, and beyond."
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
      address: "187163 Kampala, Uganda",
      phone: "+256 701 261 427",
      email: "info@Nyonyiholidayafrica.com"
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
  development: {
    notice: "Website Under Development",
    message: "This website is currently under active development. Some features may not work as expected."
  },
  aboutPage: {
    header: {
      title: "Murchison Falls National Park sits on the shore of Lake Albert, in northwest Uganda.",
      author: "Image by Derrick Sennyonyi",
      date: "January 15, 2023"
    },
    mission: {
      title: "Nyonyi Holidays Africa is a premier East African travel company dedicated to crafting unforgettable journeys across Africa.",
      description1: "Rooted in the Swahili word for \"bird,\" Nyonyi represents freedom, elegance, and the boundless spirit of exploration that guides our brand. We believe travel is not just about discovery—it's about stewardship.",
      description2: "From gorilla trekking in Bwindi Impenetrable Forest to chimpanzee tracking in Kibale, and game drives in Murchison Falls to Rwanda's golden savannahs of Akagera National Park, we connect discerning travelers to the true heart of Africa.",
      description3: "Every itinerary we design prioritizes conservation-first tourism, ensuring that your journey supports the protection of endangered species, preserves fragile ecosystems, and empowers communities safeguarding these wild spaces."
    },
    vision: {
      title: "Our Vision",
      description: "To become Africa's most trusted and innovative travel partner, known globally for curating exceptional, meaningful, and sustainable journeys that leave a lasting legacy for people, wildlife, and the planet."
    },
    mission_statement: {
      title: "Our Mission",
      description: "To design and deliver authentic African travel experiences that inspire, educate, and uplift—while fostering responsible tourism that directly contributes to wildlife conservation, habitat restoration, and sustainable livelihoods for local communities."
    },
    team: {
      title: "A unique eco-system waiting for you to explore!"
    },
    partners: {
      title: "Our adventures are all made possible by our partners"
    },
    attractions: {
      murchison: {
        title: "Murchison Falls",
        description: "It's known for Murchison Falls, where the Victoria Nile River surges through a narrow gap over a massive drop."
      },
      gorillas: {
        title: "Uganda's Mountain Gorillas",
        description: "The critically endangered mountain gorillas in the whole world are not known to exist in captivity such as zoos but are only known to be thriving in the verdant tropical forests of Africa."
      }
    },
    cta: {
      title: "Ready to get started?",
      button: "Contact us",
      description: "Committed to the Industry's Highest Standards"
    }
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
  },
  destinationsPage: {
    hero: {
      title: "Discover the natural wonders and cultural treasures of East Africa",
      imageBy: "Image by Derrick Sennyonyi",
      date: "January 15, 2023"
    },
    sections: {
      featured: "Featured Destinations",
      all: "All Destinations"
    },
    tabs: {
      all: "All Destinations",
      nationalParks: "National Parks",
      cities: "Cities",
      lakes: "Lakes"
    },
    card: {
      highlights: "Highlights:",
      activities: "Activities:",
      explore: "Explore"
    }
  },
  galleryPage: {
    hero: {
      title: "Explore the beauty and adventure of East Africa through our lens",
      imageBy: "Image by Derrick Sennyonyi",
      date: "January 15, 2023"
    },
    filters: {
      all: "All",
      wildlife: "Wildlife",
      landscapes: "Landscapes",
      culture: "Culture",
      accommodations: "Accommodations",
      adventure: "Adventure"
    },
    lightbox: {
      close: "Close",
      next: "Next",
      previous: "Previous"
    },
    loadMore: "Load more"
  },
  contactPage: {
    hero: {
      title: "Reach out",
      subtitle: "Get in touch with our team for inquiries, bookings, or custom travel plans"
    },
    form: {
      title: "Send Us a Message",
      description: "Fill out the form below and we'll get back to you as soon as possible.",
      fullName: "Full Name",
      fullNamePlaceholder: "Your full name",
      email: "Email Address",
      emailPlaceholder: "Your email address",
      phone: "Phone Number",
      phonePlaceholder: "Your phone number",
      subject: "Subject",
      subjectPlaceholder: "What is this regarding?",
      message: "Message",
      messagePlaceholder: "Your message",
      sendButton: "Send Message",
      sendingButton: "Sending...",
      successMessage: "Your message has been sent successfully! We'll get back to you soon.",
      errorMessage: "There was an error sending your message. Please check the form and try again."
    },
    contactInfo: {
      title: "Contact Information",
      description: "Reach out to us through any of these channels",
      location: {
        title: "Our Location",
        address: "0000 Kampala, Uganda"
      },
      phone: {
        title: "Phone Number",
        number1: "+256 701 261 427",
        number2: "+256 751 174 311"
      },
      email: {
        title: "Email Address",
        address: "info@Nyonyiholidaysafrica.com"
      },
      hours: {
        title: "Working Hours",
        weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
        saturday: "Saturday: 10:00 AM - 4:00 PM",
        sunday: "Sunday: Closed"
      },
      social: {
        title: "Connect With Us"
      },
      map: {
        comingSoon: "Interactive Map Coming Soon",
        viewButton: "View on Google Maps"
      }
    },
    faq: {
      title: "Frequently Asked Questions",
      questions: {
        booking: {
          question: "How do I book a tour?",
          answer: "You can book a tour by filling out the contact form above, calling us directly, or using the booking form on our package pages. We'll get back to you within 24 hours to confirm your booking."
        },
        payment: {
          question: "What payment methods do you accept?",
          answer: "We accept credit/debit cards, bank transfers, and mobile money payments. A 30% deposit is required to confirm your booking, with the balance due 30 days before your trip."
        },
        customization: {
          question: "Can I customize a tour package?",
          answer: "Absolutely! We specialize in creating custom itineraries tailored to your preferences, timeframe, and budget. Contact us with your requirements, and we'll design a personalized experience for you."
        },
        cancellation: {
          question: "What is your cancellation policy?",
          answer: "Cancellations made 60+ days before departure receive a full refund minus a $100 admin fee. Cancellations 30-59 days before departure receive a 50% refund. Cancellations less than 30 days before departure are non-refundable."
        }
      }
    }
  },
  destinationSlider: {
    welcome: "Welcome to",
    companyName: "Nyonyi Holidays Africa",
    description: "We are a premier East African travel company dedicated to crafting unforgettable journeys across Uganda, Rwanda, and beyond. Rooted in the Swahili word for \"bird,\" Nyonyi represents freedom, elegance, and the boundless spirit of exploration that guides our brand.",
    exploreButton: "INQUIRE NOW",
    destinations: {
      uganda: {
        location: "Uganda",
        title: "CLASSIC GORILLAS",
        description: "Majestic mountainscapes await your adventurous spirit. Experience the breathtaking views as you journey through pristine alpine terrain."
      },
      eastAfrica: {
        location: "East Africa",
        title: "MOUNT KILIMANJARO",
        description: "Africa's highest peak offers a challenging trek through five distinct climate zones, from lush rainforest to arctic summit."
      }
    }
  },
  visitorStats: {
    title: "We Deliver Wild Results.",
    subtitle: "We don't do excuses—only unforgettable safaris.",
    buttons: {
      explore: "Explore Our Adventures",
      startHere: "Start Here"
    },
    stats: {
      gorillaTrekking: {
        number: "78%",
        label: "Gorilla Trekking Success",
        description: "Guests who see gorillas on first trek"
      },
      wildlife: {
        number: "81+",
        label: "Wildlife Encounters",
        description: "From Big Five to rare birds—every trip is packed with sightings"
      },
      satisfaction: {
        number: "4.9/5",
        label: "Guest Satisfaction",
        description: "Based on over 2,000 verified traveler reviews"
      },
      departures: {
        number: "100%",
        label: "On-Time Departures",
        description: "Every safari starts and ends exactly as planned"
      }
    }
  },
  featuredAnimals: {
    title: "Africa through our lens",
    subtitle: "Look through our lens as we capture the beauty of Africa",
    filters: {
      people: "People",
      art: "Art",
      culture: "Culture",
      landscapes: "Landscapes",
      lifestyle: "Life style"
    }
  },
  latestNews: {
    header: {
      title: "LATEST UPDATES",
      subtitle: "Stay informed about our newest offerings and travel tips"
    },
    viewAll: "View All News",
    readMore: "Read More",
    newsItems: {
      safari: {
        title: "New Safari Adventure Package Launched",
        date: "June 15, 2023",
        excerpt: "Experience the thrill of African wildlife with our new comprehensive safari package."
      },
      beaches: {
        title: "Top 10 Beach Destinations for 2023",
        date: "May 28, 2023",
        excerpt: "Discover the most pristine and breathtaking beaches around the world for your next vacation."
      },
      cultural: {
        title: "Lake Bunyonyi is in south-western Uganda",
        date: "April 10, 2023",
        excerpt: "Dive deep into local traditions and authentic experiences with our new cultural tours."
      }
    }
  },
  featuredExhibit: {
    header: {
      title: "FEATURED EXPERIENCES",
      subtitle: "Discover our most extraordinary travel adventures"
    },
    featuredExperience: "FEATURED EXPERIENCE",
    bookButton: "Book This Adventure",
    experiences: {
      serengeti: {
        title: "Serengeti Safari Adventure",
        description: "Embark on an unforgettable journey through the vast plains of the Serengeti. Witness the majestic wildlife in their natural habitat, from lions and elephants to giraffes and zebras.",
        additionalInfo: "Our expert guides will ensure you experience the best of African wildlife while staying in luxurious safari lodges under the starlit sky.",
        features: [
          "7-day immersive safari experience",
          "Witness the Great Migration",
          "Luxury accommodations included",
          "Professional wildlife photography tips"
        ]
      },
      gorilla: {
        title: "Mountain Gorilla Expedition",
        description: "Trek through the misty forests of Bwindi to encounter endangered mountain gorillas in their natural habitat. A once-in-a-lifetime wildlife experience.",
        additionalInfo: "Our experienced trackers will guide you safely through the forest to observe these magnificent creatures up close in a responsible and sustainable way.",
        features: [
          "Official gorilla trekking permits",
          "Expert local guides and trackers",
          "Comfortable forest accommodations",
          "Conservation contribution included"
        ]
      },
      cultural: {
        title: "Cultural Immersion Tour",
        description: "Experience the rich cultural heritage of East Africa through immersive village visits, traditional ceremonies, and authentic interactions with local communities.",
        additionalInfo: "Learn traditional crafts, participate in dance ceremonies, and gain insights into the daily lives and customs of diverse ethnic groups across Uganda and Rwanda.",
        features: [
          "Village homestay experiences",
          "Traditional cooking lessons",
          "Craft workshops with local artisans",
          "Authentic cultural performances"
        ]
      },
      victoria: {
        title: "Lake Victoria Adventure",
        description: "Explore the shores and islands of Africa's largest lake with activities ranging from boat safaris to sport fishing and bird watching in this biodiverse ecosystem.",
        additionalInfo: "Relax on pristine beaches, visit traditional fishing villages, and enjoy spectacular sunsets over the vast waters of this magnificent freshwater lake.",
        features: [
          "Island hopping boat tours",
          "Premium sport fishing excursions",
          "Lakeside luxury accommodations",
          "Bird watching with expert guides"
        ]
      }
    }
  }
};

// Chinese translations
const zhTranslations = {
  navbar: {
    home: "首页",
    about: "关于我们",
    packages: "旅游套餐",
    destinations: "目的地",
    gallery: "图库",
    contact: "联系我们",
    tours: "旅游",
    offers: "优惠"
  },
  packagesPage: {
    title: "Safari 套餐和目的地",
    subtitle: "探索我们在东非精心打造的体验",
    featuredPackages: "精选套餐",
    allPackages: "所有 Safari 套餐",
    from: "起价",
    perPerson: "每人",
    viewDetails: "查看详情",
    inquireNow: "立即咨询",
    highlights: "亮点",
    accommodation: "住宿",
    inclusions: "包含内容",
    tabs: {
      all: "所有套餐",
      midRange: "中档",
      highEnd: "高端"
    }
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
      title: "Nyonyi Holiday Africa",
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
      phone: "+ 256 751174311",
      email: "info@Nyonyiholidayafrica.com"
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
  development: {
    notice: "网站开发中",
    message: "本网站目前正在积极开发中。某些功能可能无法按预期工作。"
  },
  aboutPage: {
    header: {
      title: "默奇森瀑布国家公园位于乌干达西北部阿尔伯特湖畔。",
      author: "图片由 Derrick Sennyonyi 提供",
      date: "2023年1月15日"
    },
    mission: {
      title: "Nyonyi 非洲假日是一家顶级的东非旅游公司，致力于在非洲各地打造难忘的旅程。",
      description1: "源自斯瓦希里语中'鸟'的含义，Nyonyi 代表自由、优雅和引导我们品牌的无限探索精神。我们相信旅行不仅仅是关于发现——更是关于管理。",
      description2: "从布温迪密林中的大猩猩追踪到基巴莱的黑猩猩追踪，从默奇森瀑布的游猎到卢旺达阿卡盖拉国家公园的金色大草原，我们将有眼光的旅行者与非洲真实的心脏连接起来。",
      description3: "我们设计的每一个行程都优先考虑以保护为先的旅游，确保您的旅程支持濒危物种的保护，保存脆弱的生态系统，并赋予保护这些野生空间的社区力量。"
    },
    vision: {
      title: "我们的愿景",
      description: "成为非洲最值得信赖和最具创新性的旅行伙伴，全球知名的精心策划卓越、有意义和可持续的旅程，为人类、野生动物和地球留下持久的遗产。"
    },
    mission_statement: {
      title: "我们的使命",
      description: "设计和提供真实的非洲旅行体验，激发、教育和提升——同时培养负责任的旅游业，直接促进野生动物保护、栖息地恢复和当地社区的可持续生计。"
    },
    team: {
      title: "一个等待您探索的独特生态系统！"
    },
    partners: {
      title: "我们的冒险都是由我们的合作伙伴共同实现的"
    },
    attractions: {
      murchison: {
        title: "默奇森瀑布",
        description: "它以默奇森瀑布而闻名，维多利亚尼罗河通过狭窄的缝隙涌过巨大的落差。"
      },
      gorillas: {
        title: "乌干达的山地大猩猩",
        description: "全世界濒临灭绝的山地大猩猩不被认为存在于动物园等圈养环境中，而只被认为在非洲郁郁葱葱的热带森林中茁壮成长。"
      }
    },
    cta: {
      title: "准备好开始了吗？",
      button: "联系我们",
      description: "致力于行业最高标准"
    }
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
  },
  destinationsPage: {
    hero: {
      title: "探索东非的自然奇观和文化宝藏",
      imageBy: "图片由 Derrick Sennyonyi 提供",
      date: "2023年1月15日"
    },
    sections: {
      featured: "精选目的地",
      all: "所有目的地"
    },
    tabs: {
      all: "所有目的地",
      nationalParks: "国家公园",
      cities: "城市",
      lakes: "湖泊"
    },
    card: {
      highlights: "亮点：",
      activities: "活动：",
      explore: "探索"
    }
  },
  galleryPage: {
    hero: {
      title: "通过我们的镜头探索东非的美丽与冒险",
      imageBy: "图片由 Derrick Sennyonyi 提供",
      date: "2023年1月15日"
    },
    filters: {
      all: "全部",
      wildlife: "野生动物",
      landscapes: "风景",
      culture: "文化",
      accommodations: "住宿",
      adventure: "冒险"
    },
    lightbox: {
      close: "关闭",
      next: "下一个",
      previous: "上一个"
    },
    loadMore: "加载更多"
  },
  contactPage: {
    hero: {
      title: "联系我们",
      subtitle: "与我们的团队联系，了解咨询、预订或定制旅行计划"
    },
    form: {
      title: "发送消息",
      description: "填写下面的表格，我们将尽快回复您。",
      fullName: "全名",
      fullNamePlaceholder: "您的全名",
      email: "电子邮件地址",
      emailPlaceholder: "您的电子邮件地址",
      phone: "电话号码",
      phonePlaceholder: "您的电话号码",
      subject: "主题",
      subjectPlaceholder: "这是关于什么的？",
      message: "消息",
      messagePlaceholder: "您的消息",
      sendButton: "发送消息",
      sendingButton: "发送中...",
      successMessage: "您的消息已成功发送！我们将尽快回复您。",
      errorMessage: "发送消息时出错。请检查表单并重试。"
    },
    contactInfo: {
      title: "联系信息",
      description: "通过以下任何渠道联系我们",
      location: {
        title: "我们的位置",
        address: "0000 坎帕拉，乌干达"
      },
      phone: {
        title: "电话号码",
        number1: "+256 701 261 427",
        number2: "+256 750 323 993"
      },
      email: {
        title: "电子邮件地址",
        address: "info@Nyonyiholidaysafrica.com"
      },
      hours: {
        title: "工作时间",
        weekdays: "周一至周五：上午9:00 - 下午6:00",
        saturday: "周六：上午10:00 - 下午4:00",
        sunday: "周日：休息"
      },
      social: {
        title: "关注我们"
      },
      map: {
        comingSoon: "交互式地图即将推出",
        viewButton: "在谷歌地图上查看"
      }
    },
    faq: {
      title: "常见问题",
      questions: {
        booking: {
          question: "如何预订旅游？",
          answer: "您可以通过填写上面的联系表格、直接致电我们或使用我们套餐页面上的预订表格来预订旅游。我们将在24小时内回复您，确认您的预订。"
        },
        payment: {
          question: "您接受哪些付款方式？",
          answer: "我们接受信用卡/借记卡、银行转账和移动支付。预订确认需要30%的押金，余额在行程前30天到期。"
        },
        customization: {
          question: "我可以定制旅游套餐吗？",
          answer: "当然可以！我们专注于根据您的偏好、时间框架和预算创建定制行程。请联系我们，告知您的要求，我们将为您设计个性化的体验。"
        },
        cancellation: {
          question: "您的取消政策是什么？",
          answer: "出发前60天或更早取消可获得全额退款，减去100美元的管理费。出发前30-59天取消可获得50%的退款。出发前不到30天取消不予退款。"
        }
      }
    }
  },
  destinationSlider: {
    welcome: "欢迎来到",
    companyName: "尼奥尼非洲假日",
    description: "我们是一家顶级的东非旅游公司，致力于在乌干达、卢旺达及其他地区打造难忘的旅程。源自斯瓦希里语中'鸟'的含义，尼奥尼代表自由、优雅和引导我们品牌的无限探索精神。",
    exploreButton: "立即探索",
    destinations: {
      uganda: {
        location: "乌干达",
        title: "经典大猩猩之旅",
        description: "雄伟的山景等待着您的冒险精神。在穿越原始高山地形的旅程中体验令人叹为观止的景色。"
      },
      eastAfrica: {
        location: "东非",
        title: "乞力马扎罗山",
        description: "非洲最高峰提供了一次具有挑战性的徒步旅行，穿越五个不同的气候带，从茂密的雨林到北极峰顶。"
      }
    }
  },
  visitorStats: {
    title: "我们提供野性体验。",
    subtitle: "我们不找借口—只提供难忘的野生动物园之旅。",
    buttons: {
      explore: "探索我们的冒险",
      startHere: "从这里开始"
    },
    stats: {
      gorillaTrekking: {
        number: "78%",
        label: "大猩猩追踪成功率",
        description: "首次追踪就能看到大猩猩的游客"
      },
      wildlife: {
        number: "81+",
        label: "野生动物邂逅",
        description: "从五大兽到稀有鸟类—每次旅行都充满了野生动物的身影"
      },
      satisfaction: {
        number: "4.9/5",
        label: "客户满意度",
        description: "基于超过2,000条已验证的旅行者评论"
      },
      departures: {
        number: "100%",
        label: "准时出发率",
        description: "每次野生动物园之旅都按计划准时开始和结束"
      }
    }
  },
  featuredAnimals: {
    title: "通过我们的镜头看非洲",
    subtitle: "透过我们的镜头，捕捉非洲的美丽",
    filters: {
      people: "人物",
      art: "艺术",
      culture: "文化",
      landscapes: "风景",
      lifestyle: "生活方式"
    }
  },
  latestNews: {
    header: {
      title: "最新动态",
      subtitle: "了解我们最新的产品和旅行贴士"
    },
    viewAll: "查看所有新闻",
    readMore: "阅读更多",
    newsItems: {
      safari: {
        title: "推出全新野生动物园冒险套餐",
        date: "2023年6月15日",
        excerpt: "通过我们全新的综合野生动物园套餐，体验非洲野生动物的刺激。"
      },
      beaches: {
        title: "2023年十大海滩目的地",
        date: "2023年5月28日",
        excerpt: "为您的下一个假期发现世界上最原始和令人惊叹的海滩。"
      },
      cultural: {
        title: "布尼奥尼湖位于乌干达西南部",
        date: "2023年4月10日",
        excerpt: "通过我们的新文化之旅，深入了解当地传统和真实体验。"
      }
    }
  },
  featuredExhibit: {
    header: {
      title: "精选体验",
      subtitle: "探索我们最非凡的旅行冒险"
    },
    featuredExperience: "精选体验",
    bookButton: "预订此冒险",
    experiences: {
      serengeti: {
        title: "塞伦盖蒂野生动物园冒险",
        description: "踏上穿越塞伦盖蒂广阔平原的难忘旅程。在自然栖息地观赏雄伟的野生动物，从狮子和大象到长颈鹿和斑马。",
        additionalInfo: "我们的专业向导将确保您在星空下的豪华野生动物园旅馆中体验非洲野生动物的精华。",
        features: [
          "7天沉浸式野生动物园体验",
          "见证大迁徙",
          "包含豪华住宿",
          "专业野生动物摄影技巧"
        ]
      },
      gorilla: {
        title: "山地大猩猩探险",
        description: "穿越布温迪的迷雾森林，在自然栖息地遇见濒危的山地大猩猩。一生一次的野生动物体验。",
        additionalInfo: "我们经验丰富的追踪者将安全地引导您穿越森林，以负责任和可持续的方式近距离观察这些壮观的生物。",
        features: [
          "官方大猩猩追踪许可证",
          "专业当地向导和追踪者",
          "舒适的森林住宿",
          "包含保护贡献"
        ]
      },
      cultural: {
        title: "文化沉浸之旅",
        description: "通过沉浸式村庄访问、传统仪式和与当地社区的真实互动，体验东非丰富的文化遗产。",
        additionalInfo: "学习传统工艺，参与舞蹈仪式，了解乌干达和卢旺达各民族群体的日常生活和习俗。",
        features: [
          "村庄寄宿体验",
          "传统烹饪课程",
          "与当地工匠一起的工艺工作坊",
          "真实的文化表演"
        ]
      },
      victoria: {
        title: "维多利亚湖冒险",
        description: "探索非洲最大湖泊的海岸和岛屿，活动包括从船上野生动物园到运动钓鱼和观鸟，体验这个生物多样性生态系统。",
        additionalInfo: "在原始海滩上放松，参观传统渔村，欣赏这个壮丽淡水湖上的壮观日落。",
        features: [
          "岛屿跳跃船游",
          "高级运动钓鱼之旅",
          "湖畔豪华住宿",
          "专业向导观鸟"
        ]
      }
    }
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
