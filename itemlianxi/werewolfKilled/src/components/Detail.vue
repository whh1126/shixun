<template>
  <div class="wrap">
    <header>
      <div class="left">
        <dl>
          <dt>
            <img src="../assets/title.jpg" alt />
          </dt>
          <dd>
            <h3>贝鱼爱吃猫</h3>
            <p>
              您的身份是
              <b class="people">法官</b>
            </p>
          </dd>
        </dl>
      </div>
      <div class="right">
        
      </div>
    </header>
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
<style scoped lang="">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  width: 100%;
  height: 44px;
  line-height: 44px;
  background: #000;
}
</style>