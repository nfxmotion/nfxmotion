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
//  إذا بدك تجبر فيديو يطلع عرضي أو طولي، زيد بآخر السطر:  | wide  أو  | tall
//  انتبه: كل سطر لازم يبلّش ويخلص بـ "  وبعدو فاصلة ,
//
//  videos = الفيديوهات الأساسية
//  soon   = أماكن فاضية ظاهرة مكتوب عليها Soon. بس ترفع فيديو بنفس الاسم،
//           بيحل محلها لحالو. عبّي العنوان والرابط بسطرو.
//  spare  = أماكن محجوزة ومخفية. بتطلع لحالها لما ترفع فيديو بنفس الاسم.
// =====================================================================


// ---------- لما حدا يكبس على صورتك، بيروح على هاد الرابط ----------
var PROFILE_LINK = "https://www.instagram.com/nfx_motion";


// ---------- معلومات التواصل (للفوتر) — يلي بتتركو فاضي ما بيطلع ----------
var CONTACT = {
  phone:     "",
  email:     "",
  instagram: "nfx_motion"
};


// ---------- الأعمال المختارة (فوق، بلا عنوان) ----------
var FEATURED = { layout: "portrait", big: true, videos: [
  "featured-1.mp4 | 3d Motion graphics | https://www.instagram.com/reel/DJKBheTNoUX/ | tall",
  "featured-2.mp4 | AI VFX | https://www.instagram.com/reel/DdesYqwIVEC/ | tall",
  "featured-3.mp4 | Typography | https://www.instagram.com/reel/DUwC0tSkvoR/ | tall",
  "featured-4.mp4 | Syrian Made Logo | https://www.instagram.com/reel/DcrECbmIBNX/ | wide",
  "featured-5.mp4 | 2d Motion graphics | https://www.instagram.com/reel/C_a80KTqmmo/ | wide",
]};


