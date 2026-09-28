export interface Member {
  name: string
  role: string
  edu: string
  bio: string
  color: string
  photo: string | null
  resumePages: string[]
  skills: string[]
}

export const members: Record<string, Member> = {
  'saeid-maeini': {
    name: 'سعید معینی‌نیا', role: 'مجری طرح | مدیرعامل', edu: 'کارشناسی ارشد مدیریت کسب‌وکار (MBA)', color: '#4A8C7C',
    bio: 'برنامه‌ریزی و هدایت طرح، تدوین استراتژی برند و کسب‌وکار، مدیریت محصول و هماهنگی واحدها.',
    photo: '/team/saeid-maeini.jpg',
    resumePages: ['/resumes/saeid-maeini/page-1.png','/resumes/saeid-maeini/page-2.png','/resumes/saeid-maeini/page-3.png','/resumes/saeid-maeini/page-4.png'],
    skills: ['استراتژی برند','مدیریت محصول','توسعه کسب‌وکار','هماهنگی واحدها'],
  },
  'amjad-amiri': {
    name: 'امجد امیری', role: 'مدیر امور حقوقی', edu: 'دکتری حقوق', color: '#818CF8',
    bio: 'تنظیم و بررسی قراردادها، مشاوره حقوقی، مدیریت ریسک‌های حقوقی و امور محرمانگی و مالکیت فکری.',
    photo: '/team/amjad-amiri.jpg', resumePages: [],
    skills: ['حقوق قراردادها','مالکیت فکری','مدیریت ریسک حقوقی','محرمانگی'],
  },
  'mojtaba-roshani': {
    name: 'مجتبی روشنی', role: 'مدیر فنی (CTO)', edu: 'کارشناسی ارشد علوم کامپیوتر', color: '#38BDF8',
    bio: 'طراحی و نظارت بر معماری فنی، مدیریت زیرساخت سامانه، پایداری و مقیاس‌پذیری سیستم.',
    photo: '/team/mojtaba-roshani.jpg',
    resumePages: ['/resumes/mojtaba-roshani/page-1.png','/resumes/mojtaba-roshani/page-2.png','/resumes/mojtaba-roshani/page-3.png','/resumes/mojtaba-roshani/page-4.png'],
    skills: ['معماری سیستم','Cloud Infrastructure','SRE','مقیاس‌پذیری'],
  },
  'danial-khazaei': {
    name: 'دانیال خزاعی', role: 'برنامه‌نویس | متخصص هوش مصنوعی', edu: 'کارشناسی مهندسی کامپیوتر', color: '#A78BFA',
    bio: 'توسعه نرم‌افزار، پیاده‌سازی ماژول‌ها، ادغام و بهینه‌سازی بخش‌های مبتنی بر هوش مصنوعی.',
    photo: null,
    resumePages: ['/resumes/danial-khazaei/page-1.png'],
    skills: ['هوش مصنوعی','Machine Learning','توسعه نرم‌افزار','Python'],
  },
  'abolfazl-asadi': {
    name: 'الفضل اسدی', role: 'مدیر هنری | مسئول طراحی', edu: 'کارشناسی مهندسی صنایع', color: '#F472B6',
    bio: 'طراحی و نظارت بر هویت بصری، استانداردهای گرافیکی و زبان بصری سامانه.',
    photo: '/team/abolfazl-asadi.jpg',
    resumePages: ['/resumes/abolfazl-asadi/page-1.png'],
    skills: ['هویت بصری','طراحی گرافیک','برندینگ بصری','UI Design'],
  },
  'saleh-askarzadeh': {
    name: 'محمد صالح عسکرزاده', role: 'Backend Developer | SRE', edu: 'کارشناسی مهندسی کامپیوتر', color: '#FBBF24',
    bio: 'توسعه‌دهنده بک‌اند با تمرکز بر قابلیت اطمینان و مقیاس‌پذیری تولید.',
    photo: '/team/saleh-askarzadeh.jpg', resumePages: [],
    skills: ['Backend Development','SRE','مقیاس‌پذیری','DevOps'],
  },
}

export const TEAM_SLUGS = Object.keys(members)
