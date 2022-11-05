import { defineComponent } from "vue";

export const App = defineComponent({
  setup() {
    return () => (
      <>
        <header>
          导航
          <ul>
            <li>
              <router-link to="/">Foo</router-link>
            </li>
            <li>
              <router-link to="/about">Bar</router-link>
            </li>
          </ul>
        </header>
        <div>
          <router-view />
        </div>
      </>
    );
  },
});
