<template>
      <div id="detalhes" class="container"> 
        <router-link to="/" ><img class="arrow" src="https://img.icons8.com/external-basicons-line-edtgraphics/50/000000/external-Left-arrows-basicons-line-edtgraphics.png"/></router-link>
        <div class="sec-title"><h1>Sobre o atendimento</h1></div>
          <div class="columns">   
             <div class="col-5"> 
               <form>         
                 <p id="txt-det">Detalhes do Atendimento</p>
                    <div id="especialidade-input" class="input-group-sm  mb-3 me-2">
                        <span>Especialidade principal*</span>
                        <select v-model.trim="$v.form.especialidade.$model" class="form-select" id="inputGroupSelect01">
                        <option value="">Selecione a especialidade</option>
                        <option v-for="especialidade in especialidades" ::key="especialidade.id" :value="especialidade.nome">{{especialidade.nome}}</option>
                        </select>
                        <span v-if="!$v.form.especialidade.required && $v.form.especialidade.$dirty" class="text-danger">Especialidade requerida</span>
                    </div>

                      <span class="info">informe o preço da sua consulta*</span>
                        <div id="valor" class="input-group w-75">
                            <span id="real" class="input-group-text">R$</span>
                            <input type="text" name="valor" class="form"
                            v-model.trim="$v.form.valor.$model"
                             placeholder="Valor" v-mask="['R$###,##']">
                             <span v-if="!$v.form.valor.required && $v.form.valor.$dirty" class="text-danger">Valor requerido</span>
                        </div>

                <div class="checkbox">
                    <div id="check" class="input-group mb-3">
                        <span class="formas">Formas de pagamento da consulta*</span>
                            <div id="dcheck" class="input-group-text w-100">
                                <input  class="form-check-input mt-0" type="checkbox" v-model="form.pagamentos" value="Pix"> <span class="span">Pix</span>
                            </div>       
                    </div>  

                      <div class="input-group mb-3">
                          <div id="dcheck" class="input-group-text w-100">
                              <input  class="form-check-input mt-0" type="checkbox" v-model="form.pagamentos" value="Em dinheiro"> <span class="span">Em dinheiro</span>
                          </div> 
                      </div>

                      <div class="cartao">
                            <input type="checkbox" v-model="form.pagamentos" value="Cartão de Crédito" class="box">
                            <label for="cartao"> <span>Cartão de Crédito</span> </label>
                          <ul>
                            <li><span>Parcelamento em</span></li>
                            <li> <input type="checkbox"><span> 1x, sem juros </span></li>
                            <li> <input type="checkbox"><span> 2x, sem juros </span></li>
                            <li> <input type="checkbox"><span> 3x, sem juros </span></li>
                          </ul>
                        </div>

                      
                </div>  
                <div class="pages">
                    <div class="progress" style="height: 20px; width: 200px; ">
                        <div class="progress-bar" role="progressbar" style="width: 100%; background-color: #483689;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="page">2 de 2</div>
                </div> 
           <router-link to="/revisão" >   <button @click="continuarDados"
           :disabled="!$v.form.valor.required ||
                      !$v.form.especialidade.required"
           type="submit">PRÓXIMO</button> </router-link>
                
                </form>
          </div>
                    <div id="img-2" class="col-6">
                            <div class="row"><img src="../assets/desktop-pagina-2.png" class="img-fluid" alt=""></div>
                    </div>
      </div>
      
  </div>
</template>
<script>
  import { required, between } from 'vuelidate/lib/validators';
    export default{
    data() {
        return {
          
          form: {
            valor: "",
            especialidade: "",
            pagamentos: []
          },
        
            especialidades: null
        };
    },
    validations:{
      form:{
        especialidade: {
          required
        },
        valor:{
          required,
          between: between(30,350)
        }

      }
    },
    methods: {
        async getEspecialidades() {
            const req = await fetch("https://api-teste-front-end-fc.herokuapp.com/especialidades");
            const data = await req.json();
            console.log(data);
            this.especialidades = data;
        },
        continuarDados(){
            let secdados = (localStorage.getItem("secdados")) ? JSON.parse(localStorage.getItem("secdados")) : [];
            secdados.push(this.form)
            localStorage.setItem("secdados", JSON.stringify(secdados))
        },
    },
    
    mounted() {
        this.getEspecialidades();
    },
    
}
</script>



