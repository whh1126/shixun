<template>
  <div>
    <p>
     用户名 <input type="text" />
    </p>
    <p>
      密码<input type="password" />
    </p>
    <button @click="Login">登录</button>
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
  methods: {
      Login(){
          // console.log(111)
      }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
</style>