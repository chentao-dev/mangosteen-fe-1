import s from "./WelcomeComponents.module.scss";

export const Four = () => (
  <div class={s.card}>
    <svg>
      <use xlinkHref="#cloud"></use>
    </svg>
    <h2>
      云备份 <br /> 再也不怕数据丢失
    </h2>
  </div>
);

Four.displayName = "Four";
