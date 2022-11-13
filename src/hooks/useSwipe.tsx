import { computed, onMounted, onUnmounted, ref, Ref } from "vue";

type Point = {
  x: number;
  y: number;
};

//滑动时的6个钩子, 滑动开始/滑动中/滑动结束, 方便灵活设置
interface Options {
  beforeStart?: (e: TouchEvent) => void;
  afterStart?: (e: TouchEvent) => void;
  beforMove?: (e: TouchEvent) => void;
  afterMove?: (e: TouchEvent) => void;
  beforEnd?: (e: TouchEvent) => void;
  afterEnd?: (e: TouchEvent) => void;
}

// 导出函数, 使用 useSwipe(div,{beforeStart: (e) => e.preventDefault()});
export const useSwipe = (element: Ref<HTMLElement | undefined>, options?: Options) => {
  const start = ref<Point>();
  const end = ref<Point>();
  const swiping = ref(false);
  const distance = computed(() => {
    if (!start.value || !end.value) {
      return null;
    }
    return {
      x: end.value.x - start.value.x,
      y: end.value.y - start.value.y,
    };
  });
  const direction = computed(() => {
    if (!distance.value) {
      return "";
    }
    const { x, y } = distance.value;
    if (Math.abs(x) > Math.abs(y)) {
      return x > 0 ? "right" : "left";
    } else {
      return y > 0 ? "down" : "up";
    }
  });

  //事件触发函数, 加了钩子
  const onStart = (e: TouchEvent) => {
    options?.beforeStart?.(e);
    swiping.value = true;
    end.value = start.value = { x: e.touches[0].screenX, y: e.touches[0].screenY };
    options?.afterStart?.(e);
  };
  const onMove = (e: TouchEvent) => {
    options?.beforMove?.(e);
    if (!start.value) {
      return;
    }
    end.value = { x: e.touches[0].screenX, y: e.touches[0].screenY };
    options?.afterMove?.(e);
  };
  const onEnd = (e: TouchEvent) => {
    options?.beforEnd?.(e);
    swiping.value = false;
    options?.afterEnd?.(e);
  };

  //组件挂载时, 监听3个触摸事件
  onMounted(() => {
    if (!element.value) {
      return;
    }
    element.value.addEventListener("touchstart", onStart);
    element.value.addEventListener("touchmove", onMove);
    element.value.addEventListener("touchend", onEnd);
  });
  //组件销毁时, 取消监听
  onUnmounted(() => {
    if (!element.value) {
      return;
    }
    element.value.removeEventListener("touchstart", onStart);
    element.value.removeEventListener("touchmove", onMove);
    element.value.removeEventListener("touchend", onEnd);
  });

  //useSwipe()返回3个参数, 是否滑动/滑动方向/滑动距离
  return {
    swiping,
    direction,
    distance,
  };
};
