import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { Icon } from "../public/Icon";
import { Navbar } from "../public/Navbar";
import { InputPad } from "./InputPad";

export const ItemCreate = defineComponent({
  setup(props, ctx) {
    return () => (
      <div>
        <Navbar>
          {{
            icon: () => (
              <span>
                <Icon name="#left"></Icon>
              </span>
            ),
            title: () => <span>记一笔</span>,
            tabs: () => (
              <ul>
                <RouterLink to="/item/create/pay">
                  <li>支出</li>
                </RouterLink>
                <RouterLink to="/item/create/income">
                  <li>收入</li>
                </RouterLink>
              </ul>
            ),
          }}
        </Navbar>
        <RouterView></RouterView>
        <InputPad></InputPad>
      </div>
    );
  },
});
