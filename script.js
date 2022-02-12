let newOrderNumber = document.querySelector('.new_order_numb');
newOrderNumber.value = 1;

let clearButton = document.querySelector('.clear_button');
clearButton.addEventListener('click', () => {
	let answer = confirm('Очистить ВСЮ историю?');
	if(answer) {
		localStorage.clear();
		alert('История очищена!');
	} else {
		alert('Данные не были удалены!');
	}
})
let addButton = document.querySelector('.add_button');
addButton.addEventListener('click', () => {
	if(localStorage.getItem(newOrderNumber.value) !== null) {
		alert('Уже есть, будет заменен');
	}
	let conf = confirm(`Заказ №${newOrderNumber.value} будет добавлен:
		  ул.${streetInput.value} ${localStorage.getItem('house')}
		  подъезд ${localStorage.getItem('entrance')}
		  этаж ${localStorage.getItem('floor')}
		  квартира ${localStorage.getItem('flat')}
	`);
	if(conf) {
		let data = {
			phone : localStorage.getItem('lastPhone'),
			street : localStorage.getItem('lastStreet'),
			house : localStorage.getItem('house'),
			entrance : localStorage.getItem('entrance'),
			floor : localStorage.getItem('floor'),
			flat : localStorage.getItem('flat'),
		};
		localStorage.setItem(newOrderNumber.value, JSON.stringify(data));
		console.log(JSON.parse(localStorage.getItem(newOrderNumber.value)));
	} else {
		console.log('Canceled!');
	}
		newOrderNumber.value++
	})

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
