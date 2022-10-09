<template>
  <div>
    <button @click="onShowShareMenu">显示分享</button>
    <br />
    <br />
    <button @click="onUpdateShareMenu">更新分享信息</button>
    <br />
    <br />
    <button @click="onHideShareMenu">隐藏分享</button>
  </div>
</template>

<script>
import { hideShareMenu, showShareMenu, updateShareMenu } from "./utils/webviewSdk";

export default {
  data() {
    return {
      name: "Vue",
    };
  },
  methods: {
    onUpdateShareMenu() {
      const randomNumber = parseInt(Math.random() * 10000);
      updateShareMenu({
        title: "分享标题" + randomNumber,
        desc: "分享描述" + randomNumber,
      });
    },
    onShowShareMenu() {
      showShareMenu()
    },
    onHideShareMenu() {
      hideShareMenu();
    },
  },
};
</script>
