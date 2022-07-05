<template>
  <div>
    111
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request'
request.get('/home/index').then(res => {console.log(res)})
</script>

<style scoped>

</style>