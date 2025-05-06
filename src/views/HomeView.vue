<template>
  <div class="home">
    <ElementoNotas/>
  </div>
</template>

<script>
import ElementoNotas from '@/components/ElementoNotas.vue';

export default {
  name: 'HomeView',
  components: {
    ElementoNotas
  }
}
</script>
<style scoped>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter',sans-serif;
  }
  .home{
    padding: 10px;
    width: 100%;
    height: 100%;
  }
  .container{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .addNote-content{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #ddd;
    width: 220px;
    height: 200px;
    cursor: pointer;
  }
  .icon-plus{
    padding: 5px 14px;
    border:1px solid;
    width: fit-content;
    border-radius: 50%;
    font-size: xx-large;
  }
  .content{
    display: contents;
  }
  textarea{
    padding: 5px;
    padding-top: 14px;
    outline:none;
    resize: none;
    border:none;
    background-color: transparent;
    font-size: 20px;
    width: 200px;
    height: 150px;
  }
  textarea::-webkit-scrollbar{
    width: 4px;
  }
  textarea::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background: #4b4453;
  }
  .item{
    position: relative;
    width: 200px;
    height: 150px;
  }
  .remove{
    position: abxolute;
    right: 6px;
    cursor: pointer;
    color: #fff;
  }
</style>
