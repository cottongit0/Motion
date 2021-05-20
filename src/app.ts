import { TodoComponent } from "./components/page/item/todo";
import { NoteComponent } from "./components/page/item/note";
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

    const note = new NoteComponent("Note Title", "내용을 작성해주세요.");
    note.attachTo(appRoot, "beforeend");

    const todo = new TodoComponent("Todo Title", "오늘의 할 일을 입력해주세요");
    todo.attachTo(appRoot, "beforeend");

    const video = new VideoComponent(
      "Video Title",
      "https://youtu.be/K3-jG52XwuQ"
    );
    video.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".document")! as HTMLElement);
