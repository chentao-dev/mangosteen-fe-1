import { defineComponent, reactive } from "vue";
import { Button } from "../public/Button";
import { EmojiSelect } from "../public/EmojiSelect";
import { Icon } from "../public/Icon";
import { Navbar } from "../public/Navbar";
import s from "./TagCreate.module.scss";

export const TagCreate = defineComponent({
  setup(props, ctx) {
    const formData = reactive({
      name: "",
      sign: "",
    });

    return () => (
      <div>
        <Navbar>
          {{
            icon: () => (
              <span>
                <Icon name="#left" onClick={() => {}}></Icon>
              </span>
            ),
            title: () => <span>新建标签</span>,
          }}
        </Navbar>

        {formData.name}

        <div class={s.container}>
          <form action="">
            <div class={s.name}>
              <label>
                <span>标签名</span>
                <br />
                <div class={s.inputWrapper}>
                  <input type="text" placeholder="2到4个汉字" v-model={formData.name} />
                </div>
              </label>
            </div>
            <EmojiSelect></EmojiSelect>
            <p>记账时长按标签即可进行编辑</p>
            <Button>确定</Button>
          </form>
        </div>
      </div>
    );
  },
});
