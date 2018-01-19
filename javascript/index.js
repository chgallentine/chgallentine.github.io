
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
  let i;
  const color1 = document.getElementsByClassName("color-1");
  const color2 = document.getElementsByClassName("color-2");
  const color2Link = document.getElementsByClassName("color-2-link");
  
  x = e.clientX;
  y = e.clientY;
  
  red = (x + y) % 255;
  green = x % 255;
  blue = y % 255;
  
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  for(i = 0; i < color1.length; i++) {
  	color1[i].style.color = `rgb(${(255-red)}, ${255-green}, ${(255-blue)})`;
  }

  for(i = 0; i < color2.length; i++) {
  	color2[i].style.color = `rgb(${(294-red) % 255}, ${255-green}, ${(161-blue)%255})`;
  }

  for(i = 0; i < color2Link.length; i++) {
  	color2Link[i].style.borderBottomColor = `rgb(${(294-red) % 255}, ${255-green}, ${(161-blue)%255})`;
  }
}

downloadResume();
document.addEventListener("click", setColor);