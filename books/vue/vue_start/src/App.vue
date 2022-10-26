<template>
  <div>
    <Student name='lisi' sex='woman' :age='18' />
  </div>
</template>

<script>
    import Student from './components/Student.vue'

    export default {
        name: 'App',
        data() {
            return {
                msg: 'welcome to study',
            };
        },
        components: {
            Student
        },
    }
</script>

<style>

</style>