function createResumePDFButton() {
  const resumePDFButton = document.createElement("button");
  resumePDFButton.setAttribute("id", "resume-pdf-button-id");
  resumePDFButton.setAttribute("class", "basic-button");

  const buttonText = document.createTextNode("Get Resume As PDF");
  resumePDFButton.appendChild(buttonText);

  resumePDFButton.addEventListener("click", function (event) {
    window.open("GuntasJammuResume.pdf", "_blank");
  });

  return resumePDFButton;
}

function createResumeTag() {
  const resumeTag = document.createElement("p");
  const resumeText = document.createTextNode("");
  resumeTag.appendChild(resumeText);
  return resumeTag;
}

function getDisplayDiv() {
  return document.getElementById("display-div");
}

function displayResume() {
  const displayDiv = getDisplayDiv();
  const resumeTag = createResumeTag();
  const resumePDFButton = createResumePDFButton();

  displayDiv.innerHTML = "";

  displayDiv.appendChild(resumePDFButton);
  displayDiv.appendChild(resumeTag);
}

function displayEducationalBackground() {
  const displayDiv = getDisplayDiv();
  const educationalBackgroundTag = document.createElement("p");
  const educationalBackgroundText = document.createTextNode(
    `I began to take classes associated with Computer Science in High School. I was fortunate that my school had some classes offered that taught computer programming. From there, I learned Java, and I never looked back. I started to use the coding skills that I had gained in other classes as well such as Calculus 3 which I also took in High School. 

    I graduated Shawnee Mission Northwest in 2021. I was involved with the National Honors Society there. During high school, I took several college classes via AP credit and dual enrollment. These classes helped me be prepared for college.
    
    I then enrolled in UMKC in the Fall of 2021, and I have been working towards getting my BS in Computer Science as well as getting a business degree. After getting these degrees, I want to work towards getting a Masters in Computer Science as well. 
    `
  );

  displayDiv.innerHTML = "";
  displayDiv.appendChild(createElementWithTextNode("h3", "Educational Background"));

  educationalBackgroundTag.appendChild(educationalBackgroundText);

  displayDiv.appendChild(educationalBackgroundTag);
  displayDiv.appendChild(createCoursesTaken());
}

function createCoursesTaken() {
  const ul = document.createElement("ul");
  const coursesTaken = [
    "ACCTNG 210 Intro To Financial Actg)",
    "ACCTNG 211 Intro To Managerial Actg",
    "BIOLOGY 108 General Biology I",
    "COMM-ST 110 Fun Of Effect Sp & List",
    "COMP-SCI 191 Discrete Structures I",
    "COMP-SCI 201L Problem Solving/Program Lab II",
    "COMP-SCI 201R Problm Slvng & Prgmg II",
    "COMP-SCI 281R Intro Cmptr Architecture & Org",
    "COMP-SCI 291 Discrete Structures II",
    `COMP-SCI 303
        Data Structures`,

    `COMP-SCI 304WI
        Ethics & Professionalism`,

    `COMP-SCI 320
        Data Com. and Networking`,

    `COMP-SCI 349
        Java Program Application`,

    `COMP-SCI 353
        Functional Programming`,

    `COMP-SCI 394R
        Applied Probability`,

    `COMP-SCI 404
        Intro to Algorithms & Complex`,

    `COMP-SCI 431
        Intro Operating Systems`,

    `COMP-SCI 441
        Progrm Lang:Desgn & Imp`,

    `COMP-SCI 449
        Found of Software Engin`,

    `COMP-SCI 451R
        Software Engineering Capstone`,

    `COMP-SCI 456
        Human Computer Interface`,

    `COMP-SCI 461
        Intro Artificial Intell`,

    `COMP-SCI 470
        In Database Mgmt Systems`,

    `COMP-SCI 490WD
        Special Topics (Web Development)`,

    `DSOM 311
        Business Analytics II`,

    `ENGLISH 225
        Eng II:Inter Acad Prose`,

    `ENT 315
        ENT Mindset & Opp Recognition`,

    `ENT 326
        Creativity/Innovation/Prb Solv`,

    `ENT 341
        Technology Entrepreneurship`,

    `ENT 361
        New Product Development`,

    `FIN 325
        Financial Management`,

    `GECDV 206
        Exploring Intersectionality`,

    `GECRT-AH 112
        Comedy as Art`,

    `GEFSE 101
        First Semester Experience`,

    `MATH 300
        Linear Algebra I`,

    `MGT 256
        Legal & Reg Contexts of Orgs`,

    `MGT 301
        Effective Business Communicati`,

    `MGT 332
        Princ of Organizational Behav`,

    `MGT 337
        Human Resource Management`,

    `MIS 202
        Cmptr Applctns In Mngmnt`,

    `MIS 402
        Information Management`,

    `MKT 324
        Principles of Marketing`,

    `PSYCH 210
        General Psychology"`,
  ];

  coursesTaken.forEach((coursesTaken) => {
    const li = document.createElement("li");
    const liText = document.createTextNode(coursesTaken);
    li.appendChild(liText);
    ul.appendChild(li);
  });
  return ul;
}

