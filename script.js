function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

var menuOpen = false;

async function menuClicked() {
	if (menuOpen == false) {
		document.querySelector(".menu").style.animation = 'menu-rotate-out 150ms';
		document.querySelector(".menu-content").style.animation = 'menu-slide-down 150ms';
		await sleep(150);
		document.querySelector(".menu-content").style.marginTop = "1px";
		document.querySelector(".menu-content").style.ZIndex = "1";
		document.querySelector(".menu-checkbox").src = "./images/close_menu.svg";
		document.querySelector(".menu").style.animation = 'menu-rotate-in 150ms';
		menuOpen = true;
	} else if (menuOpen == true) {
		document.querySelector(".menu").style.animation = 'menu-rotate-out 150ms';
		document.querySelector(".menu-content").style.animation = 'menu-slide-up 150ms';
		await sleep(150);
		document.querySelector(".menu-content").style.marginTop = "-300px";
		document.querySelector(".menu-content").style.ZIndex = "-1";
		document.querySelector(".menu-checkbox").src = "./images/menu.svg";
		document.querySelector(".menu").style.animation = 'menu-rotate-in 150ms';
		menuOpen = false;
	};
	await sleep(200);
	document.querySelector(".menu").style.animation = 'none';
};