import { defineComponent } from "vue";

export const Icon = defineComponent({
  props: ["name", "onClick"],
  setup(props, ctx) {
    return () => (
      <svg onClick={props.onClick}>
        <use xlinkHref={props.name}></use>
      </svg>
    );
  },
});
