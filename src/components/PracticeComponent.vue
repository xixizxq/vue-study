<template>
<div @click="clickTest">
    点击
</div>
</template>
<script>
export default{
    name : 'PracticeComponent',
    data(){
        return {
            count: 0
        }
    },
    methods:{
        clickTest(){
            this.count++;
            console.log(this.count);
            if(this.count === 3){
                this.$router.push('/first-compontent');
            }
        }
    }
}
</script>
<style>
</style>
