<template>
    <a-row>
        <a-textarea v-model:value="input" :auto-size="{ minRows: 10, maxRows: 15 }" />
    </a-row>
    <a-row>
        <a-col :span="4">
            <a-button @click="format" type="primary">格式化</a-button>
        </a-col>
        <a-col :span="4">
            <a-button @click="minify" type="primary">压缩</a-button>
        </a-col>
        <a-col :span="4">
            <a-button @click="jsonToYaml" type="primary">JsonToYaml</a-button>
        </a-col>
    </a-row>
    <a-row>
        <a-textarea v-model:value="output" :auto-size="{ minRows: 10, maxRows: 15 }" />
    </a-row>
</template>

<script setup>
import { ref } from 'vue'
import Yaml from 'json-to-pretty-yaml';
const input = ref("")
const output = ref("")

function format() {
    const obj=JSON.parse(input.value)
    output.value = JSON.stringify(obj, null, 4);
}

function minify() {
    const obj = JSON.parse(input.value)
    output.value = JSON.stringify(obj, null, 0);
}

function jsonToYaml() {
    const obj = JSON.parse(input.value)
    output.value = Yaml.stringify(obj);
}

</script>

<style scoped>
.ant-row {
    margin: 20px;
}
</style>
