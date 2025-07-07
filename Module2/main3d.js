const iframe = document.getElementById("background-model");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const rotateZ = x * 20; // tweak this
  iframe.style.transform = `rotateZ(${rotateZ}deg)`;
});
