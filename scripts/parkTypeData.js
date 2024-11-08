const parkTypesArray = [
  "National Park",
  "National Monument",
  "Recreation Area",
  "Scenic Trail",
  "Battlefield",
  "Historic",
  "Memorial",
  "Preserve",
  "Island",
  "River",
  "Seashore",
  "Trail",
  "Parkway",
];

let parkTypeSelect = document.getElementById("parkTypeSelect");

function createStateOption(value, text) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = text;
  parkTypeSelect.appendChild(option);
}

for (const parkType of parkTypesArray) {
  createStateOption(parkType, parkType);
}
