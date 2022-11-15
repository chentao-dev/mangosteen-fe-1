import { defineComponent, ref } from "vue";
import { RouterLink } from "vue-router";
import { Button } from "../components/public/Button";
import { Icon } from "../components/public/Icon";
import { IconButton } from "../components/public/IconButton";
import { Menu } from "../components/public/Menu";
import { Navbar } from "../components/public/Navbar";
import s from "./StartPage.module.scss";

export const StartPage = defineComponent({
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
        <RouterLink to="/item/create">
          <Button class={s.button}>开始记账</Button>
        </RouterLink>
        <RouterLink to="/item/create">
          <IconButton name="#add"></IconButton>
        </RouterLink>
        {show.value && <Menu onClose={() => (show.value = false)}></Menu>}
      </div>
    );
  },
});
