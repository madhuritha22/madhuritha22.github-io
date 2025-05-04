/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "madhuritha22",
  title: "Hi all, I'm Madhuritha Alle",
  subTitle: emoji(
    "Master's in Computer Science @ SLU | Data Enthusiast | Ex-Business Analyst | Skilled in Python, SQL, Java & Machine Learning"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1iVCZuo042_WmSbhYv1vHLYStXYE9NQ5C/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/madhuritha22",
  linkedin: "https://www.linkedin.com/in/madhuritha-alle-2208/",
  gmail: "allemadhuritha2001@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate about building impactful tech solutions",
  skills: [
    "⚡ Analyzing real-world data using Python and ML libraries",
    "⚡ Designing full-stack applications with authentication and SQL-based backends",
    "⚡ Building end-to-end ML pipelines including object localization and predictive modeling"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {skillName: "Python", fontAwesomeClassname: "logos:python"},
    {skillName: "Java", fontAwesomeClassname: "logos:java"},
    {skillName: "SQL", fontAwesomeClassname: "logos:mysql"},
    {skillName: "Pandas", fontAwesomeClassname: "simple-icons:pandas"},
    {skillName: "NumPy", fontAwesomeClassname: "simple-icons:numpy"},
    {
      skillName: "scikit-learn",
      fontAwesomeClassname: "simple-icons:scikitlearn"
    },
    {skillName: "Matplotlib", fontAwesomeClassname: "simple-icons:matplotlib"},
    {skillName: "Git", fontAwesomeClassname: "logos:git-icon"}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Saint Louis University",
      subtitle: "MS in Computer Science",
      logo_path: "slulogo.png", // optional: upload your university logo
      alt_name: "SLU",
      duration: "Aug 2024 – Present",
      descriptions: ["Current GPA: 4.0/4.0"]
    },
    {
      schoolName: "National Institute of Technology Warangal",
      subtitle: "B.Tech in Civil Engineering",
      logo_path: "nitw.png",
      alt_name: "NITW",
      duration: "Aug 2019 – May 2023",
      descriptions: ["CGPA: 8.97/10.0"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

/*const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};
*/
// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Business Analyst (Freelance)",
      company: "Sri Rajarajeswara Builders",
      //companylogo: require("./assets/images/facebookLogo.png"),
      date: "July 2022 – July 2024",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Assisted in maintaining property records and organizing sales data",
        " Used Excel and MySQL to track land listings, inquiries, and sales",
        " Helped improve operational efficiency with clean data management"
      ]
    },
    {
      title: "OOPS and DBMS Intern",
      company: "NIT Warangal",
      duration: "May 2022 – Jun 2022",
      descBullets: [
        "Assisted in schema design, normalization, and query optimization using MySQL",
        "Participated in team discussions on object-oriented programming and DBMS structure"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  //subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Counterfeit Product Detector",
      projectDesc:
        "A multi-modal machine learning app that detects counterfeit products using: Product image (CNN),Customer review text (TF-IDF),Product price (metadata).Built using TensorFlow, Gradio, and deployed to Hugging Face Spaces.",
      footerLink: [
        {
          name: "Try it live",
          url: "https://huggingface.co/spaces/Madhuritha/counterfeit-detector"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      //image: require("./assets/images/nextuLogo.webp"),
      projectName: "Bellabeat Case Study",
      projectDesc:
        "Analyzed fitness tracker data using R and SQL. Created dashboards and presented insights for health-focused product strategy (Google Data Analytics capstone).",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/madhuritha22/bellabeat-case-study"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji(" Certifications "),
  subtitle: "Certifications that I have done !",

  achievementsCards: [
    {
      title: "Google Data Analytics Professional Certificate",
      subtitle: "Google",
      logo_path: "googlelogo.png",
      certificate_link: "#", // optional
      alt_name: "Google",
      color_code: "#4285F4"
    },
    {
      title: "Intro to Data Science",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link: "#",
      alt_name: "IBM",
      color_code: "#1F70C1"
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections
/*
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};
*/
// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "allemadhuritha2001@gmail.com"
};

// Twitter Section

/*const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};*/

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  //techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  //talkSection,
  //podcastSection,
  contactInfo,
  //twitterDetails,
  isHireable,
  resumeSection
};
