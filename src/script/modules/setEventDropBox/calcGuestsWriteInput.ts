export const calcGuestsWriteInput = (input, lowdown, buttonClear) => {
  let people = {
    adult: 0,
    children: 0,
    babies: 0,
  };
  for (let type of lowdown) {
    people[type.dataset.typeRoom] = type.value;
  }
  let count = Object.values(people).reduce((a, b) => +a + +b, 0);
  let word = count == 1 ? "гость" : count < 5 ? "гостя" : "гостей";

  if (count > 0) {
    input.value = `${count} ${word}`;
    buttonClear.classList.add("dropdown-selection__clear--activ");
  } else if (count == 0) {
    buttonClear.classList.remove("dropdown-selection__clear--activ");
    input.value = "Сколько гостей";
  }
};
