<template>
    <a-layout has-sider>
        <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }">
            <div class="logo" />
            <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
                <a-menu-item key="base64">
                    <router-link to="/">Base64</router-link>
                </a-menu-item>
                <a-menu-item key="json">
                    <router-link to="/json">Json</router-link>
                </a-menu-item>
                <a-menu-item key="timestamp">
                    <router-link to="/timestamp">时间戳</router-link>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout :style="{ marginLeft: '200px' }">
            <a-layout-header :style="{ background: '#fff', padding: 0 }" />
            <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '380px' }">
                <router-view></router-view>
            </a-layout-content>
            <!-- <a-layout-footer :style="{ textAlign: 'center' }">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer> -->
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
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
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
    },
    setup() {
        return {
            selectedKeys: ref<string[]>(['4']),
        };
    },
});
</script>
<style>
#components-layout-demo-fixed-sider .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
}

.site-layout .site-layout-background {
    background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
}
</style>
