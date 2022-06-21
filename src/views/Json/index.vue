<template>
  <a-row :gutter="20">
    <a-col :span="10">
      <a-textarea v-model:value="input" :auto-size="{ minRows: 27, maxRows: 30 }" />
    </a-col>
    <a-col :span="4" :style="{ marginTop: 'auto', marginBottom: 'auto' }">
      <div>
        <div>
          <a-button @click="format" type="primary">格式化</a-button>
        </div>
        <div :style="{ marginTop: '20px' }">
          <a-button @click="minify" type="primary">压缩</a-button>
        </div>
        <div :style="{ marginTop: '20px' }">
          <a-button @click="jsonToYaml" type="primary">JsonToYaml</a-button>
        </div>
      </div>
    </a-col>
    <a-col :span="10">
      <json-viewer :value="formatOutput" v-if="action === 'format'" />
      <a-textarea v-else v-model:value="output" :auto-size="{ minRows: 27, maxRows: 30 }" />
    </a-col>
  </a-row>
</template>

<script setup>
import { ref, reactive } from "vue";
import Yaml from "json-to-pretty-yaml";
import { JsonViewer } from "vue3-json-viewer"
import "vue3-json-viewer/dist/index.css"; const input = ref("");
const output = ref("");
const formatOutput = reactive({
});
const action = ref("")
function format() {
  const obj = JSON.parse(input.value);
  Object.assign(formatOutput, obj)
  action.value = "format"
}

function minify() {
  const obj = JSON.parse(input.value);
  output.value = JSON.stringify(obj, null, 0);
  action.value = ""
}

function jsonToYaml() {
  const obj = JSON.parse(input.value);
  output.value = Yaml.stringify(obj);
  action.value = ""
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

