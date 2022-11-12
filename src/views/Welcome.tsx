import { defineComponent, ref, Transition, VNode, watchEffect } from "vue";
import { RouteLocationNormalizedLoaded, RouterView } from "vue-router";
import { useSwipe } from "../hooks/useSwipe";
import s from "./Welcome.module.scss";

export const Welcome = defineComponent({
  setup: () => {
    const main = ref<HTMLElement>();
    const { swiping, direction } = useSwipe(main);
    //只要任何一个变量改变, 就触发
    watchEffect(() => {
      //swiping是否滑动, direction滑动方向
      console.log(direction.value);
    });

    return () => (
      <div class={s.wrapper}>
        <header>
          <svg width="64" height="69">
            <use xlinkHref="#mangosteen"></use>
          </svg>
          <h1>山竹记账</h1>
        </header>

        <main ref={main}>
          <RouterView name="m">
            {({ Component: X, route: R }: { Component: VNode; route: RouteLocationNormalizedLoaded }) => (
              <Transition enterActiveClass={s.fade_enter_active} leaveActiveClass={s.fade_leave_active} enterFromClass={s.fade_enter_from} leaveToClass={s.fade_leave_to}>
                {X}
              </Transition>
            )}
          </RouterView>
        </main>

        <footer>
          <RouterView name="f" />
        </footer>
      </div>
    );
  },
});
