export const greeting = {
  title: "Hi, I'm Madhuritha Alle",
  subtitle:
    "Passionate Computer Science graduate student at SLU | Skilled in Python, Java, SQL, and Machine Learning | Data-driven thinker with a Civil Engineering foundation",
  resumeLink:
    "https://drive.google.com/your-resume-link", // replace with your resume link
};

export const socialMediaLinks = {
  github: "https://github.com/madhuritha22",
  linkedin: "https://linkedin.com/in/madhuritha-alle-2208",
  gmail: "allemadhuritha2001@gmail.com",
};

export const skillsSection = {
  title: "Skills",
  subTitle:
    "Tech-savvy engineer who loves analyzing, building, and improving intelligent systems",
  skills: [
    "⚡ Developing end-to-end machine learning workflows in Python",
    "⚡ Building dynamic web apps using Java, Swing, and MVC pattern",
    "⚡ Performing data analysis with SQL, Pandas, and visualization tools",
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "logos:python" },
    { skillName: "Java", fontAwesomeClassname: "logos:java" },
    { skillName: "SQL", fontAwesomeClassname: "vscode-icons:file-type-sql" },
    { skillName: "Pandas", fontAwesomeClassname: "simple-icons:pandas" },
    { skillName: "NumPy", fontAwesomeClassname: "simple-icons:numpy" },
    { skillName: "Git", fontAwesomeClassname: "logos:git-icon" },
    { skillName: "VS Code", fontAwesomeClassname: "logos:visual-studio-code" },
  ],
};

export const educationInfo = [
  {
    schoolName: "Saint Louis University",
    subHeader: "Master of Science in Computer Science",
    duration: "2024 - 2026",
    desc: "GPA: 4.0/4.0",
  },
  {
    schoolName: "NIT Warangal",
    subHeader: "Bachelor of Technology in Civil Engineering",
    duration: "2019 - 2023",
    desc: "CGPA: 8.97/10.0",
  },
];

export const workExperiences = [
  {
    role: "Freelance Business Analyst",
    company: "Remote",
    date: "2023 – Present",
    descBullets: [
      "Helped businesses analyze trends and streamline decision-making using dashboards and SQL data",
      "Assisted clients in designing lightweight analytics pipelines using Python and Excel",
    ],
  },
  {
    role: "OOPS and DBMS Intern",
    company: "NIT Warangal",
    date: "May 2022 – Jun 2022",
    descBullets: [
      "Assisted in schema design, normalization, and query optimization using MySQL",
      "Participated in training sessions on object-oriented programming with Java",
    ],
  },
];

export const projects = [
  {
    name: "Object Localization Pipeline",
    desc: "End-to-end ML project to localize objects in images using CNNs and OpenCV",
    github: "https://github.com/madhuritha22/object-localization",
  },
  {
    name: "Personal Expense Tracker",
    desc: "Streamlit-based app to track personal expenses with CSV import/export and plots",
    github: "https://github.com/madhuritha22/expense-tracker",
  },
  {
    name: "Battleship Game (Java)",
    desc: "Two-player Battleship game using Java Swing, featuring animations and hit/miss tracking",
    github: "https://github.com/madhuritha22/battleship",
  },
  {
    name: "Bellabeat Case Study",
    desc: "Data analytics project using R and SQL to analyze smart device usage patterns",
    github: "https://github.com/madhuritha22/bellabeat",
  },
];

export const achievementSection = {
  title: "Certifications",
  subtitle: "Courses and Microcredentials",
  achievementsCards: [
    {
      title: "Google Data Analytics Certificate",
      subtitle: "Coursera Professional Certificate",
      image: "https://cdn.worldvectorlogo.com/logos/google.svg",
    },
    {
      title: "IBM Introduction to Data Science",
      subtitle: "Coursera Course",
      image: "https://cdn.worldvectorlogo.com/logos/ibm.svg",
    },
  ],
};

export const contactInfo = {
  title: "Contact Me",
  subtitle:
    "I’m always open to collaboration, freelance projects, and discussions on data science and software engineering.",
  number: "",
  email_address: "allemadhuritha2001@gmail.com",
};

export const isBlogSectionVisible = false;
export const openSource = { showGithubProfile: false };
export const blogSection = { display: false };
export const talkSection = { title: "", subtitle: "", talks: [] };
export const illustration = {
  animated: true,
};
export const viewResume = true;

export const splashScreen = {
  enabled: false,
  animation: false,
};
export const bigProjects = {
  title: "",
  subtitle: "",
  projects: [],
  image: "",
  repo: "",
  display: false, // <--- hides the component safely
};
export const resumeSection = {
  title: "Resume",
  description: "View or download my resume",
  url: "https://drive.google.com/file/d/1iVCZuo042_WmSbhYv1vHLYStXYE9NQ5C/view?usp=drive_link", // Replace with your actual resume link
};
