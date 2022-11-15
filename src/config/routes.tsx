import { WelcomePage } from "../views/WelcomePage";
import { Four } from "../components/welcome/Four";
import { One } from "../components/welcome/One";
import { Three } from "../components/welcome/Three";
import { Two } from "../components/welcome/Two";
import { OneAction } from "../components/welcome/OneAction";
import { TwoAction } from "../components/welcome/TwoAction";
import { ThreeAction } from "../components/welcome/ThreeAction";
import { FourAction } from "../components/welcome/FourAction";
import { StartPage } from "../views/StartPage";
import { ItemPage } from "../views/ItemPage";
import { ItemList } from "../components/item/ItemList";
import { ItemCreate } from "../components/item/ItemCreate";
import { ItemCreatePay } from "../components/item/itemCreatePay";
import { itemCreateIncome } from "../components/item/itemCreateIncome";

//路由表
export const routes = [
  { path: "/", redirect: "/welcome/1" },
  {
    path: "/welcome",
    component: WelcomePage,
    children: [
      // { path: "", redirect: "/welcome/1" },
      { path: "1", name: "Welcome1", components: { m: One, f: OneAction } },
      { path: "2", name: "Welcome2", components: { m: Two, f: TwoAction } },
      { path: "3", name: "Welcome3", components: { m: Three, f: ThreeAction } },
      { path: "4", name: "Welcome4", components: { m: Four, f: FourAction } },
    ],
  },
  { path: "/start", component: StartPage },
  {
    path: "/item",
    component: ItemPage,
    children: [
      { path: "", component: ItemList },
      {
        path: "create",
        component: ItemCreate,
        children: [
          { path: "pay", component: ItemCreatePay },
          { path: "income", component: itemCreateIncome },
        ],
      },
    ],
  },
];
