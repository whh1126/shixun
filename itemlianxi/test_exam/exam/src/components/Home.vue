<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="试卷名称" prop="name">
        <p>
          <el-input v-model="ruleForm.name" class="one_inp"></el-input>
        </p>
      </el-form-item>
      <el-form-item label="考试类型" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择考试类型">
          <el-option label="周考一" value="shanghai"></el-option>
          <el-option label="周考二" value="beijing"></el-option>
          <el-option label="周考三" value="tianjing"></el-option>
          <el-option label="月考" value="nanjing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择课程" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择考试类型">
          <el-option label="HTML" value="shanghai"></el-option>
          <el-option label="CSS" value="beijing"></el-option>
          <el-option label="JavaScript" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="考试时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker placeholder="结束时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">创建试卷</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI, Form);
import { Form } from "element-ui";
export default {
  props: {},
  components: {},
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      input: "",
      rules: {
        name: [
          { required: true, message: "请输入考试名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择考试类型", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style>
.el-input {
  font-size: 16px !important;
  color: #606266;
}
.inp {
  width: 50%;
  border: solid 1px #000;
}
.el-input__inner, .one_inp{
    width:50%;
    margin-top:10px;
}
</style>