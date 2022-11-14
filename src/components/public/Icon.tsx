import { defineComponent } from "vue";

export const Icon = defineComponent({
  props: ["name", "sss"],
  setup(props, ctx) {
    return () => (
      <svg>
        <use xlinkHref={props.name}></use>
      </svg>
    );
  },
});
