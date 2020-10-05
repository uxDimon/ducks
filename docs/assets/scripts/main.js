const popup_open = document.querySelectorAll("[data-open-popup]");
const popup_close = document.querySelectorAll("[data-close-popup]");
const popup = document.querySelector(".popup__wrap");

function popupOpen(buttons, open = true) {
	for (const b of buttons) {
		b.addEventListener("click", () => {
			if (open) {
				popup.classList.add("popup__wrap-active");
			} else {
				popup.classList.remove("popup__wrap-active");
			}
		});
	}
}

popupOpen(popup_open);
popupOpen(popup_close, false);

// 	pooupClose.addEventListener("click", () => {
// // Маска для телефона
// document.querySelectorAll(".phone-mask").forEach((item) => {
// 	let telMask = IMask(item, {
// 		mask: "+{7}(000)000-00-00",
// 	});
// 	/*Добавление и удаление класса при снятии фокуса с data-type="tel"*/
// 	telMask.on("accept", function () {
// 		item.setCustomValidity("Укажите полностью номер телефона.");
// 	});
// 	telMask.on("complete", function () {
// 		item.setCustomValidity("");
// 	});
// });

// Слайдер https://www.npmjs.com/package/tiny-slider
if (document.querySelector(".slider1")) {
	var parents1 = tns({
		container: ".slider1",
		items: 1,
		// gutter: 20,
		mouseDrag: true,
		speed: 400,
		nav: false,
		controlsPosition: "bottom",
		controlsText: ["←", "→"],
	});
}
if (document.querySelector(".slider2")) {
	var parents2 = tns({
		container: ".slider2",
		items: 1,
		// gutter: 20,
		mouseDrag: true,
		speed: 400,
		nav: false,
		controlsPosition: "bottom",
		controlsText: ["←", "→"],
	});
}
