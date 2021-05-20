import { BaseCompoment } from "./../../component";

export class TodoComponent extends BaseCompoment<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`<section class="todo">
            <h2 class="todo__title"></h2>
            <input type="checkbox" class="todo__checkbox">
          </section>`);

    const todoElement = this.element.querySelector(
      ".todo__checkbox"
    )! as HTMLInputElement;
    todoElement.insertAdjacentText("afterend", todo);

    const titleElement = this.element.querySelector(
      ".todo__title"
    )! as HTMLHeadElement;
    titleElement.textContent = title;
  }
}
