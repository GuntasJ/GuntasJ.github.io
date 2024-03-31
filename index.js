function createResumePDFButton() {
  const resumePDFButton = document.createElement("button");
  resumePDFButton.setAttribute("id", "resume-pdf-button-id");
  resumePDFButton.setAttribute("class", "basic-button");

  const buttonText = document.createTextNode("Get Resume As PDF");
  resumePDFButton.appendChild(buttonText);

  resumePDFButton.addEventListener("click", function (event) {
    window.open("Resume PDF.pdf", "_blank");
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
});
