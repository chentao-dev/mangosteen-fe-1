import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export const ItemPage = defineComponent({
  setup(props, ctx) {
    return () => (
      <div>
        <RouterView></RouterView>
      </div>
    );
  },
});
