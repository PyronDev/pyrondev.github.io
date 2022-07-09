function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

var menuOpen = false;

async function menuClicked() {
	if (menuOpen == false) {
		document.querySelector(".menu").style.animation = 'menu-slide-out 300ms';
		await sleep(300);
		document.querySelector(".menu-checkbox").src = "./images/close_menu.svg";
		document.querySelector(".menu").style.animation = 'menu-slide-in 300ms';
		menuOpen = true;
	} else if (menuOpen == true) {
		document.querySelector(".menu").style.animation = 'menu-slide-out 300ms';
		await sleep(300);
		document.querySelector(".menu-checkbox").src = "./images/menu.svg";
		document.querySelector(".menu").style.animation = 'menu-slide-in 300ms';
		menuOpen = false;
	};
	await sleep(300);
	document.querySelector(".menu").style.animation = 'none';
};
