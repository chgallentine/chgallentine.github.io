/*jshint esversion:6*/

changeResumeText = () => {
  const resumeDownload = document.getElementById("resume-download");

  resumeDownload.addEventListener("mouseover", () => {
    resumeDownload.innerHTML = "Download";
  });

  resumeDownload.addEventListener("mouseout", () => {
    resumeDownload.innerHTML = "Resume";
  });
};

downloadConfirmation = (e) => {
  e.stopPropagation();
  const downloadButton = document.getElementById("download");
  if (confirm("Download Charlie's resume?") === true) {
    downloadButton.href = "public/Resume.pdf";
  } else {
    downloadButton.href = "#";
  }
  return false;
};

setColor = (e) => {
  let x, y, i;
  let red = 223, green = 131, blue = 51;
  const color1 = document.getElementsByClassName("color-1");
  const color2 = document.getElementsByClassName("color-2");
  const color2Link = document.getElementsByClassName("color-2-link");
  
  x = e.clientX - 100;
  y = e.clientY - 100;

  const colorCombo = [
    Math.floor((x + y) * Math.random() * 255) % 255,
    Math.floor(x * Math.random() * 255) % 255,
    Math.floor(y * Math.random() * 255) % 255
  ];

  let one = Math.floor(Math.random()*3);
  let two = Math.abs(one-3);
  let three = 3 - two - one;
  
  red = colorCombo[one];
  green = colorCombo[two];
  blue = colorCombo[three];
  
  document.body.style.background = `linear-gradient(rgb(${red}, ${green}, ${blue}), 
        rgb(${Math.abs(red-200)}, ${Math.abs(green-200)}, ${Math.abs(blue-200)}))`;

  for(i = 0; i < color1.length; i++) {
    color1[i].style.color = `rgb(${(255-red)}, ${255-green}, ${(255-blue)})`;
  }

  for(i = 0; i < color2.length; i++) {
    color2[i].style.color = `rgb(${(294-red) % 255}, ${255-green}, ${(161-blue)%255})`;
  }

  for(i = 0; i < color2Link.length; i++) {
    color2Link[i].style.borderBottomColor = `rgb(${(294-red) % 255}, ${255-green}, ${(161-blue)%255})`;
  }
};

changeResumeText();
document.getElementById("download").addEventListener("click", downloadConfirmation);
document.getElementsByTagName("body")[0].addEventListener("click", setColor);

/*
  JQuery Functions
 */

$('.scrollLink').click( function() {
  $('html, body').animate({
    scrollTop: $($(this).attr("href")).offset().top
  }, 400);
});
