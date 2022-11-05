import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { App } from "./App";
import { Bar } from "./views/Bar";
import { Foo } from "./views/Foo";

//路由表
const routes = [
  { path: "/", component: Foo },
  { path: "/about", component: Bar },
];

//路由器 (默认hash模式)
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//通过路由器渲染组件,挂载到app
const app = createApp(App);
app.use(router);
app.mount("#app");
