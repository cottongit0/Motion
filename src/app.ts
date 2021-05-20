import { ImageComponent } from "./components/page/item/image";
import { PageComponent } from "./components/page/item/page";
class App {
  private readonly page: PageComponent;
  private readonly image: ImageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    this.image = new ImageComponent(
      "Image Title",
      "https://i.picsum.photos/id/902/536/354.jpg?hmac=4WH85q7uEdOeEmbcRc7lkRgcUFZimMZtYXqFroCGh0Y"
    );
    this.image.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".document")! as HTMLElement);
