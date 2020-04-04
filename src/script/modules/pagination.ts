export class Pagination {
  private maxNumberPage: number;
  private pagination: HTMLDivElement;
  private numberIcons: HTMLSpanElement;
  private activePage: HTMLButtonElement;
  private nextPage: HTMLButtonElement;

  constructor(quantity: number) {
    this.maxNumberPage = quantity;
    this.pagination = document.querySelector(".pagination");
    this.numberIcons = this.pagination.querySelector(".pagination__quantity");

    this.createPaginationNumPage(
      this.maxNumberPage,
      this.pagination.querySelector(".pagination__page")
    );

    this.addAllEvent();

    this.activePage = this.pagination.querySelector(
      'button[data-number-page="1"]'
    );
    this.nextPage = this.activePage;

    this.hideButtons(this.activePage.dataset.numberPage);

    this.createMultipoint(2);
    this.createMultipoint(this.maxNumberPage);

    this.hideMultipoint(this.activePage);
  }

  // <-- -->
  togglePage(direction: string) {
    let count: number =
      direction == "next"
        ? +this.nextPage.dataset.numberPage + 1
        : +this.nextPage.dataset.numberPage - 1;

    count = count < 1 ? 1 : count;
    count = count > this.maxNumberPage ? 15 : count;

    this.nextPage = this.pagination.querySelector(
      `button[data-number-page="${count}"]`
    );
    this.reassignmentActive(count, this.nextPage);
  }

  // Смена активной кнопки
  reassignmentActive(currentPage: number, newActivePage: HTMLButtonElement) {
    this.hideButtons(currentPage);
    this.hideMultipoint(newActivePage);
    this.editText(newActivePage);
    this.hideButtonPrevious(newActivePage);

    if (currentPage <= +this.maxNumberPage) {
      this.activePage.classList.remove("pagination__button--active");
      this.activePage = newActivePage;
      this.activePage.classList.add("pagination__button--active");

      this.nextPage = this.pagination.querySelector(
        `button[data-number-page="${currentPage}"]`
      );
    }
  }

  // Навесить события
  addAllEvent(): void {
    this.pagination.addEventListener("click", (event: any): void => {
      const action: string = event.target.dataset.action;
      const number: number = event.target.dataset.numberPage;

      if (action == "next") {
        this.togglePage(action);
      } else if (action == "previous") {
        this.togglePage(action);
      } else if (number) {
        this.reassignmentActive(number, event.target);
      }
    });
  }

  // Создание кнопок-узлов страниц
  createPaginationNumPage(value, buttons): void {
    for (let i = 1; i <= value; i++) {
      const button = document.createElement("button");
      const text = document.createTextNode("" + i);

      button.appendChild(text);
      button.dataset.numberPage = "" + i;
      button.className =
        i != 1
          ? "pagination__button"
          : "pagination__button pagination__button--active";
      buttons.append(button);
    }
  }

  // Скрытие лишних кнопок
  hideButtons(activeButton): void {
    activeButton = activeButton || 1;
    // Массив кнопок, которые не надо скрывать
    const arr = [
      1, // Первая
      +activeButton - 2, // До предыдущей
      +activeButton - 1, // Предыдущая
      +activeButton, // Активная
      +activeButton + 1, // Следующая
      +activeButton + 2, // После следующей
      this.maxNumberPage, // Последняя
    ];

    for (let i = 1; i <= this.maxNumberPage; i++) {
      const button: HTMLButtonElement = this.pagination.querySelector(
        `button[data-number-page="${i}"]`
      );
      button.style.display = "none";

      if (arr.includes(i)) {
        button.style.display = "block";
      }
    }
  }
  // Создание точек как кнопок
  createMultipoint(number: number): void {
    const place = this.pagination.querySelector(
      `button[data-number-page="${number}"]`
    );
    const button = document.createElement("button");
    const text = document.createTextNode("...");
    button.appendChild(text);
    button.className = "pagination__point";
    button.style.display = "block";
    place.before(button);
  }
  // Скрытие точек
  hideMultipoint(activePage: HTMLButtonElement): void {
    const number = activePage.dataset.numberPage;
    const [start, end]: any = this.pagination.querySelectorAll(
      ".pagination__point"
    );

    if (+number <= 4) {
      start.style.display = "none";
    } else if (+number >= 4) {
      start.style.display = "block";
    }

    if (+number >= 12) {
      end.style.display = "none";
    } else if (+number <= 12) {
      end.style.display = "block";
    }
  }
  // Смена количества показанных номеров
  editText(activePage): void {
    const number = activePage.dataset.numberPage;
    const from = number * 12 - 11;
    const to = from + 12 - 1;
    if (to > 100)
      this.numberIcons.innerText = `${from} – ${to} из 180 вариантов аренды`;
    else
      this.numberIcons.innerText = `${from} – ${to} из 100+ вариантов аренды`;
  }
  // Скрытие или показать кнопки управления
  hideButtonPrevious(activePage: HTMLButtonElement): void {
    const number: any = activePage.dataset.numberPage;
    const previous: HTMLButtonElement = this.pagination.querySelector(
      ".pagination__button--previous"
    );
    const next: HTMLButtonElement = this.pagination.querySelector(
      ".pagination__button--next"
    );
    if (number > 1) {
      previous.style.display = "block";
    } else {
      previous.style.display = "none";
    }
    if (number == this.maxNumberPage) {
      next.style.display = "none";
    } else {
      next.style.display = "block";
    }
  }
}
