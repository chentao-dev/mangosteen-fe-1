import { defineComponent } from "vue";
import s from "./Navbar.module.scss";

export const Navbar = defineComponent({
  setup(props, ctx) {
    return () => (
      <div class={s.navbar}>
        {ctx.slots.icon?.()} {ctx.slots.title?.()}
        {ctx.slots.tabs?.()}
      </div>
    );
  },
});
