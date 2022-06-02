<template>
    <div id="concluido" class="container">
    <router-link to="/revisão" ><img class="arrow"  src="https://img.icons8.com/external-basicons-line-edtgraphics/50/000000/external-Left-arrows-basicons-line-edtgraphics.png"/></router-link>
        <h1 class="title-1">Cadastro Concluído</h1>
        <p class="title-2">Seus dados foram cadastrados com sucesso</p>

       <div  class="circle"> <div class="okay"></div> </div>
        
    </div>
    

</template>

<script>


</script>


<style>
#concluido{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9f9f9;
    height: 550px;
    width: 50%;
    border-radius: 10px;
    box-shadow: 1px 4px 15px rgb(110, 109, 109);
    margin-top: 50px;
}
.title-1{
    font-family: 'comfortaa';
    color: #483689;
    margin-top: 40px;
}
.title-2{
    font-family: 'open sans';
    font-weight: bold;
}
.arrow{
  width: 20px;
  height: 20px;
  position: absolute;
  left: 340px;
  top: 5px; 
}
.okay{
    width: 10px;
    height: 30px;
    background-color: #483689;
    transform: rotate(-45deg);
    position: absolute;
    top: 50%;
    left: 28%;
    
}
.okay:before{
    content: '';
    position: absolute;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    background-color: #483689;
    top: -50%;
    width: 10px;
    height: 50px; 
}
.okay:after{
    content: '';
    position: absolute;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    background-color: #483689;
    right: -400%;
    top: -20%;
    width: 10px;
    height: 90px;
    transform: rotate(90deg);
}
.circle{
    width: 150px;
    height: 150px;
    border: 3px solid #483689;
    border-radius: 50%;
    position: relative;
    margin-top: 50px;
    }

/* RESPONSIVIDADE */

@media only screen and (max-width: 880px){
    
    #concluido{
        width: 100%;
    }
    .arrow{
  left: 10px;
  top: 15px;
}

}

</style>