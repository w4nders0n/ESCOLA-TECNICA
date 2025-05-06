<template>
    <div class="notas-container">
        <div class="nova-nota">
            <input v-model="novaNota" placeholder="Digite sua nota...">
            <div class="seletor-cores">
                <div v-for="(cor, index) in coresDisponiveis"
                :key="index"
                class="circulo-cor"
                :style="{backgroundColor: cor, border: cor === corSelecionada ? '3px solid #555': '1px solid #ccc'}"
                @click="corSelecionada = cor"
                ></div>
            </div>
            <button @click="adicionarNota">Adicionar</button>
        </div>
        <div class="notas-lista">
            <div v-for="(nota, index) in notas"
             :key="index"
             class="nota"
             :style="{backgroundColor: nota.cor}">
                <p>{{ nota.texto }}</p>
                <button @click="removerNota(index)">Remover</button>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: 'ElementoNotas',
    data(){
        return{
            novaNota: '',
            corSelecionada: '#ffd1dc',
            coresDisponiveis: [
                '#ffd1dc',
                '#c1f0f6',
                '#c3f7c0',
                '#fff4b3',
                '#e6d0f7',
                '#fcd5ce',
            ],
            notas: []
        };
    },
    created(){
        try{
            const notasSalvas = localStorage.getItem('minhasNotas');
            if(notasSalvas){
                this.notas = JSON.parse(notasSalvas);
                console.log('Notas carregadas do localStorege')
            }else{
                console.log('Nenhuma Nota encontrada no localStorege')
            }
        }catch (e){
            console.error('Erro ao carregar notas:',e)
        }
    },
    methods:{
        adicionarNota(){
            if(this.novaNota.trim()!== ''){
                this.notas.push({
                    texto: this.novaNota.trim(),
                    cor: this.corSelecionada
                });
                this.novaNota = '';
                this.salvarNotas();
            }
        },
        removerNota(index){
            this.notas.splice(index, 1);
            this.salvarNotas();
        },
        salvarNotas(){
            try{
                localStorage.setItem('minhasNotas', JSON.stringify(this.notas));
                console.log('Notas salvas:', this.notas);
            }catch (e){
                console.error('Erro ao salvar notas:', e);
            }
          }
        }
    }
</script>
<style scoped>
.seletor-cores{
    display: flex;
    gap: 10px;
    margin: 10px 0;
    flex-wrap: wrap;
}
.circulo-cor{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s;
}
.circulo-cor:hover{
    transform: scale(1.1);
}
    .nova-nota{
        display:flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;
    }
    .nova-nota input{
        width: 100%;
        max-width: 400px;
        padding: 8px;
    }
    .nova-nota button{
        background-color: #a7d6f5;
        border: none;
        padding: 8px 16px;
        cursor: pointer;
        color: #000;
        border-radius: 5px;
    }
    .notas-lista{
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
        gap: 15px
    }
    .nota{
        padding: 10px;
        border-radius: 5px;
        position: relative;
        word-wrap: break-word;
        min-height: 80px;
    }
    .nota button{
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: #ff6b6b;
        color: white;
        border: none;
        padding: 4px 8px;
        cursor: pointer;
        border-radius: 3px;
    }
</style>