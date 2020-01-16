import { Application } from "egg";

module.exports = (app: Application) => {
  const { router, controller } = app;
  // 定义当前的namespace
  const newsRouter = router.namespace("/news");
  // 定义当前返回的数据
  newsRouter.get("/", controller.news.index);
};
