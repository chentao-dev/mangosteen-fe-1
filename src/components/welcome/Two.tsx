import { Icon } from "../public/Icon";
import s from "./WelcomeComponents.module.scss";

export const Two = () => (
  <div class={s.card}>
    <Icon name="#clock"></Icon>
    <h2>
      每日提醒 <br /> 不会遗漏每一笔账单
    </h2>
  </div>
);

Two.displayName = "Two";
