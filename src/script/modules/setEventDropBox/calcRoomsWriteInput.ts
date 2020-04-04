export const calcRoomsWriteInput = (input, lowdown) => {
  let rooms = {
    bedroom: 0,
    bed: 0,
    bathroom: 0,
  };
  for (let type of lowdown) {
    rooms[type.dataset.typeRoom] = type.value;
  }
  let word1 = rooms.bedroom > 1 ? "спальни" : "спальня";
  let word2 = rooms.bed > 1 ? "кровати" : "кровать";
  let word3 =
    rooms.bathroom > 1
      ? "ванные комнаты"
      : rooms.bathroom > 0
      ? "ванная комната"
      : "ванных комнат";

  const answer = rooms.bathroom == 0 ? "без" : rooms.bathroom;

  input.value = `${rooms.bedroom} ${word1}, ${rooms.bed} ${word2}, ${answer} ${word3}`;
};
// Функция подсчитывает комнаты и записывает в инпут
