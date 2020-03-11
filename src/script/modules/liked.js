// Работа с лайками
const likes = document.querySelectorAll('.like__box');
for(let like of likes) {
	like.addEventListener("click", liked);
}
function liked() {
	if(this.previousElementSibling.checked == false) {
		this.nextElementSibling.innerText = ++this.nextElementSibling.innerText;
	}
	else this.nextElementSibling.innerText = --this.nextElementSibling.innerText;
}