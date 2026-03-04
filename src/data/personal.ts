import { PersonalInfo } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Your Name",
  firstName: "Your",
  titles: [
    "Data Engineer",
    "Cloud Architect",
    "Python Developer",
    "ETL Specialist",
  ],
  bio: "I am a passionate Data Engineer with expertise in building scalable data pipelines, cloud infrastructure, and analytics platforms. I love transforming raw data into actionable insights and designing systems that power data-driven decision making. With experience across multiple cloud platforms and modern data stack technologies, I strive to create efficient, reliable, and maintainable data solutions.",
  email: "your.email@example.com",
  socialLinks: [
    {
      platform: "github",
      url: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      platform: "email",
      url: "mailto:your.email@example.com",
      label: "Email",
    },
  ],
};
