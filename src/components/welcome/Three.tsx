import { Icon } from "../public/Icon";
import s from "./WelcomeComponents.module.scss";

export const Three = () => (
  <div class={s.card}>
    <Icon name="#chart"></Icon>
    <h2>
      数据可视化 <br /> 收支一目了然
    </h2>
  </div>
);

Three.displayName = "Three";
