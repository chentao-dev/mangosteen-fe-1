import { defineComponent, ref } from "vue";
import { time } from "../../shared/time";
import { Icon } from "../public/Icon";
import s from "./InputPad.module.scss";
import { Popup, DatetimePicker, NumberKeyboard } from "vant";

export const InputPad = defineComponent({
  setup(props, ctx) {
    // 日期相关
    const show = ref(false);
    const date = ref(new Date());
    function changeShow() {
      show.value = !show.value;
    }
    function setDate(d: Date) {
      date.value = d;
      changeShow();
    }
    // 数字键盘相关
    const num = ref("0");
    function appendText(n: number | string) {
      n = n.toString();
      if (num.value.length >= 13) {
        return;
      }
      if (num.value.indexOf(".") >= 0) {
        if (n === ".") return;
        if (num.value.split(".")[1].length >= 2) return;
      }
      if (num.value === "0") {
        if (n === "0") return;
        if (n !== ".") {
          num.value = n;
          return;
        }
      }
      num.value += n;
    }
    function deleteText() {
      num.value = "0";
    }
    function x() {
      console.log("提交");
    }

    return () => (
      <div class={s.wrapper}>
        <div class={s.dateAndNum}>
          <span class={s.date}>
            <Icon name="#date"></Icon>
            <span onClick={changeShow}>{time(date.value).format()}</span>
          </span>
          <span class={s.num}>{num.value}</span>
        </div>

        {/* 数字键盘 */}
        <NumberKeyboard style="position:static" show={true} theme="custom" extra-key="." close-button-text="提交" onInput={appendText} onDelete={deleteText} onBlur={x}></NumberKeyboard>

        {/* 日期选择器, onConfirm确认触发, onCancel取消触发 */}
        <Popup position="bottom" v-model:show={show.value}>
          <DatetimePicker type="date" title="选择年月日" value={date.value} onCancel={changeShow} onConfirm={setDate}></DatetimePicker>
        </Popup>
      </div>
    );
  },
});
