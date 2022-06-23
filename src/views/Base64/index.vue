<template>
  <a-row :gutter="20">
    <a-col :span="10">
      <a-textarea
        v-model:value="input"
        :auto-size="{ minRows: 27, maxRows: 30 }"
      />
    </a-col>
    <a-col :span="4" :style="{ marginTop: 'auto', marginBottom: 'auto' }">
      <div>
        <div>
          <a-button @click="encodeStr" type="primary">编码</a-button>
        </div>
        <div :style="{ marginTop: '20px' }">
          <a-button @click="decodeStr" type="primary">解码</a-button>
        </div>
      </div>
    </a-col>
    <a-col :span="10">
      <a-textarea
        v-model:value="output"
        :auto-size="{ minRows: 27, maxRows: 30 }"
      />
    </a-col>
  </a-row>
</template>

<script setup>
import { ref } from "vue";
// import { invoke } from "@tauri-apps/api/tauri";
import { encode, decode } from "js-base64";

const input = ref("");
const output = ref("xxx");

const encodeStr = () => {
  output.value = encode(input.value);
  // invoke("base64_encode", { input: input.value }).then(
  //   (res) => (output.value = res)
  // );
};

function decodeStr() {
  output.value = decode(input.value);
  // invoke("base64_decode", { input: input.value }).then(
  //   (res) => (output.value = res)
  // );
}
</script>

<style scoped>
.ant-row {
  margin: 20px;
}
</style>
