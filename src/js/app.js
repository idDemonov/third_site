checkbox ();

function checkbox () {
	let checkboxList = document.querySelector(".checkbox-list__icon");
	let checkboxButton = document.querySelector(".checkbox-list__button");
	checkboxButton.onclick = () => {
		checkboxList.classList.add("checkbox-list__icon--activ");
	}
}