// ---------- الأقسام ----------
//  layout: الشكل الافتراضي للقسم ("landscape" عرضي أو "portrait" طولي)
var SECTIONS = [

  { title: "Podcast Hooks", layout: "landscape",
    videos: [
      "podcast-1.mp4 | intro 1 | https://drive.google.com/file/d/1-kqMpXYjEb0BhaN6h_5sx42YnC_AhASY/view",
      "podcast-2.mp4 | intro 2 | https://drive.google.com/file/d/19VX6k7Lg8XMbeTghluP_iKUzRbBFRnKi/view",
      "podcast-3.mp4 | intro 3 | https://drive.google.com/file/d/1_wPGcBAwCaneWbsqzQR8jYKjEM7WpTPJ/view",
      "podcast-4.mp4 | intro 4 | https://drive.google.com/file/d/1EVxtr4YirnYY2ohb-uzvyCZZTqfi43-8/view",
    ],
    soon: [
      "podcast-5.mp4 |  | ",
      "podcast-6.mp4 |  | ",
    ],
    spare: [
      "podcast-7.mp4 |  | ",
      "podcast-8.mp4 |  | ",
    ]},

  { title: "2D Motion Graphics", layout: "portrait",
    videos: [
      "motion-1.mp4  | 2d Motion Graphic | https://www.instagram.com/reel/Dc8x2ewu0QY/",                        // مافا
      "motion-2.mp4  | 2d Motion Graphic | https://drive.google.com/file/d/1UQnGAHqkFvJm6i3DHB7m99-k2JcK2dTC/view", // منصة وهج ١
      "motion-3.mp4  | 2d Motion Graphic | https://drive.google.com/file/d/1eWPg0N5jkBZjvjf5teJhAksxzyaqvtys/view", // منصة وهج ٢
      "motion-4.mp4  | 2d Motion Graphic | https://drive.google.com/file/d/1EZ_QDjWKbc4gBSjIHTN95KnDaWG2Atcm/view", // منصة وهج ٣
      "motion-5.mp4  | 2d Motion Graphic | https://drive.google.com/file/d/10ctDHBMmqjGvanQ35ZpMY2o_UGhgaADt/view", // منصة وهج ٤
      "motion-6.mp4  | 2d Motion Graphic | https://drive.google.com/file/d/19NooQBYs3QVc-GtCSKBOVIJVkTp9PaLQ/view", // منصة وهج ٥
      "motion-7.mp4  | 2d Motion Graphic | https://www.instagram.com/reel/DMx3DUzCLiT/",                        // مكتبة المودة
      "motion-8.mp4  | 2d Motion Graphic | https://drive.google.com/file/d/1amPQcB3sjtpNoy1fXVe0ikz-UipsY_Ah/view | wide", // تايبوغرافي (عرضي)
      "motion-9.mp4  | 2d Motion Graphic | https://drive.google.com/file/d/1_r4hX2cGiZUE7VZBnlMZGOFfWdbEetH8/view | wide", // الكويت (عرضي)
      "motion-10.mp4 | 2d Motion Graphic | https://drive.google.com/file/d/18WeA44I9-W0PpGlDlx_71ApVF-G2hZq6/view", // لوغو هوية
      "motion-11.mp4 | 2d Motion Graphic | https://drive.google.com/file/d/1jcmqvzva1PJTRNF_97ZQs_TYo8eOqZHC/view", // لوغو فرمان
    ],
    soon: [
      "motion-12.mp4 |  |  | tall",
      "motion-13.mp4 |  |  | tall",
      "motion-14.mp4 |  |  | wide",
      "motion-15.mp4 |  |  | wide",
    ]},

  { title: "Ai Short Films", layout: "landscape",
    videos: [
      "ai-1.mp4 | Opening of the NASTEX Exhibition in the Presence of President Ahmed al-Sharaa. | https://drive.google.com/file/d/1XiPGcaJUWYCpHdJ441Lkj2WiCBuyRRPh/view",
      "ai-2.mp4 | Syrian Airlines | https://drive.google.com/file/d/1CawEEsN7YrPddiUdUvwldW1TOm7qxKh5/view",
    ],
    spare: [
      "ai-3.mp4 |  | ",
      "ai-4.mp4 |  | ",
      "ai-5.mp4 |  | ",
      "ai-6.mp4 |  | ",
    ]},

  { title: "Speed Ramping Reels", layout: "portrait",
    videos: [
      "ramp-1.mp4 | Speed Ramping | https://drive.google.com/file/d/1RHLgOYGObhkfZlU5XNi8RA2l-aWCWjMA/view", // مهاجر قصير
      "ramp-2.mp4 | Speed Ramping | https://drive.google.com/file/d/1Au8livNFQGptsze2HzNrF6d5lcFmwLPo/view", // الخزائن المتقدمة
      "ramp-3.mp4 | Speed Ramping | https://drive.google.com/file/d/1fhKzep84qY-FpasUxDPcDeOKRrss8wvU/view", // مهاجر
      "ramp-4.mp4 | Speed Ramping | https://www.instagram.com/reel/DKuVnkYSNWS/",                        // تيمبرلاند
    ],
    spare: [
      "ramp-5.mp4 |  | ",
      "ramp-6.mp4 |  | ",
      "ramp-7.mp4 |  | ",
      "ramp-8.mp4 |  | ",
    ]},

  { title: "GFX", layout: "landscape",
    videos: [
      "gfx-1.mp4 | Hajar | https://drive.google.com/file/d/1aMTzwpI83-TV32a-NyZffaDi1AEutXWB/view",
    ],
    soon: [
      "gfx-2.mp4 |  |  | wide",
    ],
    spare: [
      "gfx-3.mp4 |  | ",
      "gfx-4.mp4 |  | ",
    ]},

  { title: "Youtube Intros", layout: "landscape",
    videos: [
      "intro-1.mp4 | intro 1 | https://www.instagram.com/reel/DJUOaMhqhT2/", // باب الحارة
      "intro-2.mp4 | intro 2 | https://www.instagram.com/reel/DG5qolbqu9c/", // غيث مروان
      "intro-3.mp4 | intro 3 | https://www.instagram.com/reel/DD2juJIKo7p/", // مدينة الرياض
      "intro-4.mp4 | intro 4 | https://www.instagram.com/reel/DF3GkxUqqBg/", // مجد الزاقوت
    ],
    spare: [
      "intro-5.mp4 |  | ",
      "intro-6.mp4 |  | ",
      "intro-7.mp4 |  | ",
      "intro-8.mp4 |  | ",
    ]},

];
