import { defineComponent } from "vue";

export const Foo = defineComponent({
    setup(){
        return ()=><>
            <div>组件Foo</div>
        </>
    }
})