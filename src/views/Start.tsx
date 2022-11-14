import { defineComponent, ref } from "vue";
import { Button } from "../components/public/Button";
import { Icon } from "../components/public/Icon";
import { IconButton } from "../components/public/IconButton";
import { Menu } from "../components/public/Menu";
import { Navbar } from "../components/public/Navbar";
import s from "./Start.module.scss";

export const Start = defineComponent({
  setup() {
    let show = ref(false);

    return () => (
      <div class={s.wrapper}>
        <Navbar class={s.navbar}>
          {{
            icon: () => (
              <span>
                <Icon name="#menu" onClick={() => (show.value = true)}></Icon>
              </span>
            ),
            title: () => <span>山竹记账</span>,
          }}
        </Navbar>
        <div class={s.center}>
          <Icon name="#pig"></Icon>
        </div>
        <Button class={s.button}>开始记账</Button>
        <IconButton name="#add"></IconButton>
        {show.value && <Menu onClose={() => (show.value = false)}></Menu>}
      </div>
    );
  },
});
