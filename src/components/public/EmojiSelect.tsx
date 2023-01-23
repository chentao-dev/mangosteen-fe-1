import { computed, defineComponent, ref } from "vue";
import s from "./EmojiSelect.module.scss";
import { emojiList } from "../../shared/emojiList";

export const EmojiSelect = defineComponent({
  setup(props, ctx) {
    // console.log(emojiList);
    const refSelected = ref(0);
    const table: [string, string[]][] = [
      ["表情", ["face-smiling", "face-affection", "face-tongue", "face-hand", "face-neutral-skeptical", "face-sleepy", "face-unwell", "face-hat", "face-glasses", "face-concerned", "face-negative", "face-costume"]],
      ["手势", ["hand-fingers-open", "hand-fingers-partial", "hand-single-finger", "hand-fingers-closed", "hands", "hand-prop", "body-parts"]],
      ["人物", ["person", "person-gesture", "person-role", "person-fantasy", "person-activity", "person-sport", "person-resting"]],
      ["衣服", ["clothing"]],
      ["动物", ["cat-face", "monkey-face", "animal-mammal", "animal-bird", "animal-amphibian", "animal-reptile", "animal-marine", "animal-bug"]],
      ["植物", ["plant-flower", "plant-other"]],
      ["自然", ["sky & weather", "science"]],
      ["食物", ["food-fruit", "food-vegetable", "food-prepared", "food-asian", "food-marine", "food-sweet"]],
      ["运动", ["sport", "game"]],
    ];

    const emojis = computed(() => {
      const selectedItem = table[refSelected.value][1];
      return selectedItem.map((category) => emojiList.find((item) => item[0] === category)?.[1].map((item) => <li>{item}</li>));
    });
    function changeSelected(n: number) {
      refSelected.value = n;
      // console.log(n);
    }

    //------------视图------------------
    //prettier-ignore
    return () => (
      <div class={s.emoji}>
        <label>
          <span>符号</span>
          <div class={s.wrapper}>
            <nav>
              {table.map((item, n) => <span onClick={()=>{changeSelected(n)}}> {item[0]}</span> )}
            </nav>
            <ol>{emojis.value}</ol>
          </div>
        </label>
      </div>
    );
  },
});
