// Работа с лайками
for (let like of document.querySelectorAll(".like")) {
  like.addEventListener("click", event => {
    let text = event.currentTarget.querySelector(".like__text");
    let input = event.target.closest(".like__input");
    if (!input) return;

    if (input.checked == true) {
      text.innerText = ++text.innerText;
    } else if (input.checked == false) {
      text.innerText = --text.innerText;
    }
  });
}
