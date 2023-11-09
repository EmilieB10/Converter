const input = document.getElementById("input");
const convertBtn = document.getElementById("convert-btn");
const lengthP = document.getElementById("length");
const volumeP = document.getElementById("volume");
const massP = document.getElementById("mass");

const meter = 0.304;
const feet = 3.281;
const kilogram = 0.453;
const pound = 2.204;
const liter = 3.785;
const gallon = 0.264;

// prettier-ignore
function length() {
  lengthP.innerText = ` ${input.value} Meter = ${(input.value * meter).toFixed(2)} Feet`;
  lengthP.innerText += ` | ${input.value} Feet = ${(input.value * feet).toFixed(2)} Meter`;
}
// prettier-ignore
function volume() {
  volumeP.innerText = ` ${input.value} Liter = ${(input.value * meter).toFixed(2)} Gallon`;
  volumeP.innerText += ` | ${input.value} Gallon = ${(input.value * feet).toFixed(2)} Liter`;
}
// prettier-ignore
function mass() {
  massP.innerText = ` ${input.value} Kilogram = ${(input.value * meter).toFixed(2)}Pound`;
  massP.innerText += ` | ${input.value} Pound = ${(input.value * feet).toFixed(2)} Kilogram`;
}

convertBtn.addEventListener("click", function () {
  length();
  volume();
  mass();
});
