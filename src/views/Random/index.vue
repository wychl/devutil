<template>
  <a-row :gutter="20">
    <a-col :span="12">
      <a-row :gutter="5">
        <a-col :span="6">生成数量:</a-col>
        <a-col :span="18">
          <a-slider v-model:value="data.length" />
        </a-col>
      </a-row>
      <a-row :gutter="5">
        <a-col :span="6">大写字母长度:</a-col>
        <a-col :span="18">
          <a-slider v-model:value="data.uppercase_length" />
        </a-col>
      </a-row>
      <a-row :gutter="5">
        <a-col :span="6">小写字母长度</a-col>
        <a-col :span="18">
          <a-slider v-model:value="data.lowercase_length" />
        </a-col>
      </a-row>
      <a-row :gutter="5">
        <a-col :span="6">数字长度</a-col>
        <a-col :span="18">
          <a-slider v-model:value="data.digital_length" />
        </a-col>
      </a-row>
    </a-col>
    <a-col :span="12">
      <div v-for="value in list">
        {{ value }}
      </div>
    </a-col>
  </a-row>
</template>

<script setup>
import { watch, reactive, ref } from "vue";

const data = reactive({
  length: 5,
  uppercase_length: 0, //大写字母
  lowercase_length: 0, //小写字母
  digital_length: 0, //数字长度
});

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const digital = "0123456789";
const list = ref([""]);

watch(data, (newValue, oldValue) => {
  let randomList = [];
  for (let index = 0; index < data.length; index++) {
    let strList = "";
    for (let i = 0; i < newValue.uppercase_length; i++) {
      strList += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    }
    for (let i = 0; i < newValue.lowercase_length; i++) {
      strList += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    }
    for (let i = 0; i < newValue.digital_length; i++) {
      strList += digital.charAt(Math.floor(Math.random() * digital.length));
    }

    let randomStr = "";
    for (let i = 0; i < strList.length; i++) {
      randomStr += strList.charAt(Math.floor(Math.random() * strList.length));
    }
    randomList.push(randomStr);
  }
  list.value = randomList;
});
</script>

<style scoped>
.ant-row {
  margin: 20px;
}
</style>

