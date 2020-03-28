// Отменить коппирование двойным кликом
undoOnMouseDown()
function undoOnMouseDown() {
	const elemUse = document.querySelectorAll(".No-onmousedown");

	for (let i = 0; i < elemUse.length; i++) {
		elemUse[i].onmousedown = () => {
			return false;
		}
	}
}