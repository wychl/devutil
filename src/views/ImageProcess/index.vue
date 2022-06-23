<template>
  <a-row>
    <a-col :span="6">
      <input type="file" class="upload" @change="change" name="base64img" accept="image/*">
    </a-col>
  </a-row>
  <a-row :gutter="24">
    <a-col :span="10">
      <img :src="imgData" :style="{ height: 'auto', width: 'auto', maxHeight: '560px', maxWidth: '500px' }" />
    </a-col>
    <a-col :span="14">
      <a-textarea v-model:value="imgData" :auto-size="{ minRows: 25, maxRows: 25 }" />
    </a-col>
  </a-row>
</template>

<script setup>
// https://github.com/jonz94/wasm-vips-demo/blob/main/src/plugins/wasm-vips.ts
import Vips from 'wasm-vips';
// import Vips from './vips.js';
import { ref } from "vue";
const imgData = ref("")
const change = (event) => {
  event.preventDefault()
  const reader = new FileReader();
  // reader.onload = async (e) => {
  //   imgData.value = e.target.result
  // };
  // reader.readAsDataURL(event.target.files[0]);

  // Usage with .then
  Vips().then(vips => {
    // Code here
    const data = new Uint8Array([1, 2, 3, 4])
    const image = vips.Image.newFromBuffer(data);
    // const blob = new Blob([outBuffer], { type: 'image/jpeg' });
    // const blobURL = URL.createObjectURL(blob);
    reader.readAsDataURL(image);
  });
}

</script>

<style scoped>
.ant-row {
  margin: 20px;
}


.upload {
  color: transparent;
}

.upload::-webkit-file-upload-button {
  visibility: hidden;
}

.upload::before {
  content: 'Select some files';
  color: black;
  display: inline-block;
  background: -webkit-linear-gradient(top, #f9f9f9, #e3e3e3);
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
}

.upload:hover::before {
  border-color: black;
}

.upload:active {
  outline: 0;
}

.upload:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}

body {
  padding: 20px;
}
</style>

