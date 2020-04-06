export const calcGuestsWriteInput = (input, lowdown, buttonClear) => {
  let people = {
    adult: 0,
    children: 0,
    babies: 0,
  };

  for (let type of lowdown) {
    people[type.dataset.typeRoom] = type.value;
  }
  // Считаю количество гостей
  let count = Object.values(people).reduce((a, b) => +a + +b, 0);
  // Вычитаю младенцев
  count = count - people.babies;

  // Младенцы не могут поехать одни
  if (count == 0 && people.babies > 0) {
    people.adult = 1;
    lowdown[0].value = 1;
    count++;
  }
  // Формирую слово в инпут, для взрослых
  let word1 = count == 1 ? "гость" : count < 5 ? "гостя" : "гостей";
  // Формирую слово в инпут, для младенцев
  let word2 = people.babies == 1 ? "младенец" : "младенца";

  if (count > 0) {
    if (people.babies > 0) {
      input.value = `${count} ${word1}, ${people.babies} ${word2}`;
    } else {
      input.value = `${count} ${word1}`;
    }
    buttonClear.classList.add("dropdown-selection__clear--activ");
  } else if (count == 0) {
    buttonClear.classList.remove("dropdown-selection__clear--activ");
    input.value = "Сколько гостей";
  }
};
