import s from "./WelcomeComponents.module.scss";

export const Three = () => (
  <div class={s.card}>
    <svg>
      <use xlinkHref="#chart"></use>
    </svg>
    <h2>
      数据可视化 <br /> 收支一目了然
    </h2>
  </div>
);

Three.displayName = "Three";
