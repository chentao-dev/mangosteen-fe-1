import { Welcome } from "../views/Welcome";
import { Four } from "../components/welcome/Four";
import { One } from "../components/welcome/One";
import { Three } from "../components/welcome/Three";
import { Two } from "../components/welcome/Two";
import { OneAction } from "../components/welcome/OneAction";
import { TwoAction } from "../components/welcome/TwoAction";
import { ThreeAction } from "../components/welcome/ThreeAction";
import { FourAction } from "../components/welcome/FourAction";

//路由表
export const routes = [
  { path: "/", redirect: "/welcome/1" },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      // { path: "", redirect: "/welcome/1" },
      { path: "1", name: "Welcome1", components: { m: One, f: OneAction } },
      { path: "2", name: "Welcome2", components: { m: Two, f: TwoAction } },
      { path: "3", name: "Welcome3", components: { m: Three, f: ThreeAction } },
      { path: "4", name: "Welcome4", components: { m: Four, f: FourAction } },
    ],
  },
];
