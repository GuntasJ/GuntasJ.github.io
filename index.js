function createResumePDFButton() {
  const resumePDFButton = document.createElement("button");
  resumePDFButton.setAttribute("id", "resume-pdf-button-id");
  resumePDFButton.setAttribute("class", "basic-button");

  const buttonText = document.createTextNode("Get Resume As PDF");
  resumePDFButton.appendChild(buttonText);

  resumePDFButton.addEventListener("click", function (event) {});

  return resumePDFButton;
}

function createResumeTag() {
  const resumeTag = document.createElement("p");
  const resumeText = document.createTextNode("Temp text for the resume");
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

window.addEventListener("load", function (event) {
  this.document
    .getElementById("resume")
    .addEventListener("click", function (event) {
      displayResume();
    });
});
