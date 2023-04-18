function checkScroll(params) {
	const videos = document.querySelectorAll(".story__video");

	for (const video of videos) {
		const boundingRect = video.getBoundingClientRect();
		const visible =
			boundingRect.top + boundingRect.height > 0 &&
			boundingRect.top < window.innerHeight;

		if (visible) {
			video.play();
		} else {
			video.pause();
		}
	}
}

checkScroll();
window.addEventListener("load", checkScroll, false);
window.addEventListener("scroll", checkScroll, false);
window.addEventListener("resize", checkScroll, false);
