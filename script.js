let phoneInput = document.querySelector('.data_phone');
let phoneInputLast = localStorage.getItem('lastPhone');
phoneInput.value = phoneInputLast;

let streetInput = document.querySelector('input.address_info');
let streetInputLast = localStorage.getItem('lastStreet');
streetInput.value = streetInputLast;



phoneInput.addEventListener('input',() => {
	localStorage.setItem('lastPhone', phoneInput.value);
});
streetInput.addEventListener('input', () => {
	localStorage.setItem('lastStreet', streetInput.value);
});

let infos = document.querySelectorAll('.address_detail_info');
for(let info of infos) {
	info.value = localStorage.getItem(info.dataset.name);
	info.addEventListener('input', () => {
		localStorage.setItem(info.dataset.name, info.value);
	})
	console.log(info.dataset.name);
}


let arrInputs = [streetInput, phoneInput];
