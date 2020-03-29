// Работа с лайками
export function liked() {
  for (let like of document.querySelectorAll(".like")) {
    like.addEventListener("click", (event: Event) => {
      let text: any = (event.currentTarget as HTMLElement).querySelector(
        ".like__text"
      );
      let input: HTMLInputElement = (event.target as HTMLElement).closest(
        ".like__input"
      );
      if (!input) return;

      if (input.checked == true) {
        text.innerText = ++text.innerText;
      } else if (input.checked == false) {
        text.innerText = --text.innerText;
      }
    });
  }
}
