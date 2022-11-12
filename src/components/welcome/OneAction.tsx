import { RouterLink } from "vue-router";
import s from "./WelcomeComponents.module.scss";

export const OneAction = () => (
  <div class={s.action}>
    <RouterLink to="" style="visibility:hidden">
      跳过
    </RouterLink>
    <RouterLink to="/welcome/2">下一页</RouterLink>
    <RouterLink to="/start">跳过</RouterLink>
  </div>
);

OneAction.displayName = "OneAction";
