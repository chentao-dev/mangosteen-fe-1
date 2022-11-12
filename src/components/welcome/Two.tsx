import s from "./WelcomeComponents.module.scss";

export const Two = () => (
  <div class={s.card}>
    <svg>
      <use xlinkHref="#clock"></use>
    </svg>
    <h2>
      每日提醒 <br /> 不会遗漏每一笔账单
    </h2>
  </div>
);

Two.displayName = "Two";
