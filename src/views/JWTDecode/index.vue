<template>
  <a-row :gutter="20">
    <a-col :span="12">
      <a-textarea v-model:value="jwtStr" :auto-size="{ minRows: 27, maxRows: 30 }" />
    </a-col>
    <a-col :span="12">
      <a-row>
        <a-textarea v-model:value="header" :auto-size="{ minRows: 13, maxRows: 15 }" />
      </a-row>
      <a-row>
        <a-textarea v-model:value="payload" :auto-size="{ minRows: 13, maxRows: 15 }" />
      </a-row>
      <a-row></a-row>
    </a-col>
  </a-row>
</template>

<script setup>
import { ref, watch } from "vue";
import jwt_decode from "jwt-decode";
const jwtStr = ref("");
const header = ref("");
const payload = ref("");

watch(jwtStr, (val) => {
  header.value = JSON.stringify(jwt_decode(val, { header: true }))
  payload.value = JSON.stringify(jwt_decode(val))
})

</script>
<style scoped>
.ant-row {
  margin: 20px;
}
</style>
