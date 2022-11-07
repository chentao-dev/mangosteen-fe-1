import { Bar } from "../views/Bar";
import { Foo } from "../views/Foo";
import { Welcome } from "../views/Welcome";
import { Four } from "../components/welcome/Four";
import { One } from "../components/welcome/One";
import { Three } from "../components/welcome/Three";
import { Two } from "../components/welcome/Two";


//路由表
export const routes = [
    { path: "/", redirect: '/welcome/1' },
    { path: "/about", component: Bar },
    {
        path: "/welcome", component: Welcome,
        children: [
            // { path: "", redirect: "/welcome/1" },
            { path: "1", component: One },
            { path: "2", component: Two },
            { path: "3", component: Three },
            { path: "4", component: Four },
        ],
    },
];
