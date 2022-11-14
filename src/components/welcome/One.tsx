import { Icon } from "../public/Icon";
import s from "./WelcomeComponents.module.scss";

export const One = () => (
  <div class={s.card}>
    <Icon name="#pig"></Icon>
    <h2>
      会挣钱 <br /> 还要会省钱
    </h2>
  </div>
);

One.displayName = "One";
