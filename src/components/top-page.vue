<template>
    <div class="topo">
        <h1>{{ nameView[route.name] }}</h1>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()

const nameView = {
    home: 'Pagina Inicial',
    alunos: 'Alunos',
    professores: 'Professores',
    matricula: 'Matrícula'
}
</script>
<style scoped>
.topo{
    padding: 1rem 2rem;
    width: 100%;
    height: 15%;
    background: #1D8260;
    position: fixed;
    top: 0;
    right: 0;
    text-align:right;
    z-index: 9;
}
h1{
    font-size: 60px;
    font-weight: 700;
    color: #fff
}

@media(max-width:768px){
    .topo{
        height: 15%;
    }
    h1{
        font-size: 40px;
    }
}
</style>
