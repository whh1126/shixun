<template>
  <div class="wrap">
    <header>
  
      <dl>
        <dt>
          <img src="../../assets/title.jpg" alt />
        </dt>
        <dd>
          <p>贝鱼爱吃猫</p>
          <span>
            您的身份是
            <b class="people">法官</b>
          </span>
        </dd>
      </dl>
    </header>
    <section> 
      <div class="content">
        <h3>游戏流程</h3>
        <div>
          <p>我也是一个好人</p>
          <p>我为什么怀疑肖战呢, 其实，这也可能是非常不专</p>
          <p>因为我闭眼的时候我看到我眼前有影子</p>
          <p>过来的，没有其实警察都</p>
        </div>
        <div>
          <p>我也是一个好人</p>
          <p>我为什么怀疑肖战呢, 其实，这也可能是非常不专</p>
          <p>因为我闭眼的时候我看到我眼前有影子</p>
          <p>过来的，没有其实警察都</p>
          <p>我也是一个好人</p>
          <p>我为什么怀疑肖战呢, 其实，这也可能是非常不专</p>
          <p>我也是一个好人</p>
        </div>
      </div>
    </section>
    <footer>
      <ul>
        <li>
          <img src="../../assets/title.jpg" alt />
          <p>贝鱼爱</p>
          <h4>平民</h4>
        </li>
        <li>
          <img src="../../assets/title.jpg" alt />
          <p>贝鱼爱</p>
          <h4>平民</h4>
        </li>
        <li>
          <img src="../../assets/title.jpg" alt />
          <p>贝鱼爱</p>
          <h4>平民</h4>
        </li>
        <li>
          <img src="../../assets/title.jpg" alt />
          <p>贝鱼爱</p>
          <h4>平民</h4>
        </li>
        <li>
          <img src="../../assets/title.jpg" alt />
          <p>贝鱼爱</p>
          <h4>平民</h4> 
        </li>
        <li>
          <img src="../../assets/title.jpg" alt />
          <p>贝鱼爱</p>
          <h4>平民</h4>
        </li>
        <li>
          <img src="../../assets/title.jpg" alt />
          <p>贝鱼爱</p>
          <h4>平民</h4>
        </li>
        <li>
          <img src="../../assets/title.jpg" alt />
          <p>贝鱼爱</p>
          <h4>平民</h4>
        </li>
        <li>
          <img src="../../assets/title.jpg" alt />
          <p>贝鱼爱</p>
          <h4>平民</h4>
        </li>
        <li>
          <img src="../../assets/title.jpg" alt />
          <p>贝鱼爱</p>
          <h4>平民</h4>
        </li>
        <li>
          <img src="../../assets/title.jpg" alt />
          <p>贝鱼爱</p>
          <h4>平民</h4>
        </li>
        <li>
          <img src="../../assets/title.jpg" alt />
          <p>贝鱼爱</p>
          <h4>平民</h4>
          <span>2222</span>
        </li>
      </ul>
    </footer>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  width: 100%; 
  height: 50px;
  line-height: 50px;
  align-items: center;
}
header dl {
  height: 100%;
  display: flex;
}
.left {
  width: 50%;
  display: flex;
}
dl {
  width: 100%;
  height: 30px;
  display: flex;
}
.people {
  color: #fff;
  padding: 3px;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  background: blue;
}
dt img {
  width: 100%;
}
dt p {
  margin-top: 10px;
}
section {
  width: 100%;
  flex: 1;
  overflow: hidden;
}
section .content {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 6px;
  box-sizing: border-box;
}
.content h3 {
  text-align: center;
  margin-top:10px;
}
.content > div p {
  padding: 3px;
  box-sizing: border-box;
}
.last {
  width: 100%;
  display: flex;
}
footer {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  box-sizing: border-box;
}
ul li {
  width: 15%;
  text-align: center;
}
ul li img {
  text-align: center;
}
</style> 