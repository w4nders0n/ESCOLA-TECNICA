<template>
    <div class="lembrete">
        <h3>{{ titulo }}</h3>
        <p>{{ conteudo }}</p>
        <button @click="$emit('remover')">Remover</button>
    </div>    
</template>
<script>
    export default{
        name:'Lembrete',
        props:{
            titulo:{
                type: String,
                required: true
            },
            conteudo:{
                type: String,
                required: true
            }
        }
    };
</script>
<style scoped>
    .add-note-content{
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 150px;
        border: 1px solid #ddd;
        cursor: pointer;
    }
    .icon-plus{
        padding: 0 14px;
        border: 1px solid;
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
        outline: none;
        resize: none;
        border: none;
        background: transparent;
        font-size: 20px;
        width: 200px;
        height: 150px;
    }
    textarea::-webkit-scrollbar-thumb{
        border-radius: relative;
        background-color:#4b4453 ;
    }
    .item{
        position: relative;
        width: 200px;
        height: 150px;
    }
    .remove{
        position: absolute;
        right: 6px;
        cursor: pointer;
        color: #fff;
    }
</style>