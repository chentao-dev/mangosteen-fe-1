import { defineComponent } from "vue";
import { Button } from "../components/public/Button";
import { IconButton } from "../components/public/IconButton";
import s from "./Start.module.scss";

export const Start = defineComponent({
  setup() {
    return () => (
      <div>
        <Button class={s.button}>测试</Button>
        <IconButton name="#add"></IconButton>
      </div>
    );
  },
});
