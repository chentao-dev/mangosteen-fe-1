import { RouterLink } from "vue-router";
import s from "./WelcomeComponents.module.scss";

export const FourAction = () => (
  <div class={s.action}>
    <RouterLink to="" style="visibility:hidden">
      跳过
    </RouterLink>
    <RouterLink to="/start">开启应用</RouterLink>
    <RouterLink to="" style="visibility:hidden">
      跳过
    </RouterLink>
  </div>
);

FourAction.displayName = "FourAction";
