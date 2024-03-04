<template>
    <div>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
    <span class="fontStyle">升级包内容</span>
    <el-radio class="radio1" style="padding-left: 20px;" v-model="radio" label="1">完整shell</el-radio>
    <el-radio class="radio1" v-model="radio" label="2">仅备份目标路径</el-radio>

        <span class="fontStyle">升级步骤标识：</span>
        <el-input  size="small" style="width: 140px;float: left;" v-model="input" placeholder=""></el-input>

        <span class="fontStyle" style="padding-left:10px">升级步骤描述：</span>
        <el-input  size="small" style="width: 140px;float: left;" v-model="input" placeholder=""></el-input>


    <el-button style="float: right; padding: 3px 0" type="text"><i style="color: gray;font-size: 30px;" class="el-icon-circle-plus-outline"></i></el-button>
  </div>
  
  <div class="text item">
    <el-checkbox style="float: left;" :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <el-checkbox-group style="float: left;padding-left: 20px;" v-model="checkedCities" @change="handleCheckedCitiesChange">     
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
  </div>
</el-card>
    </div>
</template>
<script>
const cityOptions = ['备份脚本', '升级脚本', '回滚脚本'];
export default{
    name : 'FistCompontent',
    data(){
        return{
            checkAll: false,
            checkedCities: ['上海', '北京'],
            cities: cityOptions,
            isIndeterminate: true,
            radio: '1',
            input: ''

        }
    },
    methods:{
        handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
}
</script>
<style>
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
    text-align: left;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }
  .radio1{
    /* margin-left: 22px; */
    float: left;
    text-align: center;
    margin-top: 8px;
  }
  .inputOne{
    width: 150px;
  }
  .fontStyle{
    float: left;
    padding: 4px 0px;
    font-size: 14px;
    text-align: center;
    color: #606266;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
  }
</style>