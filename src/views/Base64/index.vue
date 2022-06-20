<template>
    <a-row>
        <a-textarea v-model:value="input" :auto-size="{ minRows: 10, maxRows: 15 }" />
    </a-row>
    <a-row>
        <a-col :span="4">
            <a-button @click="encode" type="primary">编码</a-button>
        </a-col>
        <a-col :span="4">
            <a-button @click="decode" type="primary">解码</a-button>
        </a-col>
    </a-row>
    <a-row>
        <a-textarea v-model:value="output" :auto-size="{ minRows: 10, maxRows: 15 }" />
    </a-row>
</template>

<script setup>
import { ref } from 'vue'
import { invoke } from "@tauri-apps/api/tauri";

const input = ref("")
const output = ref("")

function encode() {
    invoke('base64_encode', { input: input.value }).then(res => output.value = res);
}

function decode() {
    invoke('base64_decode', { input: input.value }).then(res => output.value = res);
}

</script>

<style scoped>
.ant-row {
    margin: 20px;
}
</style>
