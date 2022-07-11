function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

var menuOpen = false;

async function menuClicked() {
	var menu = document.querySelector("#menu")
	var menuContent = document.querySelector("#menuContent")
	if (menuOpen == false) {
		menu.style.animation = 'menu-rotate-out 150ms';
		menuContent.style.animation = 'menu-slide-down 150ms';
		await sleep(150);
		menuContent.style.marginTop = "1px";
		menuContent.style.ZIndex = "1";
		document.querySelector(".menu-checkbox").src = "./images/close_menu.svg";
		menu.style.animation = 'menu-rotate-in 150ms';
		menuOpen = true;
	} else if (menuOpen == true) {
		menu.style.animation = 'menu-rotate-out 150ms';
		menuContent.style.animation = 'menu-slide-up 150ms';
		await sleep(150);
		menuContent.style.marginTop = "-300px";
		menuContent.style.ZIndex = "-1";
		document.querySelector(".menu-checkbox").src = "./images/menu.svg";
		menu.style.animation = 'menu-rotate-in 150ms';
		menuOpen = false;
	};
	await sleep(200);
	menu.style.animation = 'none';
};