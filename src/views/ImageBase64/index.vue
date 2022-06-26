<template>
  <a-row>
    <a-col :span="4">
      <input type="file" class="upload" @change="change" name="base64img" accept="image/*">
    </a-col>
    <a-col :span="20">
      <img :src="imgData" :style="{ height: 'auto', width: 'auto', maxHeight: '560px', maxWidth: '500px' }" />
    </a-col>
  </a-row>
  <a-row :gutter="24">
    <a-textarea v-model:value="imgData" :auto-size="{ minRows: 25, maxRows: 25 }" />
  </a-row>
</template>

<script setup>
import { ref } from "vue";
const imgData = ref(null)
const change = (event) => {
  event.preventDefault()
  const reader = new FileReader();
  reader.onload = async (e) => {
    imgData.value = e.target.result
  };
  reader.readAsDataURL(event.target.files[0]);
}

</script>

<style scoped>
.ant-row {
  margin: 20px;
}

.upload::-webkit-file-upload-button {
  visibility: hidden;
}

.upload::before {
  content: '上传文件';
  display: inline-block;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
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

.upload:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}
</style>

