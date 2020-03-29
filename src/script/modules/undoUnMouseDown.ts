// Отменить коппирование двойным кликом

export function undoOnMouseDown(): void {
  const elemUse: any = document.querySelectorAll(".No-onmousedown");

  for (let i = 0; i < elemUse.length; i++) {
    elemUse[i].onmousedown = () => {
      return false;
    };
  }
}
