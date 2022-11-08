import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import s from "./One.module.scss";
import icon from "/src/assets/cloud.svg";


console.log(icon);
export const Four = defineComponent({
  setup() {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img src={icon} alt="未加载" />
          <h2>会挣钱 <br /> 还要会省钱</h2>
        </div>
        <div class={s.action}>
          <span style="visibility:hidden">凑数</span>
          <RouterLink to="/start">完成</RouterLink>
          <RouterLink to="/start" >跳过</RouterLink>
        </div>
      </div>
    );
  },
});
