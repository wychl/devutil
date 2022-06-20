<template>
    <a-row :gutter="16">
        <a-col :span="4"> 当前时间：</a-col>
        <a-col :span="8">
            <a-input v-model:value="currentTime" />
        </a-col>
        <a-col :span="4">
            <a-button @click="curToTimestamp" type="primary">转换</a-button>
        </a-col>
        <a-col :span="8">
            <a-input v-model:value="curOutput" />
        </a-col>
    </a-row>
    <a-row :gutter="16">
        <a-col :span="4"> 时间戳：</a-col>
        <a-col :span="8">
            <a-input v-model:value="input" />
        </a-col>
        <a-col :span="4">
            <a-button @click="toDate" type="primary">转换</a-button>
        </a-col>
        <a-col :span="8">
            <a-input v-model:value="dateOutput" />
        </a-col>
    </a-row>
    <a-row :gutter="16">
        <a-col :span="4"> 时间：</a-col>
        <a-col :span="8">
            <a-input v-model:value="timestampInput" />
        </a-col>
        <a-col :span="4">
            <a-button @click="toTimestamp" type="primary">转换</a-button>
        </a-col>
        <a-col :span="8">
            <a-input v-model:value="timestampOutput" />
        </a-col>
    </a-row>
</template>

<script setup>
import { toNumber } from '@vue/shared';
import moment from 'moment';
import { onMounted, onUnmounted, ref } from 'vue'
const input = ref("")
const dateOutput = ref("")
const timestampInput = ref("")
const timestampOutput = ref("")
const curOutput = ref("")
const currentTime = ref("")
let timer = ""

function toDate() {
    dateOutput.value = moment.unix(input.value).format('YYYY-MM-DD hh:mm:ss')
}

function toTimestamp() {
    timestampOutput.value = moment(timestampInput.value).unix()
}

function curToTimestamp() {
    curOutput.value = moment(currentTime.value).unix()
}
onMounted(() => {
    timer = setInterval(function () {
        currentTime.value = moment(new Date()).format('YYYY-MM-DD hh:mm:ss')
    })
})

onUnmounted(() => {
    if (timer) {
        clearInterval(timer);
    }
})


</script>

<style scoped>
.ant-row {
    margin: 20px;
}
</style>
