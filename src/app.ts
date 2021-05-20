import { VideoComponent } from "./components/page/item/video";
import { ImageComponent } from "./components/page/item/image";
import { PageComponent } from "./components/page/item/page";
class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "Image Title",
      "https://i.picsum.photos/id/902/536/354.jpg?hmac=4WH85q7uEdOeEmbcRc7lkRgcUFZimMZtYXqFroCGh0Y"
    );
    image.attachTo(appRoot, "beforeend");

    const video = new VideoComponent(
      "Video Title",
      "https://youtu.be/K3-jG52XwuQ"
    );
    video.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".document")! as HTMLElement);
