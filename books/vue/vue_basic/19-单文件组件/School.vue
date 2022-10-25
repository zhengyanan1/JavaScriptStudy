<template>
    <!-- 组件结构 -->
    <div class="demo">
        <h5>school name: {{schoolName}}</h5>
        <h5>school address: {{address}}</h5>
        <button @click='showName'>click me to show school name</button>
    </div>
</template>

<script>
    // 组件交互的相关代码
    export default {
        name: 'School',
        data(){
            return {
                schoolName: 'yunyang',
                address:'shiyan',
            }
        },
        methods: {
            showName(){
                alert(this.schoolName)
            }
        }
    }
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color: bisque;
    }
</style>