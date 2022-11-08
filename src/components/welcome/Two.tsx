import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import s from "./One.module.scss";
import icon from "/src/assets/clock.svg";


console.log(icon);
export const Two = defineComponent({
  setup() {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img src={icon} alt="未加载" />
          <h2>会挣钱 <br /> 还要会省钱</h2>
        </div>
        <div class={s.action}>
          <span style="visibility:hidden">凑数</span>
          <RouterLink to="/welcome/3">下一页</RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </div>
      </div>
    );
  },
});
