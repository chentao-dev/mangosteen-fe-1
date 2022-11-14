import { defineComponent } from "vue";
import s from "./Button.module.scss";

export const Button = defineComponent({
  setup(props, ctx) {
    return () => (
      <div>
        <button class={s.button}>{ctx.slots.default?.()}</button>
      </div>
    );
  },
});
