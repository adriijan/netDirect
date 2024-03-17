const section1Text = document.querySelector('#section1__text');
const toggleButton1 = document.querySelector('#toggleButton1');

toggleButton1.addEventListener('click', function () {
	section1Text.classList.toggle('section-items__item--hidden');

	if (section1Text.classList.contains('section-items__item--hidden')) {
		toggleButton1.textContent = 'Zobrazit obsah';
		section1.style.justifyContent = 'unset';
		section1.style.width = "-webkit-fill-available"
	} else {
		toggleButton1.textContent = 'Skrýt obsah';
		section1.style.justifyContent = 'space-between';
	}
})


const section2Text = document.querySelector('#section2__text');
const toggleButton2 = document.querySelector('#toggleButton2');

toggleButton2.addEventListener('click', function () {
	section2Text.classList.toggle('section-items__item--hidden');

	if (section2Text.classList.contains('section-items__item--hidden')) {
		toggleButton2.textContent = 'Zobrazit obsah';
		section2.style.justifyContent = 'unset';
		section2.style.width = "-webkit-fill-available"
	} else {
		toggleButton2.textContent = 'Skrýt obsah';
		section2.style.justifyContent = 'space-between';
	}
})

const section3Text = document.querySelector('#section3__text');
const toggleButton3 = document.querySelector('#toggleButton3');

toggleButton3.addEventListener('click', function () {
	section3Text.classList.toggle('section-items__item--hidden');

	if (section3Text.classList.contains('section-items__item--hidden')) {
		toggleButton3.textContent = 'Zobrazit obsah';
		section3.style.justifyContent = 'unset';
		section3.style.width = "-webkit-fill-available"
	} else {
		toggleButton3.textContent = 'Skrýt obsah';
		section3.style.justifyContent = 'space-between';
	}
})