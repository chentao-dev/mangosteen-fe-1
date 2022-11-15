import { defineComponent, ref, Transition, VNode, watchEffect } from "vue";
import { RouteLocationNormalizedLoaded, RouterView, useRoute, useRouter } from "vue-router";
import { useSwipe } from "../hooks/useSwipe";
import { throttle } from "../shared/throttle";
import s from "./WelcomePage.module.scss";

//表驱动
const pushMap: Record<string, string> = {
  Welcome1: "/welcome/2",
  Welcome2: "/welcome/3",
  Welcome3: "/welcome/4",
  Welcome4: "/start",
};

export const WelcomePage = defineComponent({
  setup: () => {
    //获取元素
    const div = ref<HTMLElement>();
    //监听滑动事件(可覆写6种钩子)
    const { swiping, direction } = useSwipe(div, { beforeStart: (e) => e.preventDefault() });
    //路由表
    const route = useRoute();
    //路由器
    const router = useRouter();
    //对函数节流, 0.5秒后才可再调用函数, 路由跳转
    const replace = throttle(() => {
      const routeName = route.name?.toString();
      routeName && router.replace(pushMap[routeName]);
    }, 500);
    //触发滑动事件, 参数改变, 触发watch
    watchEffect(() => {
      if (swiping.value && direction.value === "left") {
        replace();
      }
    });

    return () => (
      <div class={s.wrapper}>
        <header>
          <svg width="64" height="69">
            <use xlinkHref="#mangosteen"></use>
          </svg>
          <h1>山竹记账</h1>
        </header>

        <main ref={div}>
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
