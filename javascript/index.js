const resumeDownload = document.getElementById("resume-download");

resumeDownload.addEventListener("mouseover", () => {
	resumeDownload.innerHTML = "Download PDF";
});

resumeDownload.addEventListener("mouseout", () => {
	resumeDownload.innerHTML = "Resume";
});