import s from "./WelcomeComponents.module.scss";

export const One = () => (
  <div class={s.card}>
    <svg>
      <use xlinkHref="#pig"></use>
    </svg>
    <h2>
      会挣钱 <br /> 还要会省钱
    </h2>
  </div>
);

One.displayName = "One";