<style scoped>

#detalhes{
  width: 50%;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  height: auto;
  border-radius: 10px;
  box-shadow: 1px 4px 15px rgb(110, 109, 109);
  margin-top: 50px;
  
}
.columns{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.sec-title{    
     margin-top: 30px;
     margin-left: 50px;
     font-weight: 500;
     color: #483689;
 }
 .sec-title h1{
     font-family: 'comfortaa';
     font-size: 30px;
 }
 #txt-det{
    font-weight: bold;
    margin-left: 50px
    }
.input-group-sm{
  margin-left: 50px;
}
#input-cartao{
  display: flex;
  flex-direction: column;
}
#valor{
  margin-left: 50px;
}
#valor .input-group-text{
  color: #FFFFFF;
  background-color: #483689;
}
.form{
    margin-left: 50px;
    outline: none;
    border-radius: 5px;
    border: 1px solid gainsboro;
    padding-left: 7px;
    font-size: 13px;
}
.span{
  margin-left: 25px;
  font-size: 13px;
}
span{
  font-size:13px;
  
}

#real{
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
#dcheck{
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

#dcheck input{
  cursor: pointer;
  box-shadow: none;
}

#dcheck input:checked{
  background-color: #483689;
  border: none;
}

.checkbox{
  margin-top: 15px;
  margin-left: 50px;
  
}
.info{
  margin-left: 50px;
}
.arrow{
  width: 20px;
  height: 20px;
  position: absolute;
  left: 340px;
  top: 5px;
}
.col-6 .row{
  width: 100%;
  height: 30%;
}
.col-6{
  display: flex;
  justify-content: center;
  align-items: center;
}
.col-5{
  width: 50%;
  
}
.progress{
    margin-top: 20px;
    margin-left: 50px;
}
.pages{
    display: flex;
    flex-direction: row;
    
}
.page{
    font-family: 'comfortaa';
    font-weight: bold;
    color: #483689;
    margin-left: 25px;
    margin-top: 20px;
}
button{
    margin-left: 50px;
    margin-top: 10px;
    background-color: #483689;
    border: none;
    width: 75%;
    border-radius: 15px;
    font-family: 'comfortaa';
    margin-bottom: 25px;
    color: #f9f9f9;
    height: 35px;
}
.error{
    border: 1px solid red;
}
.error-color{
    color: red;
}
.cartao{
  background-color: #e9ecef;
  border: 1px solid rgb(197, 204, 206);
  padding-left: 15px;
  border-radius: 5px;
  
}
.box{
  
  cursor: pointer;
}
.cartao label{
  margin-top: 11px;
  margin-left: 22px;
  
}
.cartao ul li input{
  cursor: pointer;
}

.cartao ul{
  list-style: none;
  overflow: hidden;
  max-height: 0;
  margin-left: 5px;
    }

.cartao  input:checked ~  ul{
      height: auto;
      max-height: 150px;
    }

  /* RESPONSIVIDADE */


    @media only screen and (max-width: 880px){
    #img-2{
          display: none;
        }
    #detalhes{
      width: auto;
      height: 100%;
      border-top-left-radius: 50px;
      border-top-right-radius: 50px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    #especialidade-input{
      width: 100%;
    }
    .sec-title{
      margin-left: 5px;
      margin-top: 15px;
    }
    h1{
      margin-top: 50px;
    }
    #txt-det{
      margin-left: 5px;
      margin-top: 15px;
    }
    .col-5{
      width: auto;
    }
    .input-group-sm{
  margin-left: 5px;
  
  }
  #valor{
  margin-left: 5px;
  
  
}
.form{
    margin-left: 5px;
    
}
.info{
  margin-left: 5px;
}
.checkbox{
  margin-left: 5px;
  
}
.arrow{
  left: 10px;
  top: 15px;
}
.box{
  
  bottom: 294px;
  right: 364px;
}
.progress{
  margin-left: 5px;
  
}
.pages{
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
}
.first-button button{
  margin-left: 0;
  width: 100%;
}
.first-button{
  width: 100%;
  margin-top: 25px;
}
.formas{
  margin-top: 15px;
  margin-bottom: 15px;  
}


    }

    

    
</style>
