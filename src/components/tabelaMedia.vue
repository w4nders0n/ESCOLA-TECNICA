<template>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <div class="container">
        <div class="pesquisa">
            <input type="search" name="pesquisa" id="pesquisa" placeholder="Nome do aluno ..."><button class="btn-primary btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg></button>
        </div>

        <div class="materia-title">Inserir notas</div>
        <div class="contentx">
        <div class="content">
            <form action="#" method="post" class="form">
                <table class="table table-striped-columns">
                    <thead>
                        <th>sem</th>
                        <th>1ª Aval</th>
                        <th>2ª Aval</th>
                        <th>3ª Aval</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="sticky-col">1º</td>
                            <td><input type="number" id="notas" placeholder="1ª nota" min="0" max="10" step="1"></td>
                            <td><input type="number" id="notas" placeholder="2ª nota" min="0" max="10" step="1"></td>
                            <td><input type="number" id="notas" placeholder="3ª nota" min="0" max="10" step="1"></td>
                        </tr>
                        <tr>
                            <td class="sticky-col">2º</td>
                            <td><input type="number" id="notas" placeholder="1ª nota" min="0" max="10" step="1"></td>
                            <td><input type="number" id="notas" placeholder="2ª nota" min="0" max="10" step="1"></td>
                            <td><input type="number" id="notas" placeholder="3ª nota" min="0" max="10" step="1"></td>
                        </tr>
                        <tr>
                            <td class="sticky-col">3º</td>
                            <td><input type="number" id="notas" placeholder="1ª nota" min="0" max="10" step="1"></td>
                            <td><input type="number" id="notas" placeholder="2ª nota" min="0" max="10" step="1"></td>
                            <td><input type="number" id="notas" placeholder="3ª nota" min="0" max="10" step="1"></td>
                        </tr>
                        <tr>
                            <td class="sticky-col">4º</td>
                            <td><input type="number" id="notas" placeholder="1ª nota" min="0" max="10" step="1"></td>
                            <td><input type="number" id="notas" placeholder="2ª nota" min="0" max="10" step="1"></td>
                            <td><input type="number" id="notas" placeholder="3ª nota" min="0" max="10" step="1"></td>
                        </tr>
                    </tbody>
                  </table>
                  <div class="status">
                      <table class="table table-striped-columns">
                          <thead>
                          <th>Status</th>
                          </thead>
                          <tbody>
                              <tr>
                                  <td class="aprov" >Aprovado</td>
                              </tr>
                              <tr>
                                  <td class="aprov" >Reprovado</td>
                              </tr>
                              <tr>
                                  <td>Aprovado</td>
                              </tr>
                              <tr>
                                  <td>Aprovado</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
            </form>
            <button class="btn-primary btn">Enviar</button>
        </div>
        </div>
        
    </div>
</template>
<script>
export default{
    name: 'TabelaMedia',
    methods():{
        const base1 = periodo1;
        const 
    }
}
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
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    flex-direction: column;
}
.pesquisa{
    display: flex;
    width: 100%;
    padding: 30px;
    gap: 0px;
    align-items: center;
    justify-content: center;
}
#pesquisa{
    padding: 0.4rem 1rem;
    border: 1px solid #ddd;
    border-radius: 3px;
    background-color: #f5f5f5;
}
#pesquisa::placeholder{
    color: rgba(63, 63, 63, 0.507);
    font-weight: 600;
}
.pesquisa button{
    position: static;
    border-radius: 3px;
    background-color: #1D8260;
    border: none;
    padding: 7px 14px;
}
.pesquisa svg{
    fill: #fff;
}

.materia-title{
    text-align: center;
    font-weight:700;
    font-size:35px;
    font-family: 'Poppins';
    margin-bottom: 30px;
}
.contentx{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 500px;
    min-height: 350px;
    background-color: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 4px 8px #c3c3c3;
    border-radius:8px ;
}
.content{
    width: 100%;
    height: 100%;
    padding: 30px 15px;
    display: flex;
    position: relative;
}
.form{
    height: 15rem;
    width: 100%;
    display: flex;
 
}
.status{
    height: 100%;
}
.btn{
    position: absolute;
    bottom: 5px;
    left: 200px;
    right: 200px;
}

.table{
    width: 100%;
    height: 100%;
    text-align: center;
}
.table input{
    width: 70px;
    height: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #333;
    font-weight: 600;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button{
    -webkit-animation: none;
    margin: 0;
}

@media(max-width:768px){
    .contentx{
        width: 360px;
        height: 33rem;
        overflow-x:scroll ;
        padding-top: 0px;
    }
    .form{
        height: 25rem
    
    }
    .btn{
        left: 100px;
        right: 100px;
        bottom: 10px;
    }
}
</style>