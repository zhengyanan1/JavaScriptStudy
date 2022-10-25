<template>
    <!-- 组件结构 -->
    <div class="demo">
        <h5>student name: {{name}}</h5>
        <h5>student age: {{age}}</h5>
    </div>
</template>

<script>
    // 组件交互的相关代码
    export default {
        name: 'Student',
        data(){
            return {
                name: 'harden',
                age:'29',
            }
        },
        methods: {
            showName(){
                alert(this.name)
            }
        }
    }
</script>