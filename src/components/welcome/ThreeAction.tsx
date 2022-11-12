import { RouterLink } from "vue-router";
import s from "./WelcomeComponents.module.scss";

export const ThreeAction = () => (
  <div class={s.action}>
    <RouterLink to="" style="visibility:hidden">
      跳过
    </RouterLink>
    <RouterLink to="/welcome/4">下一页</RouterLink>
    <RouterLink to="/start">跳过</RouterLink>
  </div>
);

ThreeAction.displayName = "ThreeAction";
