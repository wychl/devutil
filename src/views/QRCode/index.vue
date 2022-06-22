<template>
  <a-row :gutter="20">
    <a-col :span="10">
      <a-textarea v-model:value="input" :auto-size="{ minRows: 10, maxRows: 20 }" />
    </a-col>
    <a-col :span="4" :style="{ marginTop: 'auto', marginBottom: 'auto' }">
      <div>
        <div>
          <a-button @click="generate" type="primary">生成</a-button>
        </div>
      </div>
    </a-col>
    <a-col :span="10">
      <img :src="img" :style="{ height: 'auto', width: 'auto', height: '300px', width: '300px' }" />
    </a-col>
  </a-row>
  <a-row :gutter="20">
    <a-col :span="4">
      <input type="file" class="upload" @change="change" name="base64img" accept="image/*">
    </a-col>
    <a-col :span="10">
      <img :src="imgData" :style="{ height: 'auto', width: 'auto', maxHeight: '560px', maxWidth: '500px' }" />
    </a-col>
    <a-col :span="10">
      <a-textarea v-model:value="qrCodeData" :auto-size="{ minRows: 10, maxRows: 20 }" />
    </a-col>
  </a-row>
</template>

<script setup>
import QRCode from 'qrcode'
import QrcodeDecoder from 'qrcode-decoder';
import { ref } from "vue";
const input = ref("")
const img = ref("")
const qrCodeData = ref("")
const imgData = ref("")


const generate = () => {
  // With promises
  QRCode.toDataURL(input.value)
    .then(url => {
      img.value = url
    })
    .catch(err => {
      console.error(err)
    })
}


const change = (event) => {
  event.preventDefault()
  const reader = new FileReader();
  reader.onload = async (e) => {
    var qr = new QrcodeDecoder();
    qr.decodeFromImage(e.target.result).then((res) => {
      const {data=""}=res
      qrCodeData.value = data;
    });
    imgData.value = e.target.result
  };
  reader.readAsDataURL(event.target.files[0]);
}

</script>

<style scoped>
.ant-row {
  margin: 20px;
}

.jv-container {
  max-height: 560px;
  overflow-y: scroll;
}

.jv-code {
  overflow-x: auto;
}
</style>

