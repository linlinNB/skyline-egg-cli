import { Service } from "egg";

export default class News extends Service {
  public async sayNews(name: string) {
    return `Hi, say ${name}`;
  }
}
