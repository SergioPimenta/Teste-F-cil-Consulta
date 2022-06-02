<template>
    <div id="cadastro" class="container">
        <form>
      <div class="first-title"><h1>Sobre o Profissional</h1></div>
            <div class="columns">
                <div class="col-6"> 
                    <p id="txt2">Dados do Profissional</p>
                        <div id="name-input" class="input-group-sm flex-nowrap mb-3">
                            <span class="First-input">Nome completo*</span>
                            <input name="name"  type="text"
                            v-model.trim="$v.form.name.$model"
                             class="form w-100" 
                             placeholder="Digite o nome completo">
                            <span v-if="!$v.form.name.minLength || !$v.form.name.required 
                            && $v.form.name.$dirty" 
                            class="text-danger" >nome é requerido</span>

                        </div>
                        <span class="First-input">CPF*</span>
                        <div class="input-group-sm flex-nowrap mb-3">
                            <input  class="form w-50" name="cpf" 
                            v-model.trim="$v.form.cpf.$model"
                            placeholder="Digite um CPF"  v-mask="['###.###.###-##']">
                            <span v-if="!$v.form.cpf.minLength || !$v.form.cpf.required 
                            && $v.form.cpf.$dirty" class="text-danger">CPF Requerido</span>
                         </div>

                         <span class="First-input">Número de Celular*</span>
                        <div class="input-group-sm flex-nowrap">
                            <input type="tel"  class="form w-50"
                            v-model.trim="$v.form.tel.$model"
                             placeholder="(00) 00000-0000"  v-mask="['(##) ####-####'
                             , '(##) #####-####']">
                             <span v-if="!$v.form.tel.minLength || !$v.form.tel.required 
                            && $v.form.tel.$dirty" class="text-danger">Telefone requerido</span>
                        </div>

                        <div class="dropdown">
                            <div class="input-group-sm mb-3 w-50 me-2" >
                                <span>Estado*</span>
                                <select class="form-select" 
                                v-model.trim="$v.form.estado.$model"  id="inputGroupSelect01">
                                <option  value="">Selecione</option>
                                <option v-for="estado in estados" :key="estado.id" :value="estado.nome">{{estado.nome}}</option>
                                </select>
                                <span v-if="!$v.form.estado.required && $v.form.estado.$dirty" 
                                class="text-danger" id="error">Estado requerido</span>
                        </div>

                            <div  class="input-group-sm mb-3 w-50">
                                <span>Cidade*</span>
                                <select class="form-select" 
                                v-model.trim="$v.form.cidade.$model" 
                                  id="inputGroupSelect01">
                                <option value="">Selecione</option>
                                <option v-for="cidade in cidades" ::key="cidade.id" :value="cidade.nome">{{cidade.nome}}</option>
                                </select>
                                <span v-if="!$v.form.cidade.required && $v.form.cidade.$dirty" 
                                class="text-danger" id="error-2">Cidade requerida</span>
                            </div>
                        </div>
                        <div class="pages">
        <div class="progress" style="height: 20px; width: 200px; ">
            <div class="progress-bar" role="progressbar" style="width: 50%; background-color: #483689;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="page">1 de 2                     
        </div>
    </div>
            <router-link to="/detalhes" >  <button @click="salvarDados" 
            :disabled="!$v.form.cpf.required 
            || !$v.form.cpf.minLength ||
               !$v.form.name.minLength  ||
               !$v.form.name.required ||
               !$v.form.tel.minLength || 
               !$v.form.tel.required  ||
               !$v.form.estado.required ||
               !$v.form.cidade.required" 
            type="submit">PRÓXIMO</button> </router-link>
                </div>
                
                    <div id="img1" class="col-6">
                            <div class="row">
                                <img src="../assets/desktop-pagina-1.png" class="img-fluid" alt="">
                            </div>
                        </div>
                    
                </div>
</form>
    </div>
    
</template>

