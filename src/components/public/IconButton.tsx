import { defineComponent } from "vue";
import { Icon } from "./Icon";
import s from "./IconButton.module.scss";

export const IconButton = defineComponent({
  props: ["name"],
  setup(props, ctx) {
    return () => (
      <div class={s.wrapper}>
        <Icon name={props.name} class={s.icon}></Icon>
      </div>
    );
  },
});
