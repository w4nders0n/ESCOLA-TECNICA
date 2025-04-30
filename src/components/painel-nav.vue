<template>
    <section name="painel" class="painel-nav" v-show="!ehMobile || painelAberto" :class="{ativo: painelVisivel}" >
        <header class="title">
            <span class="logo"><img src="../../src/assets/logo.png" ></span>
            Esc. Técnica de Saúde
        </header>
        <div class="pages">
            <div class="pages-group">
                <router-link to="/home" class="page-btn" @click="navegar">
                    <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-line-fill" viewBox="0 0 16 16">
                            <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z"/>
                          </svg></span>
                    <span class="button-text">Home</span>
                </router-link>
                <router-link to="/alunos" class="page-btn" @click="navegar">
                        <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                          </svg></span>
                    <span class="button-text">Alunos</span>
                </router-link>
                <router-link to="/professores" class="page-btn" @click="navegar">
                        <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16">
                            <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                            <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"/>
                          </svg></span>
                    <span class="button-text">Professores</span>
                </router-link>
                <router-link to="/matricula" class="page-btn" @click="navegar">
                    <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"/>
                      </svg></span>
                    <span class="button-text">Matricula</span>
                </router-link>
            </div>
        </div>
        <footer>
            <button class="config">
                <span onclick="config()"><img src="../../src/assets/gear.svg"></span>
                Configurações
            </button>
        </footer>
    </section>
</template>

<script >
    export default {
        name: 'PainelNav',
        methods:{
            navegar(){
                this.$emit('fechar-painel');
            }
        }

    }
</script>
<style >
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.painel-nav{
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content:start;
    position: fixed;
    left: 0;
    width: 25%;
    height: 100%;
    padding: 30px 30px;
    background: #dadada;
    border-right:1px solid #dddddd8a;
    font-family: 'Inter',sans-serif;
    box-shadow: 0 3px 3px 0.125px #000000c1;
    z-index: 10;
}
.painel-nav header{
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    font-family: "Poppins",sans-serif;
    margin-top: 0;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
}
.logo img{
    max-width: 80px;
}
.pages{
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
}
.pages-group{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
    align-items: left;
    justify-content: space-around;
}
svg{
    fill: #282936;
}
.page-btn{
    display:flex;
    cursor: pointer;
    outline: none;
    border: none;
    border-left: 5px solid #1D8260;
    align-items: center;
    text-decoration: none;
    background: transparent;
    padding: 0.4rem 1rem;
    text-decoration: none;
    transition:  background-color 0.4s ease;
    &:hover {
        background-color: #1D8260;
        .button-text{
            color: #dadada;
        }
        svg{
            fill: #fff;
        }
    }
}
.button-text{
    margin-left: 30px;
    color: #282936;
    font-weight: 700;
    text-align: center;
}
.config{
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0.4rem 1rem;
    border:none;
    border-left: 4px solid #282936;
    gap: 20px;
    cursor:pointer;
}


 

@media (max-width:768px) {
  .painel-nav{
    width: 100%;
  }
}
</style>