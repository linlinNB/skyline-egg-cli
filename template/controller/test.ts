import { Controller } from "egg";

export default class NewsController extends Controller {
  /**
   * 作用: 测试news路由存在的页面
   */
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.news.sayNews("News");
  }
}
