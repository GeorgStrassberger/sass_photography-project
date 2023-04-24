function checkScroll() {
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

function addMousePositionToCss() {
	const elements = document.querySelectorAll(".offers__card-container");
	for (const element of elements) {
		element.addEventListener("mousemove", function (e) {
			var rect = element.getBoundingClientRect();
			var x = e.clientX - rect.left;
			var y = e.clientY - rect.top;
			element.style =
				"--mouse-x:" +
				x / element.offsetWidth +
				";--mouse-y:" +
				y / element.offsetHeight +
				";";
		});
		element.addEventListener("mouseleave", function (e) {
			element.style = "";
		});
	}
}

if (
	document.readyState === "complete" ||
	document.readyState === "interactive"
) {
	setTimeout(addMousePositionToCss, 1);
} else {
	document.addEventListener("DOMContentLoaded", addMousePositionToCss, false);
}
