import { BaseCompoment } from "./../../component";

export class PageComponent extends BaseCompoment<HTMLUListElement> {
  constructor() {
    super('<ul class="page">페이지 컴포넌트입니다.</ul>');
  }
}
