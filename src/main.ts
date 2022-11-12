import { createApp } from "vue";
import { App } from "./App";
import { createRouter } from "vue-router";
import { routes } from "./config/routes";
import { history } from "./shared/history";
import "@svgstore";

//路由器 (默认hash模式)
const router = createRouter({ history, routes });

//通过路由器渲染组件,挂载到app
const app = createApp(App);
app.use(router);
app.mount("#app");
