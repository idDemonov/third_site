// Фукнция подсчитывает гостей и записывает в инпут

export const calcGuestsWriteInput = (input, lowdown) => {
		let people = {
			adult: 0,
			children: 0,
			babies: 0,
		}
		for (let type of lowdown) {
			people[type.dataset.typeRoom] = type.value;
		}
		let count = Object.values(people).reduce((a, b) => +a + +b, 0);
		let word = (count == 1) ? 'гость' : (count < 5) ? 'гостя' : 'гостей';
		input.value = `${count} ${word}`
		if(count == 0) input.value = 'Сколько гостей'
	}
