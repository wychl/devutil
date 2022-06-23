<template>
  <a-row :gutter="20">
    <a-col :span="12">
      <a-textarea v-model:value="decodeStr" :auto-size="{ minRows: 27, maxRows: 30 }" />
    </a-col>
    <a-col :span="12">
      <a-textarea v-model:value="encodeStr" :auto-size="{ minRows: 27, maxRows: 30 }" />
    </a-col>
  </a-row>
</template>

<script setup>
import { ref, watch } from "vue";
// import { invoke } from "@tauri-apps/api/tauri";
import { Base64 } from "js-base64";

const decodeStr = ref("");
const encodeStr = ref("");

watch(decodeStr, (val) => {
  encodeStr.value = Base64.encode(val)
})
watch(encodeStr, (val) => {
  decodeStr.value = Base64.decode(val)
})
</script>

<style scoped>
.ant-row {
  margin: 20px;
}
</style>
