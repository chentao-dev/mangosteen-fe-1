import { Icon } from "../public/Icon";
import s from "./WelcomeComponents.module.scss";

export const Four = () => (
  <div class={s.card}>
    <Icon name="#cloud"></Icon>
    <h2>
      云备份 <br /> 再也不怕数据丢失
    </h2>
  </div>
);

Four.displayName = "Four";
