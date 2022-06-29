<template>
  <a-row :gutter="20">
    <a-col :span="12">
      <a-row>
        <a-input v-model:value="key" />
      </a-row>
      <a-row>
        <a-textarea v-model:value="payload" :auto-size="{ minRows: 13, maxRows: 15 }" />
      </a-row>
    </a-col>
    <a-col :span="4">
      <a-button @click="encode" type="primary">编码</a-button>
    </a-col>
    <a-col :span="8">
      <a-textarea v-model:value="token" />
    </a-col>
  </a-row>
</template>

<script setup>
import { ref, watch } from "vue";
import jwt_encode from "jwt-encode";
const key = ref("");
const payload = ref("");
const token = ref("");

const encode = () => {
  token.value = jwt_encode(payload.value, key.value)
}

</script>
<style scoped>
.ant-row {
  margin: 20px;
}
</style>
