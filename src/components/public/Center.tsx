import { defineComponent } from "vue";
import s from "./Center.module.scss";

export const Center = defineComponent({
  setup(props, ctx) {
    return () => <div class={s.wrapper}>{ctx.slots.default?.()}</div>;
  },
});
