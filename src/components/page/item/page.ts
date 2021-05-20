export class PageComponent {
  private element: HTMLUListElement;
  constructor() {
    this.element = document.createElement("ul");
    this.element.setAttribute("class", "page");
    this.element.textContent = "페이지 컴포넌트입니다.";
  }
  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
