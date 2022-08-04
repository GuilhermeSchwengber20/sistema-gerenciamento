<template>
  <div class="tabela-container">
    <div class="containerInserir">
      <div class="inserirText">
        <h2 style="font-size: 20px; margin-top: 20px; margin-bottom: 10px;">INSERIR NOVO ITEM NA TABELA</h2>
      </div>
      <div class="containerDados">
        <div class="dadosLinha">
          <input type="text"  id="inputDesc" placeholder="Descrição" v-model="content.descricao" required class="input"/>
          <input type="date" v-model="content.data"  style="border: 2px solid #c0edf6; color: #Fff" >
          <input type="text"  v-model="content.valor" id="inputValor" placeholder="Valor em R$" required class="input"/>
          <label>Tipo:&nbsp;</label>
          <select v-model="content.tipo" id="selecionar">
            <option value="selecione">Selecione</option>
            <option value="recebimento" for="selecionar">Recebimento</option>
            <option value="despesa" for="selecionar">Despesa</option>
          </select>
          <button id="buttonAdd" >
            <button @click="adicionarItem(content)" class="addbtn">Adicionar Novo Item</button>
          </button>
        </div>
      </div>
      <Tabela :items="items"/>
      <!-- <div class="containerResultados">
        <label>Despesas:</label>
        <input type="text" v-model="despesas"/>
        <label>Recebimentos:</label>
        <input type="text" v-model="recebimentos"/>
      </div> -->
    </div>
  </div>
</template>
<script>
import Tabela from "../components/Tabela.vue"
export default{
  name: "Gerenciar",
  components:{
    Tabela
  },
  data(){
    return{
      content: {
        id: 0,
        data: "",
        descricao: "",
        valor: "",
        tipo: "selecione",
      },
      despesas: "",
      recebimentos: "",
      items: [],

    }
  },
  methods: {
    async adicionarItem(item){

      const data = {
        descricao: item.descricao,
        data: item.data,
        valor: item.valor,
        tipo: item.tipo
      }
      this.items = data;

      const dataJSON = JSON.stringify(data);
      
      const req = await fetch("http://localhost:3001/items", {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: dataJSON
      });
      const res = await req.json();
      this.content = {};
      this.getLista();
    },
    calcular(item){
      if(item.tipo == 'despesa'){
        if(this.items.length == 1){
          this.despesas = item.valor;
        }else{
          this.despesas = Number(this.despesas) + Number(item.valor);
        }
      }
      if(item.tipo == 'recebimento'){
        if(this.items.length == 1){
          this.recebimentos = item.valor;
        }else{
          this.recebimentos = Number(this.recebimentos) + Number(item.valor);
        }
      }
    },
    async getLista( ){
      const req = await fetch("http://localhost:3001/items");
      const data = await req.json();
      this.items = data;      
    },

  },
  mounted(){
    this.getLista();
  }

  
  
}
</script>

<style scoped>
.tabela-container{
  width: 100%;
  height: 100vh;
  background: rgb(0,0,0);
  background: linear-gradient(6deg,  #048fad 1%,  #172026 20%);
  color:  #fff;
  font-size: 15px;
}
.containerInserir{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.containerDados{
  width: 100%;
  text-align: center;
}


.dadosLinha input{
  background: none;
  border: 2px solid  #c0edf6;
  transition: border-color 0.3s ease;
  border-radius: 5px;
  color: #fff;
  padding: 5px;
  margin-right: 10px;
  width: 100%;
  max-width: 230px;
}


.dadosLinha select{
  padding: 5px;
  width: 100%;
  max-width: 200px;
  margin-right: 10px;
  background: #172026;
  border: 2px solid #c0edf6;
  border-radius: 5px;
  color: #fff;
}


.dadosLinha .input:valid,
.dadosLinha .input:focus{
  border-color:  #5fcdd9;
  transition-delay: 0.1s;
}

button{
  outline: none;
  border: none;
  background: transparent;
}

.addbtn{
  background: transparent;
  color: #fff;
  font-weight: 400;
  font-size: 15px;
  text-transform: uppercase;
  padding: 5px 10px;
  border: 2px solid #5fcdd9;
  border-radius: 20px;
  transform: translate(0);
  overflow: hidden;
  cursor: pointer;
}


.addbtn:hover{
  border: none;
  color: #5fcdd9;
  transition: 0.3s ease-in;
}

</style>