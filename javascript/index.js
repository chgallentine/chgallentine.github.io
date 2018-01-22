
changeResumeText = () => {
	const resumeDownload = document.getElementById("resume-download");
  const downloadButton = document.getElementById("download");

	resumeDownload.addEventListener("mouseover", () => {
		resumeDownload.innerHTML = "Download";
	});

	resumeDownload.addEventListener("mouseout", () => {
		resumeDownload.innerHTML = "Resume";
	});
}

downloadConfirmation = (e) => {
  e.stopPropagation();
  const downloadButton = document.getElementById("download");
  if (confirm("Download Charlie's resume?") === true) {
    downloadButton.href = "public/Resume.pdf";
  }
  return false;
}

document.getElementById('about').scrollIntoView({ 
  behavior: 'smooth' 
});

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

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

changeResumeText();
document.getElementById("download").addEventListener("click", downloadConfirmation);
document.getElementsByClassName("home-page")[0].addEventListener("click", setColor);

