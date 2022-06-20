<template>
    <a-layout class="layout">
        <a-layout-sider :style="{ height: '100vh' }">
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
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-content :style="{ background: '#fff', height: '100vh', marginLeft: '20px' }">
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
.layout {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 15px;
    margin-right: 25px;
}

.ant-layout-sider {
    background: #fff;
}

.ant-layout-header {
    background-color: aliceblue;
}
</style>
