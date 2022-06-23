<template>
  <a-layout class="layout">
    <a-layout-sider class="dev-menu" v-if="!collapsed">
      <a-menu v-model:selectedKeys="selectedKeys">
        <a-menu-item key="base64">
          <router-link to="/">Base64</router-link>
        </a-menu-item>
        <a-menu-item key="json">
          <router-link to="/json">Json</router-link>
        </a-menu-item>
        <a-menu-item key="timestamp">
          <router-link to="/timestamp">时间戳</router-link>
        </a-menu-item>
        <a-menu-item key="random">
          <router-link to="/random">随机字符串</router-link>
        </a-menu-item>
        <a-menu-item key="imagebase64">
          <router-link to="/imagebase64">图片Base64</router-link>
        </a-menu-item>
        <a-menu-item key="qrcode">
          <router-link to="/qrcode">二维码</router-link>
        </a-menu-item>
        <a-menu-item key="imageprocess">
          <router-link to="/imageprocess">图片处理</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout class="dev-content" :style="{ marginLeft: marginLeft }">
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref, watch } from "vue";
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },

  setup() {
    return {
      selectedKeys: ref<string[]>(["4"]),
      collapsed: ref(false),
      marginLeft: ref('200px'),
    };
  },
  watch: {
    collapsed(value, oldValue) {
      if (value) {
        this.marginLeft = '0px'
      } else {
        this.marginLeft = '200px'
      }
    }
  }
});
</script>
<style scoped>
.ant-layout-sider {
  background: #fff;
}

.ant-menu-inline,
.ant-menu-vertical,
.ant-menu-vertical-left {
  border-right: none;
}

.dev-menu {
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 200px
}

.dev-content {
  margin-left: 200px;
  background: #fff;
  min-height: 100vh;
  overflow-x: auto;
  padding: 0px 50px;
}

.trigger {
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
}
.trigger:hover {
  color: #1890ff;
}
</style>
