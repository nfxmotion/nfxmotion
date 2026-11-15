// =====================================================================
//  NFX Motion — قائمة الأعمال
//  هاد الملف الوحيد يلي بتحتاج تعدّل عليه. التصميم كلو بملف index.html
//
//  كل فيديو سطر واحد بهالشكل:
//      "اسم الملف | العنوان | الرابط",
//
//  - اسم الملف: نفس اسم الفيديو يلي رفعته جوّا فولدر videos
//  - العنوان: الكلمة يلي بتطلع تحت الفيديو
//  - الرابط: رابط درايف أو إنستا. إذا فاضي، ما بتطلع "Watch full video"
//    (إذا ما في رابط بس بدك تجبر عرضي/طولي، اترك مكان الرابط فاضي:  "gfx-2.mp4 |  |  | wide")
//
//  الفيديو العرضي والطولي بيتعرفوا لحالهن من الفيديو نفسه.
//  إذا بدك تجبر فيديو يطلع عرضي أو طولي أو مربع، زيد بآخر السطر:  | wide  أو  | tall  أو  | square
//  انتبه: كل سطر لازم يبلّش ويخلص بـ "  وبعدو فاصلة ,
//
//  videos = الفيديوهات الأساسية
//  soon   = أماكن ظاهرة مكتوب عليها Soon (حالياً ما في ولا واحد، كلها صارت spare مخفية)
//  spare  = أماكن محجوزة ومخفية. بتطلع لحالها لما ترفع فيديو بنفس الاسم.
// =====================================================================


// ---------- لما حدا يكبس على صورتك، بيروح على هاد الرابط ----------
var PROFILE_LINK = "https://www.instagram.com/nfx_motion";


// ---------- فيديوهات المقدمة (أول الموقع) ----------
//  نفس طريقة الأقسام:  "اسم الملف | العنوان | الرابط"
//  حالياً فاضية: فيديوهات hero انتقلت لقسم Selected Works
var INTRO = { layout: "portrait", videos: [
]};


// ---------- معلومات التواصل — يلي بتتركو فاضي ما بيطلع ----------
var CONTACT = {
  whatsapp:        "00971501167107",
  whatsappDisplay: "+971 50 116 7107",
  email:           "",
  instagram:       "nfx_motion"
};


// ---------- شريط الشركات ----------
//  كل سطر:  "اسم الشركة | اسم ملف اللوغو"
//  اللوغوهات بتنحط جوّا فولدر images (نفس مكان صورتك). إذا ما في لوغو، بيطلع اسم الشركة مكتوب
var CLIENTS = [
  "Damma | damma.png",
  "NASTEX | nastex.png",
  "Ministry of Public Works and Housing | mopwh.png",
  "Ministry of Economy and Industry | moei.png",
  "Syrian-Chinese Business Council | syria-china-council.png",
  "Mouhajer International | mouhajer.png",
  "Timberland | timberland.png",
];


// ---------- قسم About ----------
//  النص العادي = فقرة.  القائمة بين [ ] = صف أرقام:  "الرقم | الوصف"
//  ⚠️ النصوص والأرقام تجريبية، لازم تتبدل بالحقيقية قبل النشر
var ABOUT = [
  "I'm Yaman, a motion graphics designer and video editor working under the name NFX Motion. I design and animate logo reveals, YouTube intros, podcast hooks, commercials and AI-assisted short films.",
  [ "6+ | Years of experience", "300+ | Videos delivered", "50+ | Brands and creators" ],
  "Every project starts with the idea and the rhythm. I build each frame until the motion feels right, not just busy, so the message lands in the first seconds and people keep watching.",
  [ "2M+ | Views on client content", "8 | Countries reached", "48h | Average first draft" ],
  "Whether it's a brand launch, a TV program or a quick reel, I bring the same care to it: clear communication, fast delivery and work that brings results.",
];


// ---------- الأعمال المختارة (فوق، بلا عنوان) ----------
var FEATURED = { layout: "portrait", big: true, videos: [
  "featured-1.mp4 | 3D Motion Graphics | https://www.instagram.com/reel/DJKBheTNoUX/ | tall",
  "featured-2.mp4 | AI VFX | https://www.instagram.com/reel/DdesYqwIVEC/ | tall",
  "featured-3.mp4 | Typography | https://www.instagram.com/reel/DUwC0tSkvoR/ | tall",
  "hero-1.mp4 |  | https://drive.google.com/file/d/1dQb7exxQeB7cJJ90NDcLLkCccbhVpHdq/view | tall",
  "hero-2.mp4 |  | https://www.instagram.com/reel/Dfp0rNaoQjY/ | tall",
  "featured-4.mp4 | Syrian Made Logo | https://www.instagram.com/reel/DcrECbmIBNX/ | wide",
  "featured-6.mp4 |  | https://www.instagram.com/reel/DePRguhIEdO/ | square",   // الفيديو المربع الكبير بالنص
  "featured-5.mp4 | 2D Motion Graphics | https://www.instagram.com/reel/C_a80KTqmmo/ | wide",
]};


