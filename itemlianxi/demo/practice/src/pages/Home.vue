<template>
  <div>
    <h1>首页</h1>
    <button @click="add">+</button>
    <!-- <span>{{ getNum}}</span> -->
    <span>{{ count}}</span>
    <h2>{{sex}}</h2>
    <button @click="del">-</button>
    <div id="main">
    <mavon-editor v-model="value"/>
</div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    // 映射数据  mapGetters mapState

    // getNum() {
    //   return this.$store.state.count;
    // }
    ...mapState(["count"]),
    ...mapGetters({ sex: "getSex" })
    // ...mapState({ getNum: "count" })
  },
  methods: {
    //   映射方法 mapActions     mapMutations
    ...mapActions(["addAsync", "delAsync"]),
    // add(state) {
    //   state.count++;
    // },
    add() {
      //   this.$store.dispatch("addAsync");
      this.addAsync();
    },
    // del(state) {
    //   state.count--;
    // }
    del() {
      //   this.$store.dispatch("delAsync");
      this.delAsync("son");
    }
  },
  created() {
    console.log(this.$store.state.count);
  },
  mounted() {}
};
</script>
<style scoped lang="">
</style>