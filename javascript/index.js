
downloadResume = () => {
	const resumeDownload = document.getElementById("resume-download");

	resumeDownload.addEventListener("mouseover", () => {
		resumeDownload.innerHTML = "Download";
	});

	resumeDownload.addEventListener("mouseout", () => {
		resumeDownload.innerHTML = "Resume";
	});
}

function setColor(e) {
  let x;
  let y;
  let red = 223;
  let green = 131;
  let blue = 51;
  
  x = e.clientX;
  y = e.clientY;
  
  red = (x + y) % 255;
  green = x % 255;
  blue = y % 255;
  
  console.log(red, green, blue);
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

downloadResume();
document.addEventListener("click", setColor);