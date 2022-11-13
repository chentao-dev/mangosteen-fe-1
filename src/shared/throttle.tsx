//throttle(函数, 节流时间ms)
export const throttle = (fn: Function, time: number) => {
  //定时器
  let timer: number | undefined;
  //返回一个新的函数, 如果变量存在定时器则什么都不做
  return () => {
    if (!timer) {
      fn();
      //开启定时器, 赋值给变量
      timer = setTimeout(() => {
        timer = undefined; //定时结束时, 清空变量
      }, time);
    }
  };
};
