const resumeDownload = document.getElementById("resume-download");

resumeDownload.addEventListener("mouseover", () => {
	resumeDownload.innerHTML = "Download";
});

resumeDownload.addEventListener("mouseout", () => {
	resumeDownload.innerHTML = "Resume";
});