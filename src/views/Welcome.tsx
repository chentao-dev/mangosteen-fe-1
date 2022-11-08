import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import s from "./Welcome.module.scss"
import logo from "../assets/mangosteen.svg"

export const Welcome = defineComponent({
  setup() {
    return () => (
      <div class={s.wrapper}>
        <header>
          <img src={logo} alt="未加载" />
          <h1>山竹记账</h1>
        </header>
        <main><RouterView></RouterView></main>
      </div>
    );
  },
});