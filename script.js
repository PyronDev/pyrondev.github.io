function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

var menuOpen = false;

async function menuClicked() {
	if (menuOpen == false) {
		document.querySelector(".menu").style.animation = 'menu-slide-out 200ms';
		await sleep(201);
		document.querySelector(".menu-checkbox").src = "./images/close_menu.svg";
		document.querySelector(".menu").style.animation = 'menu-slide-in 200ms';
		menuOpen = true;
	} else if (menuOpen == true) {
		document.querySelector(".menu").style.animation = 'menu-slide-out 200ms';
		await sleep(201);
		document.querySelector(".menu-checkbox").src = "./images/menu.svg";
		document.querySelector(".menu").style.animation = 'menu-slide-in 200ms';
		menuOpen = false;
	};
	await sleep(201);
	document.querySelector(".menu").style.animation = 'none';
};
