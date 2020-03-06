<template>
  <div class="kxs">
    <div class="header"></div>
    <div class="mian">
      <div class="mian_head">
        <img src="../assets/img/book.png" alt />
        <div>
          <b>从前有座灵剑山</b>
          <p>
            <span>作者：</span>国王陛下
          </p>
          <p>
            <span>状态：</span>完结
          </p>
          <p>
            <span>章节：</span>共392章
          </p>
        </div>
      </div>
      <div class="mian_content">
        <p>简介：灵剑派成立于九州历四二三三年，几千年来始终致力于为行业提供一流的修仙人才，如今位列万仙盟五大超品宗派之一，掌门风吟真人担任万仙盟七大常务长老，修为盖世。灵剑派坚持和平与发展的主题，门派核心价值理念是求真、求善、求种。为进一步扩充门派力量，补充新鲜血液，拟于近期召开升仙大会，诚邀各路精英前来。</p>
      </div>
    </div>
    <div class="btn">免费阅读全本</div>
    <div class="fresh"></div>
    <div class="bookList">
      <p>全站小说免费看</p>
      <div class="bookList_detail">
        <div v-for="(item,key) in bookList" :key="key">
          <img :src="item.img" alt />
          <span>{{item.title}}</span>
        </div>
      </div>
    </div>
    <div class="fixed">
      <div>立即下载</div>
    </div>
  </div>
</template>
<script>
import dldl from "@/assets/img/dldl.jpg";
import qyn from "@/assets/img/qyn.jpg";
import wgsd from "@/assets/img/wd.jpg";
import fts from "@/assets/img/fts.jpg";
import aa from "@/assets/img/aa.jpg";
import db from "@/assets/img/db.jpg";
import sx from "@/assets/img/sx.jpg";
import dpcq from "@/assets/img/dpcq.jpg";
import {host,kxsUrl} from '@/const'
export default {
  name: "Kxs",
  data() {
    return {
      bookList: [
        { img: dldl, title: "斗罗大陆IV终极斗罗" },
        { img: qyn, title: "庆余年" },
        { img: wgsd, title: "万古神帝" },
        { img: fts, title: "伏天氏" },
        { img: aa, title: "仙王的日常生活" },
        { img: db, title: "帝霸" },
        { img: sx, title: "圣墟" },
        { img: dpcq, title: "斗破苍穹" },
      ]
    };
  },
  created(){
    // if(window.location.hash.split('?')[1]){
    
    // }else{
    //    this.$router.push({
    //     name: "Index",
    //     params: {}
    //   });
    // }
  },
  mounted() {
  },
  methods: {}
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 308px;
  background: url("../assets/img/kxs.png");
  background-size: contain;
}
.mian {
  width: 100%;
  background: #fff;
  border-radius: 24px 24px 0px 0px;
  padding: 44px 0;
  z-index: 100;
  margin-top: -30px;
}
.mian_head {
  padding: 0 44px;
  display: flex;
}
.mian_head > img {
  width: 186px;
  height: 248px;
  margin-right: 34px;
}
.mian_head > div b {
  font-size: 36px;
  font-weight: bold;
  color: rgba(20, 20, 24, 1);
  line-height: 72px;
}
.mian_head > div > p {
  font-size: 28px;
  font-weight: 500;
  color: #1e1e1e;
  line-height: 50px;
}
.mian_head > div > p > span {
  color: rgba(151, 151, 151, 1);
}
.mian_content {
  padding: 0 44px;
}
.mian_content p {
  font-size: 26px;
  font-weight: 500;
  color: rgba(107, 107, 107, 1);
  line-height: 36px;
}
.btn {
  width: 486px;
  height: 86px;
  background: linear-gradient(
    0deg,
    rgba(236, 46, 35, 1) 0%,
    rgba(222, 28, 49, 1) 100%
  );
  border-radius: 43px;
  line-height: 86px;
  color: #fff;
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  margin: 0 auto 44px;
}
.fresh {
  background: #f7f4f8;
  height: 10px;
}
.bookList {
  padding: 0 44px;
}
.bookList > p {
  font-size: 34px;
  font-weight: bold;
  color: rgba(20, 20, 24, 1);
  line-height: 100px;
}
.bookList_detail {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 200px;
}
.bookList_detail div {
  width: 22%;
  margin-bottom: 38px;
}
.bookList_detail div img {
  width: 154px;
  height: 206px;
  margin-bottom: 15px;
}
.bookList_detail > div > span {
  font-size: 26px;
  font-weight: 500;
  color: rgba(36, 36, 36, 1);
  line-height: 35px;
}
.fixed {
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  background: #fff;
  padding: 20px 0;box-shadow:0px 1px 10px 1px rgba(0, 0, 0, 0.05);
}
.fixed div {
  width: 686px;
  height: 86px;
  background: linear-gradient(
    0deg,
    rgba(236, 46, 35, 1) 0%,
    rgba(222, 28, 49, 1) 100%
  );
  border-radius: 43px;

  margin: 0 auto;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 86px;
}
</style>