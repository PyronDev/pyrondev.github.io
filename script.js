menuCheckbox = document.getElementById("menuCheckbox");
menuCheckbox.checked = false;
menuCheckbox.addEventListener('change', e => {
	var MenuContent = document.querySelectorAll(".menu-content");
	MenuContent.forEach(el => {
		el.classList.remove("hidden");
	});
	if(!e.target.checked){
		var value = window.getComputedStyle(MenuContent[0]).getPropertyValue("--animation-time");
		if (value.endsWith("ms")){
			value = value.slice(0,-2);
		}else if(value.endsWith("s")){
			value = value.slice(0,-1)*1000;
		}else{
			console.error("ERROR: the animation time is not in the correct format");
		}
		setTimeout(()=>{
			MenuContent.forEach(el => {
				el.classList.add("hidden");
			});
		},value);
	}
});