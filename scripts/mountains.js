//get html elements into variables
const mountainsDropdown = document.getElementById("mountainsDropdown");
const logoImage = document.getElementById("logoImage");
const mountainDetailsDiv = document.getElementById("mountainDetailsDiv");
const cardTitleHeading = document.getElementById("cardTitleHeading");
const ElevationParagraph = document.getElementById("ElevationParagraph");
const mountainCode = document.getElementById("mountainTextParagraph");

//create functions to handle user events
function loadMountains() {
  for (const mountain of mountainsArray) {
    let option = document.createElement("option");
    option.textContent = mountain.name;
    option.value = mountain.name;
    mountainsDropdown.appendChild(option);
  }
}

function showMountainDetails() {
  const mountainName = mountainsDropdown.value;
  if (mountainName) {
    mountainDetailsDiv.style.display = "block";

    for (const mountain of mountainsArray) {
      if (mountain.name === mountainName) {
        console.log("Match found!");
        console.log(mountainName);

        logoImage.src = `./images/${mountain.img}`; // Set the image source
        cardTitleHeading.innerText = mountain.name;
        ElevationParagraph.innerText = mountain.elevation;
        mountainCode.innerText = mountain.desc;
        break;
      }
    }
  } else {
    mountainDetailsDiv.style.display = "none";
  }
}
loadMountains();

mountainsDropdown.addEventListener("change", showMountainDetails);
