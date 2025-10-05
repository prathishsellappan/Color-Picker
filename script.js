const colorInput = document.getElementById("colorInput");
const colorBox = document.getElementById("colorBox");
const hexCode = document.getElementById("hexCode");
const copyBtn = document.getElementById("copyBtn");

colorInput.addEventListener("input", () => {
  const color = colorInput.value;
  colorBox.style.background = color;
  hexCode.textContent = color;
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(hexCode.textContent);
  copyBtn.textContent = "Copied!";
  setTimeout(() => copyBtn.textContent = "Copy HEX", 1500);
});
