<template>
    <div class="professores">
      <TabelaMedia />
    </div>
  </template>
<script>
import TabelaMedia from '@/components/tabelaMedia.vue';
export default{
  components:{
    TabelaMedia
  }
}
</script>
<style scoped>
  *{
padding:0;
margin: 0;
box-sizing: border-box;
font-family: 'Inter',sans-serif;
}
.professores{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    flex-direction: column;
    text-decoration: none;
}
</style>
