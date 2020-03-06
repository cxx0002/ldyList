<template>
  <div class="ldy" @click="downLoad">
    <div class="center bg">
      <div class="top">
        <img src="../assets/img/logo2.png" />
      </div>
      <div class="content">
        <img src="../assets/img/c1.png" />
      </div>
      <p class="title-p">真正不花钱的小说阅读器大全</p>
      <div class="btn-wrapper">
        <a class="button"></a>
      </div>
      <div class="bottom">
        <img src="../assets/img/s1.png" />
      </div>
    </div>
  </div>
</template>
<script>
import { host, zyAndroidUrl, zyIosUrl, ydqUrl, scUrl, kxsUrl } from "@/const";
export default {
  name: "Ldy",
  mounted() {
    setTimeout(() => {
      // this.downLoad();
    }, 3000);
  },
  methods: {
    downLoad() {
      window.location.href = "https://www.baidu.com/";
    }
  }
};
</script>
<style scoped>
.ldy {
  height: 100%;
}
.bg {
  background: url("../assets/img/bg1.jpg") no-repeat;
  background-size: cover;
  height: 100%;
}
.top > img {
  margin-top: 15%;
  margin-left: 20%;
  margin-bottom: 10%;
  width: 60%;
}
.content img {
  width: 90%;
  margin-left: 5%;
}
.btn-wrapper .button {
  height: 120px;
  width: 400px;
  display: block;
  background: url("../assets/img/btn1.png") no-repeat;
  margin: 0 auto;
  background-size: 100%;
  margin-bottom: 5%;
}
.title-p {
  font-size: 30px;
  color: #6c3913;
  text-align: center;
  line-height: 100px;
}
.bottom img {
  display: block;
  margin: auto;
  width: 80%;
  margin-top: 5%;
}
</style>