<script>
import {required, minLength, maxLength} from 'vuelidate/lib/validators'
    export default {
        name:'HomeView',
         data(){
        return{
            form: {
                name:'',
                cpf:'',
                tel:'',
                estado:"",
                cidade:"",
                
            },
                estados: "",
                cidades: "",
                methodSave: "new"
            
        }  
    },  
    validations:{
        form: {
            name:{
                required,
                minLength: minLength(3),
                maxLength: maxLength(56)
            },
            cpf:{
                required,
                minLength: minLength(14)
            },
            tel:{
                required,
                minLength: minLength(15)
            },
            estado: {
                required
            },
            cidade:{
                required
            }
        }
    },
    methods: {
        async getEstados() {
            const req = await fetch("https://api-teste-front-end-fc.herokuapp.com/estados");
            const data = await req.json();
            this.estados = data;
        },
        async getCidades() {
            const req = await fetch("https://api-teste-front-end-fc.herokuapp.com/cidades");
            const data = await req.json();
            this.cidades = data;
        },
        salvarDados(){
            let dados = (localStorage.getItem("dados")) ? JSON.parse(localStorage.getItem("dados")) : [];
            dados.push(this.form)
            localStorage.setItem("dados", JSON.stringify(dados))
        }
    },
    created() {
        if(this.$route.params.index === 0 || this.$route.params.index !== undefined){
            this.methodSave ="update"
        }
    },
    
    mounted() {
        this.getEstados();
        this.getCidades();
        
    },
    

};



</script>

<style scoped>
#cadastro{
    display: flex;
    flex-direction: column;
}
.container{
    background-color: #f9f9f9;
    height: auto;
    width: 50%;
    border-radius: 10px;
    box-shadow: 1px 4px 15px rgb(110, 109, 109);
    margin-top: 50px;
    display: flex;
    flex-direction: row;
}
.columns{
    display: flex;
    flex-direction: row;
}
#error{
    margin-left: 0;
}
#error-2{
    margin-left: 0;
}
.first-title{    
     margin-top: 25px;
     margin-left: 50px;
     font-weight: 500;
     color: #483689;
 }
 .first-title h1{
     font-family: 'comfortaa';
     font-size: 30px;
 }
#txt2{
    
    font-weight: bold;
    margin-left: 50px
    }

.form{
    margin-left: 50px;
    outline: none;
    border-radius: 5px;
    border: 1px solid gainsboro;
    padding-left: 7px;
    font-size: 13px;
    height: 30px;
    }
.First-input{
    font-size: 13px;
    margin-left: 50px;
    }
#name-input{
    width: 75%;
}
#img1{
    display: flex;
    align-items: center;
    justify-content: center;
    }

.dropdown{
    display: flex;
    margin-left: 50px;
    margin-top: 25px;
}
.dropdown .input-group-sm .form-select{
    box-shadow: none;
    text-decoration: none;
    outline: none;
}
.dropdown .input-group-sm .form-select:checked{
    border: none;
}
 span{
    font-size: 13px;
    
}
.input-group-sm{
    display: flex;
    flex-direction: column;
}
.progress{
    margin-top: 20px;
    margin-left: 50px;
}

button{
    margin-left: 50px;
    margin-top: 10px;
    background-color: #483689;
    border: none;
    width: 75%;
    height: 35px ;
    
    border-radius: 15px;
    margin-bottom: 25px;
    font-family: 'Comfortaa';
    color: #f9f9f9;
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
#link{
    text-decoration: none;
}
.text-danger{
    margin-left: 50px;
}

/* RESPONSIVIDADE */

@media only screen and (max-width: 880px){
    #img1{
        display: none;
    }

    .col-6{
        width: 100%;
    }
    .first-title{
        
        margin-top: 50px;
        margin-left: 5px;
    }
    #txt2{
        
        margin-left: 5px;
    }
    .form{
        margin-left: 5px;
        
    }
    .First-input{
    margin-left: 5px;
    
    }
    .dropdown{
        margin-left: 5px;
        
    }
    .progress{
        margin-left: 5px;
        
    }
    .pages{
        display: flex;
        justify-content: space-between;
    }

    .container{
        width: auto;  
        height: 100%;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }
    #first-btn{
        margin-left: 5px;
        width: 100%;
    }
    .first-button{
        margin-top: 15px;
    }
    #name-input{
    width: 100%;
}

    


}


</style>