// ---------- الأقسام ----------
//  layout: الشكل الافتراضي للقسم ("landscape" عرضي أو "portrait" طولي)
//  titleAr: اسم القسم لما الموقع يكون بالعربي
var SECTIONS = [

  { title: "Podcast Hooks", titleAr: "مقتطفات بودكاست", layout: "landscape",
    videos: [
      "podcast-1.mp4 |  | https://drive.google.com/file/d/1-kqMpXYjEb0BhaN6h_5sx42YnC_AhASY/view",
      "podcast-2.mp4 |  | https://drive.google.com/file/d/19VX6k7Lg8XMbeTghluP_iKUzRbBFRnKi/view",
      "podcast-3.mp4 |  | https://drive.google.com/file/d/1_wPGcBAwCaneWbsqzQR8jYKjEM7WpTPJ/view",
      "podcast-4.mp4 |  | https://drive.google.com/file/d/1EVxtr4YirnYY2ohb-uzvyCZZTqfi43-8/view",
      "podcast-5.mp4 |  | https://drive.google.com/file/d/1KsI1zwN-Jzur-28TXoEmD_KZT2SFWLyF/view",
    ],
    spare: [
      "podcast-6.mp4 |  | ",
      "podcast-7.mp4 |  | ",
      "podcast-8.mp4 |  | ",
    ]},

  { title: "2D Motion Graphics", titleAr: "موشن غرافيك ثنائي الأبعاد", layout: "portrait",
    videos: [
      "motion-1.mp4 | Mafa | https://www.instagram.com/reel/Dc8x2ewu0QY/",                        // مافا
      "motion-2.mp4 | Wahaj Platform | https://drive.google.com/file/d/1UQnGAHqkFvJm6i3DHB7m99-k2JcK2dTC/view", // منصة وهج ١
      "motion-3.mp4 | Wahaj Platform | https://drive.google.com/file/d/1eWPg0N5jkBZjvjf5teJhAksxzyaqvtys/view", // منصة وهج ٢
      "motion-4.mp4 | Wahaj Platform | https://drive.google.com/file/d/1EZ_QDjWKbc4gBSjIHTN95KnDaWG2Atcm/view", // منصة وهج ٣
      "motion-5.mp4 | Wahaj Platform | https://drive.google.com/file/d/10ctDHBMmqjGvanQ35ZpMY2o_UGhgaADt/view", // منصة وهج ٤
      "motion-6.mp4 | Wahaj Platform | https://drive.google.com/file/d/19NooQBYs3QVc-GtCSKBOVIJVkTp9PaLQ/view", // منصة وهج ٥
      "motion-7.mp4 | Al-Mawadda Library | https://www.instagram.com/reel/DMx3DUzCLiT/",                        // مكتبة المودة
      "motion-8.mp4 | Typography | https://drive.google.com/file/d/1amPQcB3sjtpNoy1fXVe0ikz-UipsY_Ah/view | wide", // تايبوغرافي (عرضي)
      "motion-9.mp4 | Kuwait | https://drive.google.com/file/d/1_r4hX2cGiZUE7VZBnlMZGOFfWdbEetH8/view | wide", // الكويت (عرضي)
      "motion-10.mp4 | Hawiya | https://drive.google.com/file/d/18WeA44I9-W0PpGlDlx_71ApVF-G2hZq6/view", // لوغو هوية
      "motion-11.mp4 | Faraman | https://drive.google.com/file/d/1jcmqvzva1PJTRNF_97ZQs_TYo8eOqZHC/view", // لوغو فرمان
    ],
    spare: [
      "motion-12.mp4 |  |  | tall",
      "motion-13.mp4 |  |  | tall",
      "motion-14.mp4 |  |  | wide",
      "motion-15.mp4 |  |  | wide",
    ]},

  { title: "AI Short Films", titleAr: "أفلام قصيرة بالذكاء الاصطناعي", layout: "landscape",
    videos: [
      "ai-1.mp4 | NASTEX Exhibition Opening | https://drive.google.com/file/d/1XiPGcaJUWYCpHdJ441Lkj2WiCBuyRRPh/view",
      "ai-2.mp4 | Syrian Airlines | https://drive.google.com/file/d/1CawEEsN7YrPddiUdUvwldW1TOm7qxKh5/view",
      "ai-3.mp4 |  | https://drive.google.com/file/d/1ZzEb8NSstmPMc1GDWVTRjDXQNdJSaCEh/view | wide",
    ],
    spare: [
      "ai-4.mp4 |  | ",
      "ai-5.mp4 |  | ",
      "ai-6.mp4 |  | ",
    ]},

  { title: "Speed Ramping Reels", titleAr: "ريلز سبيد رامبينغ", layout: "portrait",
    videos: [
      "ramp-1.mp4 | Mouhajer | https://drive.google.com/file/d/1RHLgOYGObhkfZlU5XNi8RA2l-aWCWjMA/view", // مهاجر قصير
      "ramp-2.mp4 | Advanced Cabinets | https://drive.google.com/file/d/1Au8livNFQGptsze2HzNrF6d5lcFmwLPo/view", // الخزائن المتقدمة
      "ramp-3.mp4 | Mouhajer | https://drive.google.com/file/d/1fhKzep84qY-FpasUxDPcDeOKRrss8wvU/view", // مهاجر
      "ramp-4.mp4 | Timberland | https://www.instagram.com/reel/DKuVnkYSNWS/",                        // تيمبرلاند
    ],
    spare: [
      "ramp-5.mp4 |  | ",
      "ramp-6.mp4 |  | ",
      "ramp-7.mp4 |  | ",
      "ramp-8.mp4 |  | ",
    ]},

  { title: "GFX", titleAr: "GFX", layout: "landscape", hidden: true,   // القسم مخفي — احذف "hidden: true" لإظهاره
    videos: [
      "gfx-1.mp4 | Hajar | https://drive.google.com/file/d/1aMTzwpI83-TV32a-NyZffaDi1AEutXWB/view",
    ],
    spare: [
      "gfx-2.mp4 |  |  | wide",
      "gfx-3.mp4 |  | ",
      "gfx-4.mp4 |  | ",
    ]},

  { title: "YouTube Intros", titleAr: "مقدمات يوتيوب", layout: "landscape",
    videos: [
      "intro-1.mp4 | Bab Al-Hara | https://www.instagram.com/reel/DJUOaMhqhT2/", // باب الحارة
      "intro-2.mp4 | Ghaith Marwan | https://www.instagram.com/reel/DG5qolbqu9c/", // غيث مروان
      "intro-3.mp4 | Riyadh City | https://www.instagram.com/reel/DD2juJIKo7p/", // مدينة الرياض
      "intro-4.mp4 | Majd Al-Zaqout | https://www.instagram.com/reel/DF3GkxUqqBg/", // مجد الزاقوت
    ],
    spare: [
      "intro-5.mp4 |  | ",
      "intro-6.mp4 |  | ",
      "intro-7.mp4 |  | ",
      "intro-8.mp4 |  | ",
    ]},

  { title: "Logo Animation", titleAr: "تحريك الشعارات", layout: "landscape",
    videos: [
      "logo-1.mp4 |  | ",
      "logo-2.mp4 |  | ",
      "logo-3.mp4 |  | ",
      "logo-4.mp4 |  | ",
    ],
    spare: [
      "logo-5.mp4 |  |  | wide",
      "logo-6.mp4 |  |  | wide",
    ]},

];


