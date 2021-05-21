import { Component } from "./components/component";
import { TodoComponent } from "./components/page/item/todo";
import { NoteComponent } from "./components/page/item/note";
import { VideoComponent } from "./components/page/item/video";
import { ImageComponent } from "./components/page/item/image";
import { Composable, PageComponent } from "./components/page/item/page";

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "Image Title",
      "https://i.picsum.photos/id/902/536/354.jpg?hmac=4WH85q7uEdOeEmbcRc7lkRgcUFZimMZtYXqFroCGh0Y"
    );
    this.page.addChild(image);

    const note = new NoteComponent("Note Title", "내용을 작성해주세요.");
    this.page.addChild(note);

    const todo = new TodoComponent("Todo Title", "오늘의 할 일을 입력해주세요");
    this.page.addChild(todo);

    const video = new VideoComponent(
      "Video Title",
      "https://youtu.be/K3-jG52XwuQ"
    );
    this.page.addChild(video);
  }
}

new App(document.querySelector(".document")! as HTMLElement);
