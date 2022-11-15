import { defineComponent } from "vue";
import { Icon } from "../public/Icon";
import s from "./InputPad.module.scss";

export const InputPad = defineComponent({
  setup(props, ctx) {
    const buttons = [
      { text: "1", onClick: () => {} },
      { text: "2", onClick: () => {} },
      { text: "3", onClick: () => {} },
      { text: "删除", onClick: () => {} },
      { text: "4", onClick: () => {} },
      { text: "5", onClick: () => {} },
      { text: "6", onClick: () => {} },
      { text: "+", onClick: () => {} },
      { text: "7", onClick: () => {} },
      { text: "8", onClick: () => {} },
      { text: "9", onClick: () => {} },
      { text: "-", onClick: () => {} },
      { text: ".", onClick: () => {} },
      { text: "0", onClick: () => {} },
      { text: "清空", onClick: () => {} },
      { text: "提交", onClick: () => {} },
    ];
    return () => (
      <div class={s.wrapper}>
        <div class={s.dateAndNum}>
          <span class={s.date}>
            <Icon name="#date"></Icon>
            <span>2022-01-01</span>
          </span>
          <span class={s.num}>10009.12</span>
        </div>
        <div class={s.buttons}>
          {buttons.map((v) => (
            <button onClick={v.onClick}>{v.text}</button>
          ))}
        </div>
      </div>
    );
  },
});
