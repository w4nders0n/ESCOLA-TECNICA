<template>
  <div class="container">
    <header>
      <topopage/>
     <button class="menu" @click="tooglePainel" v-if="ehMobile">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
          </svg>
        </span>
      </button>
    </header>
    <section>
      <PainelNav v-if="mostrarPainel || !ehMobile" @fechar-painel="mostrarPainel = false" :class="{ativo : ehMobile}" />
    </section>
    <section class="content">
      <router-view/>
    </section>
  </div>
</template>
<script>
import PainelNav from '@/components/painel-nav.vue';
import topopage from '@/components/top-page.vue';
import router from './router';


  export default{
    name: 'App',
    components:{
      PainelNav,
      topopage
    },
    data(){
      return{
        ehMobile: window.innerWidth <= 768,
        mostrarPainel: false
      }
    },
    methods:{
      tooglePainel(){
        this.mostrarPainel = !this.mostrarPainel
      },
      checarSeEhMobile() {
       this.ehMobile = window.innerWidth <=768
      },
      mounted(){
        window.addEventListener('resize', checarSeEhMobile)
      },
      beforeUmount(){
        window.removeEventListener('resize', checarSeEhMobile)
      }
    }
  }
</script>
<style>


*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Inter",sans-serif;
  font-size: 16px;
}
body{
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  background-image: radial-gradient(#333 0.5px,transparent 0.725px);
  background-size: 10px 10px;
  position: relative;
}
.menu{
  width: 50px;
  height: 50px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 30px;
  left: 30px;
  background: #fff;
  border: none;
  border-radius: 8px;
  z-index: 10;
  box-shadow: 0px 3px 0px #ddd; 
}
svg{
  fill:#333;
  width: 25px;
  height: 25px;
}
.content{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  height: 85%;
  background:transparent;
  position: absolute;
  right: 0;
  bottom:0;
  z-index:0;
  padding: 30px;
}

@media(max-width:768px){
  .content{
    width: 100%;
  }
}

</style>