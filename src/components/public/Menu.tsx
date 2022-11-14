import { defineComponent } from "vue";
import { Icon } from "./Icon";
import s from "./Menu.module.scss";

export const Menu = defineComponent({
  props: ["onClose"],
  setup(props, ctx) {
    function close() {
      props.onClose?.(); //调用外部传的函数
    }
    return () => (
      <>
        <div class={s.mask} onClick={close}></div>
        <div class={s.wrapper}>
          <section>
            <h2>未登录用户</h2>
            <p>点击这里登录</p>
          </section>
          <nav>
            <ul>
              <li>
                <Icon name="#menu-chart"></Icon> <span>统计图表</span>
              </li>
              <li>
                <Icon name="#menu-export"></Icon> <span>导出数据</span>
              </li>
              <li>
                <Icon name="#menu-notice"></Icon> <span>记账提醒</span>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  },
});
