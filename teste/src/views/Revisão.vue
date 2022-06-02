<template>
<div id="revisao" class="container">
    <router-link to="/detalhes" ><img class="arrow" src="https://img.icons8.com/external-basicons-line-edtgraphics/50/000000/external-Left-arrows-basicons-line-edtgraphics.png"/></router-link>
            <div class="title"><h1>Revisão do Cadastro</h1></div>
                <div class="columns">
                        <div class="col-5">
                            <div v-for="(dado, index) in dados" :key="index" >
                                <span>Nome Completo</span>
                                <p>{{dado.name}}</p>
                                <span>CPF</span>
                                <p>{{dado.cpf}}</p>
                                <span>Telefone</span>
                                <p>{{dado.tel}}</p>
                                <span>Estado/Cidade</span>
                                <p>{{dado.estado}}-{{dado.cidade}}</p>
                            </div>
                            <div v-for="(secdado, index) in secdados" :key="index">
                                <span>Especialidade principal</span>
                                <p>{{secdado.especialidade}}</p>
                                <span>Preço da consulta</span>
                                <p>{{secdado.valor}}</p>
                                <span>formas de pagamento da consulta</span>
                                <p>{{secdado.pagamentos}}</p>


                            </div>
                            
                                

                            
                             
                        </div>
                            <div id="img-3" class="col-6">
                            <div class="row">
                                <img src="../assets/desktop-pagina-3.png" class="img-fluid" alt="">
                            </div>
                        </div>
           </div>
                        <div class="bttn">
                         <router-link to="/concluido" >  <button @click="excluir(dados, secdados, index)" type="button" class="btn btn-primary btn-lg">Cadastrar Profissional</button> </router-link>
                           <a @click="edit (index)" >Editar Cadastro</a>
                        </div>
                
        </div>


</template>

<script>

export default {
    name: 'Revisão',

    data() {
        return {
            dados: [],
            secdados: []
        }
    },


    created() {
        this.dados = (localStorage.getItem("dados")) ? JSON.parse(localStorage.getItem("dados")) : [];
        this.secdados = (localStorage.getItem("secdados")) ? JSON.parse(localStorage.getItem("secdados")) : [];
        
    },
    methods: {
        edit(index){
            this.$router.push({path: "/", params : {index}})
        }
    }
}


</script>


<style scoped>
    #revisao{
    display: flex;
    flex-direction: column;
    background-color: #f9f9f9;
    height: auto;
    width: 50%;
    border-radius: 10px;
    box-shadow: 1px 4px 15px rgb(110, 109, 109);
    margin-top: 50px;
}
 h1{
     font-family: 'comfortaa';
     color: #483689;
     margin-top: 25px;
     margin-left: 50px;
     font-size: 30px;
     font-weight: 500;
 }
 .col-5{
     display: flex;
     flex-direction: column;
     height: 100%;
 }
 span{
     margin-left: 50px;
     margin-top: 2px;
     font-weight: bold;
     font-size: 13px;
     font-family: 'open sans';
 }
 p{
     margin-left: 50px;
     font-size: 12px;
 }
.col-6{
     display: flex;
     align-items: center;
}
.columns{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.dados{
    margin-left: 50px;
    font-size: 13px;
}
.bttn{
    width: 50%;
    margin-left: 50px;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
}
.btn{
    width: 100%;
    background-color: #fbde40;
    border: none;
    font-family: 'comfortaa';
    text-transform: uppercase;
    color: #282828;
    font-size: 17px;
    font-weight: bold;
    height: 35px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    
}
a{
    font-family: 'comfortaa';
    color: #483689;
    text-decoration: none;
    font-weight: bold;
    margin-top: 20px;
}
.arrow{
  width: 20px;
  height: 20px;
  position: absolute;
  left: 340px;
  top: 5px;
  color: #FFFFFF;
}
.data{
    width:100px ;
    height:100px ;
    background-color: red;
}

/* RESPONSIVIDADE */

@media only screen and (max-width: 880px){
    #img-3{
          display: none;
        }
    #revisao{
        width: auto;
        height: 100%;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }
    h1{
        margin-left: 5px;
    }
    span{
        margin-top: 25px;
        margin-left: 5px;
    }
    .col-5{
        width: 100%;
    }
    .dados{
        margin-left: 5px;
    }
    .bttn{
        padding-bottom: 50px;
        width: 100%;
        margin-left: 5px;
    }
    .bttn button{
        display: flex;
        justify-content: center;
        margin-top: 20px;
        width: 100%;
    }
    a{
        margin-top: 25px;
    }
    .arrow{
  
        left: 10px;
        top: 15px;
  
}
    

}



</style>