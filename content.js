/* =====================================================================
   PORTFOLIO CONTENT: edit this file to update the site.
   ---------------------------------------------------------------------
   The site has 3 pages: Home, Work (case studies + projects) and
   About (experience, skills, contact). Everything below fills them.

   • Text: change anything between quotes.
   • Links: paste a full URL (https://...). Leave "" to hide that link.
   • Photos: put the image in the /images folder and write its path,
     e.g. "images/my-photo.jpg".
   • Add an item: copy one { ... } block in a list, paste it after a
     comma, and change the text. Delete a block to remove it.
   • id: a short name with letters, numbers and dashes only. It makes a
     direct link, e.g. yoursite.com/#google-photos opens that case study.
   • Empty lists [] hide their section (Education, Accomplishments, Team).
   ===================================================================== */

window.PORTFOLIO = {

  profile: {
    name: "Lohith K Aditya",
    role: "Aspiring Product Manager",
    tagline: ["Tech roots", "Ops experience", "Product mindset"],
    intro: "Three years supporting live systems at TCS, then store operations at Blinkit. Now I bring both to product work: find where users get stuck and test the smallest fix that moves the metric.",
    location: "Bengaluru, India",
    timezone: "Asia/Kolkata",
    availability: "Open to product roles",
    photo: "images/photo.jpg",
    email: "lohithgowda523@gmail.com",
    links: {
      resume: "",          // paste your resume link (Google Drive / PDF URL)
      linkedin: "",        // paste your LinkedIn profile URL
      github: "https://github.com/lohith307",
      nextleap: "https://nextleap.app/portfolio/lohith-k-gowda"
    }
  },

  /* 4 quick facts on Home. link = the id of the item it should open. */
  highlights: [
    { value: "3 yrs",  label: "Engineering at TCS",        link: "exp-tcs" },
    { value: "1+ yr",  label: "Store ops at Blinkit",      link: "exp-blinkit" },
    { value: "14 wks", label: "NextLeap PM Fellowship",    link: "chatgpt-voice" },
    { value: "70%",    label: "MVP success vs 60% baseline", link: "google-photos" }
  ],

  /* Short paragraph at the top of the About page */
  about: "I started in engineering, supporting live applications where a missed alert meant a stalled business. At Blinkit I ran store operations, where every minute of delay shows up in a customer's order. Product is where reading systems and reading people meet.",

  /* ---------------- CASE STUDIES (Work page) ----------------
     visual: "search" or "voice" draws a built-in animation.
     image:  "images/your-file.jpg" shows your own picture instead. */
  caseStudies: [
    {
      id: "google-photos",
      title: "Google Photos: search that listens",
      context: "Graduation project · NextLeap PM Fellowship",
      summary: "Users remember the photo, but search forgets how to listen. In 1 of 3 failed searches, the user named a clear detail and still got nothing back.",
      tags: ["User research", "Discovery", "MVP testing"],
      visual: "search",
      image: "",
      stats: [
        { value: "39",    label: "Reviews and posts tagged" },
        { value: "30%",   label: "Failures from the system understanding gap" },
        { value: "13/15", label: "Say only date search works" },
        { value: "70%",   label: "MVP success vs 60% baseline" }
      ],
      method: "39-entry discovery dataset · 15-person survey · 6 interviews · 10-person MVP test",
      links: [
        { label: "AI Discovery Engine", url: "" },   // paste link
        { label: "Deployed MVP", url: "" },          // paste link
        { label: "Full case study on NextLeap", url: "https://nextleap.app/portfolio/lohith-k-gowda" }
      ]
    },
    {
      id: "chatgpt-voice",
      title: "More voice input on the ChatGPT mobile app",
      context: "Case study · 14-week PM Fellowship",
      summary: "How do you get more people to talk to ChatGPT on their phones instead of typing? Three submitted modules, from mapping the system to choosing success metrics.",
      tags: ["Systems thinking", "Prioritisation", "Growth"],
      visual: "voice",
      image: "",
      modules: [
        { title: "Systems Thinking & Mapping", tags: "Market analysis, mapping outcomes" },
        { title: "User Research & Problem Framing", tags: "User segmentation, user research" },
        { title: "Prioritisation, Metrics & Growth", tags: "Wireframes, success metrics" }
      ],
      method: "",
      links: [
        { label: "Full case study on NextLeap", url: "https://nextleap.app/portfolio/lohith-k-gowda" }
      ]
    }
  ],

  /* ---------------- PROJECTS (Work page) ---------------- */
  projects: [
    { name: "Jenkins-Realworld-CICD-Project", url: "https://github.com/lohith307/Jenkins-Realworld-CICD-Project", langs: [], note: "CI/CD pipeline" },
    { name: "complete-cicd-project-microdegree", url: "https://github.com/lohith307/complete-cicd-project-microdegree", langs: ["Java", "HTML", "Dockerfile"], note: "End-to-end CI/CD" },
    { name: "AWS-cloud-projects", url: "https://github.com/lohith307/AWS-cloud-projects", langs: [], note: "Cloud" },
    { name: "lohith307.github.io", url: "https://github.com/lohith307/lohith307.github.io", langs: ["HTML", "JavaScript", "CSS"], note: "Personal site" },
    { name: "nextleap", url: "https://github.com/lohith307/nextleap", langs: [], note: "Fellowship work" },
    { name: "Ephemeral-", url: "https://github.com/lohith307/Ephemeral-", langs: [], note: "" }
  ],

  /* ---------------- EXPERIENCE (About page) ---------------- */
  experience: [
    {
      id: "exp-blinkit",
      role: "Assistant Store Manager",
      company: "Blinkit",
      period: "Jun 2025 – Oct 2026",
      place: "Bangalore · Full-time",
      points: []   // add short bullet lines, e.g. "Cut order picking time by 12%"
    },
    {
      id: "exp-tcs",
      role: "System Engineer / Application Support Engineer",
      company: "Tata Consultancy Services",
      period: "Dec 2021 – Dec 2024",
      place: "Bangalore · Full-time",
      points: []
    }
  ],

  education: [
    // { degree: "B.E. Computer Science", school: "College name", period: "2017 – 2021" }
  ],

  skills: [
    { group: "Product", items: ["User research", "Problem framing", "User segmentation", "Market analysis", "Prioritisation", "Success metrics", "Wireframes"] },
    { group: "Engineering", items: ["Application support", "CI/CD with Jenkins", "AWS", "Docker", "Java", "HTML, CSS, JavaScript"] },
    { group: "Operations", items: ["Store operations", "Team leadership", "Order fulfilment"] }
  ],

  /* Add items to show this section on the About page.
     { year: "2026", title: "Award or milestone", text: "One line", image: "images/award.jpg" } */
  accomplishments: [],

  /* Add people to show this section on the About page.
     { name: "Name", role: "Their role", photo: "images/person.jpg", note: "What you built together" } */
  team: [],

  contact: {
    title: "Get in touch",
    text: "Hiring for a product role, or want to talk through a problem? Write to me."
  }
};
