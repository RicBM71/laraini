<template>
    <div>
         <v-date-picker v-model="picker"></v-date-picker>
    </div>
</template>

<script>
    export default {
    data () {
      return {
        picker: new Date().toISOString().substr(0, 10),
      }
    },
  }
</script>
