<template>
  <div class="school">
    <h5>{{msg}}</h5>
    <h5>student name: {{name}} </h5>
    <h5>student age: {{myAge + 1}} </h5>
    <h5>student sex: {{sex}} </h5>
    <button @click="changeProps"> try to change prop</button>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
      console.log(this)
      return {
          msg: 'a person in shiyan',
          myAge: this.age
      }
    },
    // 简单声明接收
    props:['name', 'sex', 'age'],
    methods: {
      changeProps(){
        this.myAge++
      }
    },
    // 接收的同时对数据进行类型限制
    // props:{
    //   name: String,
    //   age: Number,
    //   sex: String
    // }

    // 接收的同时对数据进行类型限制、缺省限制
    // props:{
    //   name:{
    //     type: String,
    //     required:true
    //   },
    //   sex:{
    //     type: String,
    //     required: true
    //   },
    //   age:{
    //     type: Number,
    //     default:99
    //   }
    // }
}
</script>

<style>
    .school{
        background-color: aqua;
    }
</style>