function createElementWithTextNode(element, text) {
  const x = document.createElement(element);
  const y = document.createTextNode(text);
  x.appendChild(y);
  return x;
}

function displaySkills() {
  const displayDiv = getDisplayDiv();

  const softSkills = [
    "Hardworking",
    "Driven",
    "Leader",
    "Communicator",
    "Problem Solver",
    "Adaptable",
    "Creative",
    "Team Player"
  ];

  const hardSkills = [
    "Java", "Kotlin", "C++", "C#", "Python", "Javascript", "Spring Boot", "PostgreSQL", "Firebase", "Bootstrap"
  ];

  const hardSkillsList = document.createElement("ul");
  hardSkills.forEach((hardSkill => {
    const li = document.createElement("li");
    const liText = document.createTextNode(hardSkill);
    li.appendChild(liText);
    hardSkillsList.appendChild(li);
  }));

  const softSkillsList = document.createElement("ul");
  softSkills.forEach((softSkill => {
    const li = document.createElement("li");
    const liText = document.createTextNode(softSkill);
    li.appendChild(liText);
    softSkillsList.appendChild(li);
  }));

 

  displayDiv.innerHTML = "";

  displayDiv.appendChild(createElementWithTextNode("h3", "Technical Skills"));
  displayDiv.appendChild(softSkillsList);
  displayDiv.appendChild(createElementWithTextNode("h3", "Soft Skills"));
  displayDiv.appendChild(hardSkillsList);
}

function displayProjects() {
  const displayDiv = getDisplayDiv();
  const projects = [
    `Income Management Tracker: Created an income management tracker using Java Swing that can keep track of income and expenses, 
    as well as provide options to filter, search, and sort. Used JDBC and MySQL to create a database 
    and have the program interact with it to store and retrieve information. Project was structured using Agile development principles`,

    `Hindi Audio Translator: Utilized AssemblyAI API using REST API principals to create a GUI based application that records Hindi audio and
    translates it to English. Interacted with Java Sound API as well as the Cloud Translation API by Google to handle translation. 
    Implemented the GUI using Java Swing while keeping sound concurrency principles to effectively multithread the application.`,

    `Spotify API Client: Created a desktop client for Spotify's API in Kotlin that was capable of carrying out common functions such as
    finding songs, playlists, artists, etc. Implemented security in guidelines with Spotify recommendations for the API`,

    `Invoice Sorter: Created a program using Java that can sort trucking invoices by company and date for a trucking company. 
    Once implemented, reduced the time it took for company staff to find invoices from minutes to seconds`
  ];

  const projectsList = document.createElement("ul");
  projects.forEach((project =>  {
    const li = document.createElement("li");
    const liText = document.createTextNode(project);
    li.appendChild(liText);
    projectsList.appendChild(li);
  }));

  displayDiv.innerHTML = "";
  displayDiv.appendChild(createElementWithTextNode("h3", "Projects"));
  displayDiv.appendChild(projectsList);
  
}

function createListItem(text) {
  const li = document.createElement("li");
  const liText = document.createTextNode(text);
  li.appendChild(liText);
  return li;
}

