<template>
  <QuillEditor/>

</template>

<script>
import { reactive } from "vue";
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {
  name: "App",
  components: {
    QuillEditor,
  },
  setup() {
    const state = reactive({
      content: "<p></p>",
      _content: "",
      editorOption: {
        placeholder: "core",
        modules: {},
      },
      disabled: false,
    });

    const onEditorBlur = (quill) => {
      console.log("editor blur!", quill);
    };
    const onEditorFocus = (quill) => {
      console.log("editor focus!", quill);
    };
    const onEditorReady = (quill) => {
      console.log("editor ready!", quill);
    };
    const onEditorChange = ({ quill, html, text }) => {
      console.log("editor change!", quill, html, text);
      state._content = html;
    };

    setTimeout(() => {
      state.disabled = true;
    }, 2000);
    return {
      state,
      onEditorBlur,
      onEditorFocus,
      onEditorReady,
      onEditorChange,
    };
  },
};
</script>

<style scoped>
.ant-row {
  margin: 20px;
}
</style>
