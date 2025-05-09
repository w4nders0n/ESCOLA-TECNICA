<template>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <div class="container">
            <div class="pesquisa">
                <input type="search" class="form-control" id="pesquisa" placeholder="Nome do aluno ..."><button class="btn-primary btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg></button>
            </div>

            <h1>Inserir notas</h1>

            <div class="content">
                <div class="aluno-nome" v-if="alunoSelecionado">
                    <h4>Aluno: {{ alunoSelecionado.nome }}</h4>
                </div>
            <div class="tabela">
                <form action="#" method="post" class="form">
                    <table class="table table-striped-columns text center">
                        <thead>
                            <th>sem</th>
                            <th>1ª Aval</th>
                            <th>2ª Aval</th>
                            <th>3ª Aval</th>
                            <th>Status</th>
                        </thead>
                        <tbody>
                            <tr v-for="(aluno, index) in alunos" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>
                                    <input
                                    type="number"
                                    v-model.number="aluno.nota1"
                                    min="0"
                                    max="10"
                                    step="0.1"
                                    @input="validarNota($event, aluno, 'nota1')"
                                    placeholder="1ª Nota"/>
                                </td>
                                <td>
                                    <input
                                    type="number"
                                    v-model.number="aluno.nota2"
                                    min="0"
                                    max="10"
                                    step="0.1"
                                    @input="validarNota($event, aluno, 'nota2')"
                                    placeholder="2ª Nota"/>
                                </td>
                                <td>
                                    <input
                                    type="number"
                                    v-model.number="aluno.nota3"
                                    min="0"
                                    max="10"
                                    step="0.1"
                                    @input="validarNota($event, aluno, 'nota3')"
                                    placeholder="3ª Nota"/>
                                </td>
                                <td :class="statusClasse(aluno)">{{ statusTexto (aluno) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <button class="btn-primary btn">Enviar</button>
            </div>
        </div>   
        </div>
    </template>
<script>
export default{
    name: 'TabelaMedia',
    data(){
        return{
            alunoSelecionado: null,
            alunos:[
                {nota1: null, nota2: null, nota3: null},
                {nota1: null, nota2: null, nota3: null},
                {nota1: null, nota2: null, nota3: null},
                {nota1: null, nota2: null, nota3: null}
            ]
        };
    },
    methods:{
        validarNota(event, aluno, campo){
            let valor = parseFloat (event.target.value);
            if(isNaN(valor)){
                aluno[campo] = null;
            }else{
                aluno[campo]= parseFloat(Math.min(10, Math.max(0, valor)).toFixed(1))
            }
        },
        somaNotas(aluno){
            const notas = [aluno.nota1, aluno.nota2, aluno.nota3];
            return notas.every(n => n !== null && n !== '') ? notas.reduce((acc, val)=> acc + Number(val), 0) :null;
        },
        statusTexto(aluno){
            const total = this.somaNotas(aluno);
            if(total === null) return 'Cursando';
            if(total >=21) return 'Aprovado';
            return 'Reprovado';
        },
        statusClasse(aluno){
            const total = this.somaNotas(aluno);
            if(total === null) return 'Cursando';
            if(total >=21) return 'aprov';
            return 'reprov';
        }
    }
};
</script>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

*{
padding:0;
margin: 0;
box-sizing: border-box;
font-family: 'Inter',sans-serif;
}
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
}
.content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:80%;
    padding: 15px 15px;
    position: relative;
    height: 25rem;
    background-color: #f2f2f3;
    border-radius: 16px;
    border: 1px solid #ddd;
    box-shadow: 0px 4px 8px #d1d1d1;

    &{
        .pesquisa{
            display: flex;
            gap: 3px;
        }
        h1{
            font-weight: 700;
            font-family: 'Poppins';
            margin: 15px auto 30px;
        }
    }
}
.tabela{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    text-align: center;

    &{
        .btn{
            width: 200px;
        }
        .form{
            display: flex;
            margin: 0 auto;
            width:80%;
            background-color: #fff;

            &{
                input{
                    border: none;
                    font-weight: 700;
                    background: transparent;
                    color: #1b4332;
                    text-align: center;
                }
            }
        }
        .aprov{
            background-color: #c7f9cc;
            color: #1b4332;
            font-weight: bold;
        }
        .reprov{
            background-color: #ffccd5;
            color: #6b0103;
            font-weight: bold;
        }
        .cursando{
            background-color: #e9ecef;
            color: #6c757d;
            font-weight: bold;
        }

    }
}

@media(max-width:768px){
    .tabela{
        width:100%;
        height: auto;
        &{
            .form{
                overflow-x: scroll;
                width: 100%;
            }
            .btn{
                margin: 15px;
            }
        }
    }
}

</style>