function displayContactInformation() {
  const phoneNumber = "Phone Number: 913-291-8368";
  const email = "Email: guntasjammu@gmail.com"

  const ul = document.createElement("ul");
  ul.setAttribute("style", "list-style-type: none")
  ul.appendChild(createListItem(phoneNumber));
  ul.appendChild(createListItem(email));

  const displayDiv = getDisplayDiv();
  displayDiv.innerHTML = "";
  displayDiv.appendChild(createElementWithTextNode("h3", "Contact Information"))
  displayDiv.appendChild(ul);


}

function displayWorkExperience() {
  const date1 = "May 2022 - Present";
  const date2 = "Sep 2021 - May 2022";


  const r1 = `Responsible for giving robust tours, with special attention given towards communicating effectively UMKC's
  message towards prospective students. Given currently over 75 student tours. Handle numerous questions by potential 
  and current students on phone by clearly explaining and finding solutions quickly. Answer questions while on student panel from
  prospective students and families by utilizing informative and persuasive techniques. ` 

  const r2 = `Was part of the website team for FeedKC, a non-profit initiative to help provide a network to move food waste into
  food shelters. Designed and implemented a map component to the website to help find connected food shelters of FeedKC.
   Helped create a layout for display of the website on mobile devices.`

  const ambassadorUL = document.createElement("ul");
  const ambasaadorTitle = createListItem("UMKC Ambassador");
  const ambassadorInnerUL = document.createElement("ul");

  const enactusUL = document.createElement("ul");
  const enactusTitle = createListItem("Website Developer");
  const enactusInnerUL = document.createElement("ul");



  ambassadorUL.appendChild(ambasaadorTitle);
  ambassadorInnerUL.appendChild(createListItem(date1));
  ambassadorInnerUL.appendChild(createListItem(r1));
  ambassadorUL.appendChild(ambassadorInnerUL);

  enactusUL.appendChild(enactusTitle);
  enactusInnerUL.appendChild(createListItem(date2));
  enactusInnerUL.appendChild(createListItem(r2));
  enactusUL.appendChild(enactusInnerUL);

  const displayDiv = getDisplayDiv();

  displayDiv.innerHTML = "";
  displayDiv.appendChild(createElementWithTextNode("h3", "Work Experience"));
  displayDiv.appendChild(ambassadorUL);
  displayDiv.appendChild(enactusUL);


}


function displayBio() {
  const displayDiv = getDisplayDiv();
  const bioTag = document.createElement("p");
  const imageTag = document.createElement("img");
  imageTag.setAttribute("src", "IMG_7988.jpg");
  imageTag.setAttribute("alt", "Professional Image");
  imageTag.setAttribute("width", "100px");
  imageTag.setAttribute("height", "150px");
  const bioText = document.createTextNode(
    "Hello! My name is Guntas Jammu. I am a student at UMKC studying Computer Science and Business. I am from Lenexa, KS and have spent my whole life there. I have many hobbies, some of which include reading, exercising, and playing board games. During my time at UMKC, I have worked on a multitude of projects. The one that I am most proud of is the Capstone project that my team and I developed. It was a great learning experience for me as I learned how to work in a team for software. We worked on documentation as well as the actual coding for creating a software that could receive, filtering, and ranking applications for a real-life situation. Outside of my school obligations, I love to translate. I have been translating a variety of different things in order to introduce a whole new plethora of media for people who do not speak English.  "
  );
  displayDiv.innerHTML = "";
  bioTag.appendChild(bioText);

  displayDiv.appendChild(imageTag);
  displayDiv.appendChild(bioTag);
}

window.addEventListener("load", function (event) {
  displayBio();

  this.document
    .getElementById("resume")
    .addEventListener("click", function (event) {
      displayResume();
    });
  this.document
    .getElementById("educational-background")
    .addEventListener("click", function (event) {
      displayEducationalBackground();
    });
  this.document
    .getElementById("home")
    .addEventListener("click", function (event) {
      displayBio();
    });
  this.document
    .getElementById("skills")
    .addEventListener("click", function(event) {
      displaySkills();
    });
  this.document
    .getElementById("projects")
    .addEventListener("click", function(event) {
      displayProjects();
    });
    this.document
    .getElementById("work-experience")
    .addEventListener("click", function(event) {
      displayWorkExperience();
    });
    this.document
    .getElementById("contact-information")
    .addEventListener("click", function(event) {
      displayContactInformation();
    });
});
