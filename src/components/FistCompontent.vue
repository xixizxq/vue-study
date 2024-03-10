<template>
  <div>
    <el-button style="float: left" type="primary" @click="addCard">主要按钮</el-button>
    <el-card style="margin-top: 10px" v-for="(card,index) in cards" class="box-card" :key="index">
      <div slot="header" class="clearfix">
        <span class="fontStyle">升级包内容</span>
        <el-radio-group v-model="card.radio">
          <el-radio :label="1">完整shell</el-radio>
          <el-radio :label="2">仅备份目标路径</el-radio>
        </el-radio-group>
        <span class="fontStyle">升级步骤标识：</span>
        <el-input size="small" style="width: 140px;float: left;" v-model="card.input" placeholder=""></el-input>
        <span class="fontStyle" style="padding-left:10px">升级步骤描述：</span>
        <el-input size="small" style="width: 140px;float: left;" placeholder=""></el-input>
        <el-button style="float: right; padding: 3px 0" type="text" v-if="isShow" @click="remove(card.id)"><i
            style="color: gray;font-size: 30px;" class="el-icon-remove-outline"></i></el-button>
      </div>

      <div v-show="card.radio===1" class="text item">
        <el-checkbox style="float: left;" :indeterminate="isIndeterminate" v-model="checkAll"
                     @change="handleCheckAllChange">全选
        </el-checkbox>
        <el-checkbox-group style="float: left;padding-left: 20px;" v-model="checkedCities"
                           @change="handleCheckedCitiesChange">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
        </el-checkbox-group>
      </div>
      <div v-show="card.radio === 2">
        <el-button @click="addInput(card)">默认按钮</el-button>
        <div style="display:flex;width: 1000px" v-for="(input,index1) in card.inputs" :key="index1">
          <span class="fontStyle">升级路径：</span>
          <el-input size="small" style="width: 140px;float: left;" v-model="input.input" placeholder=""></el-input>
          <el-button style="float: right; padding: 3px 0" type="text" v-if="card.isShowInput" @click="removeInput(card,input.id)">
            <i style="color: gray;font-size: 30px;" class="el-icon-remove-outline"></i></el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
const cityOptions = ['备份脚本', '升级脚本', '回滚脚本'];
export default {
  name: 'FistCompontent',
  data() {
    return {
      cards: [{id: 1, input: '', radio: 1, inputs: [{id: 1, input: ''}],isShowInput:false}],
      checkAll: false,
      checkedCities: ['备份脚本', '升级脚本'],
      cities: cityOptions,
      isIndeterminate: true,
      isShow: false

    }
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    },
    addCard() {
      this.cards.push({id: this.cards.length + 1, input: '', radio: 1, inputs: [{id: 1, input: ''}]})
      if (this.cards.length > 1) {
        this.isShow = true
      }
    },
    remove(val) {
      this.cards.forEach((card, index) => {
        if (card.id === val)
          this.cards.splice(index, 1)
      })
      if (this.cards.length === 1) {
        this.isShow = false
      }
      console.log(this.cards.length)
    },
    addInput(val) {
      console.log(val)
      val.inputs.push({id: val.inputs.length + 1, input: ''})
      if (val.inputs.length > 1) {
        val.isShowInput = true
      }
    },
    removeInput(card,inputId) {
      console.log(this.cards)
        card.inputs.forEach((input, index1) => {
          if (input.id === inputId)
            card.inputs.splice(index1, 1)
        })
        if (card.inputs.length === 1) {
          card.isShowInput = false
        }


    },
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

.radio1 {
  /* margin-left: 22px; */
  float: left;
  text-align: center;
  margin-top: 8px;
}

.inputOne {
  width: 150px;
}

.fontStyle {
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
