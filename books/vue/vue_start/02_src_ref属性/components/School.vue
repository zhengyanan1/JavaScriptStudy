<template>
  <div class="school">
    <h5>school name: {{name}} </h5>
    <h5>school address: {{address}} </h5>
  </div>
</template>

<script>
export default {
    name: 'School',
     data() {
        return {
            name: 'yunyang',
            address: 'shiyan'
        }
     },
}
</script>

<style>
    .school{
        background-color: aqua;
    }
</style>