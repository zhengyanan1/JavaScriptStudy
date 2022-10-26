<template>
  <div>
    <h5 v-text="msg" ref="title"></h5>
    <button @click="showDOM" ref="btn">click me to show the element in the above</button>
    <School ref="sch"/>
  </div>
</template>

<script>
    import School from './components/School.vue'

    export default {
        name: 'App',
        data() {
            return {
                msg: 'welcome to study',
            };
        },
        components: {
            School
        },
        methods: {
            showDOM(){
                console.log(this.$refs.title)
                console.log(this.$refs.btn)
                console.log(this.$refs.sch)

            }
        },
    }
</script>

<style>

</style>