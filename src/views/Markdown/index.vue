<template>
  <a-row :gutter="20">
    <v-md-editor v-model="data" height="800px"></v-md-editor>
  </a-row>
</template>

<script setup>
import { ref, watch } from "vue";
// import { invoke } from "@tauri-apps/api/tauri";
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs';
import 'prismjs/components/prism-json';
VMdEditor.use(vuepressTheme, {
  Prism,
});
const data = ref("");
</script>

<style scoped>
.ant-row {
  margin: 20px;
}
</style>