// ---------- قسم About بالعربي (بيطلع لما الزائر يحوّل الموقع للعربي) ----------
//  نفس الترتيب والطريقة تبع ABOUT
//  ⚠️ النصوص والأرقام تجريبية، لازم تتبدل بالحقيقية قبل النشر
var ABOUT_AR = [
  "أنا يمان، مصمم موشن غرافيك ومونتير أعمل باسم NFX Motion. أصمم وأحرّك الشعارات ومقدمات يوتيوب ومقتطفات البودكاست والإعلانات والأفلام القصيرة المصنوعة بمساعدة الذكاء الاصطناعي.",
  [ "6+ | سنوات خبرة", "300+ | فيديو تم تسليمه", "50+ | علامة تجارية وصانع محتوى" ],
  "كل مشروع يبدأ من الفكرة والإيقاع. أبني كل فريم حتى تصبح الحركة صحيحة لا مزدحمة، لتصل الرسالة من الثواني الأولى ويستمر الناس في المشاهدة.",
  [ "2M+ | مشاهدة لمحتوى العملاء", "8 | دول وصل إليها العمل", "48h | متوسط وقت المسودة الأولى" ],
  "سواء كان إطلاق علامة تجارية أو برنامجاً تلفزيونياً أو ريلز سريعاً، أعطيه نفس الاهتمام: تواصل واضح، وتسليم سريع، وعمل يحقق نتائج.",
];
