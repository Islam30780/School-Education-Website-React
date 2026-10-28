import NAEYCIcon from "../../assets/icons/NAEYC.svg";
import BroadcastIcon from "../../assets/icons/broadcast.svg";
import ElectricityIcon from "../../assets/icons/electricity.svg";
const IMAGE_BASE = "/images";
const ICONS_BASE = `${IMAGE_BASE}/icons`;
const TEACHERS_BASE = `${IMAGE_BASE}/teachers`;

// ألوان التصميم
export const ABOUT_COLORS = {
  page: "#FFF5F0",
  white: "#FFFFFF",
  ink: "#262626",
  text: "#333333",
  muted: "#4C4C4D",
  peach: "#FFDECC",
  orange: "#FF8D4D",
};

// الزخرفة الرئيسية
// المسار حسب الملف الموجود عندك داخل public/images/about
export const ABSTRACT_DESIGN =
  "/images/about/Abstract%20Design%20(4).svg";

// أيقونات الرسالة والرؤية والبريد
export const MISSION_ICON =
  `${ICONS_BASE}/mission.svg`;

export const VISION_ICON =
  `${ICONS_BASE}/vision.svg`;

export const EMAIL_ICON =
  `${ICONS_BASE}/email.svg`;

// الجوائز
export const ABOUT_AWARDS = [
  {
    iconImage: NAEYCIcon,
    icon: "✦",
    title: "Outstanding Early Childhood Education Award",
    description:
      "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
  },
  {
    iconImage: BroadcastIcon,
    icon: "▦",
    title: "Innovative STEAM Education Award",
    description:
      "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
  },
  {
    iconImage: ElectricityIcon,
    icon: "♧",
    title: "Environmental Stewardship Award",
    description:
      "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
  },
];

// التاريخ — السنوات نص وليست صوراً
export const ABOUT_HISTORY = [
  {
    year: "2023",
    title: "Resilience and Future Horizons",
    description:
      "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.",
  },
  {
    year: "2017",
    title: "Innovation and Technology",
    description:
      "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.",
  },
  {
    year: "2012",
    title: "Expansion and Recognition",
    description:
      "These years marked a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.",
  },
  {
    year: "2005",
    title: "Inception and Growth",
    description:
      "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth.",
  },
];

// المعلمون وصورهم
export const ABOUT_TEACHERS = [
  {
    name: "Ms. Sarah Anderson",
    initials: "SA",
    email: "sarah@example.com",
    image: `${TEACHERS_BASE}/sarah-anderson.png`,
    qualification:
      "Bachelor's Degree in Early Childhood Education",
    bio:
      "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
  },
  {
    name: "Mr. David Roberts",
    initials: "DR",
    email: "david@example.com",
    image: `${TEACHERS_BASE}/david-roberts.png`,
    qualification:
      "Master's Degree in Elementary Education",
    bio:
      "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.",
  },
  {
    name: "Ms. Emily Hernandez",
    initials: "EH",
    email: "emily@example.com",
    image: `${TEACHERS_BASE}/emily-hernandez.png`,
    qualification: "Diploma in Child Psychology",
    bio:
      "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.",
  },
  {
    name: "Mr. Michael Turner",
    initials: "MT",
    email: "michael@example.com",
    image: `${TEACHERS_BASE}/michael-turner.png`,
    qualification:
      "Bachelor's Degree in Physical Education",
    bio:
      "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.",
  },
  {
    name: "Ms. Jessica Lee",
    initials: "JL",
    email: "jessica@example.com",
    image: `${TEACHERS_BASE}/jessica-lee.png`,
    qualification:
      "Master's Degree in Special Education",
    bio:
      "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.",
  },
  {
    name: "Mr. William Parker",
    initials: "WP",
    email: "william@example.com",
    image: `${TEACHERS_BASE}/william-parker.png`,
    qualification:
      "Bachelor's Degree in Fine Arts",
    bio:
      "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.",
  },
];