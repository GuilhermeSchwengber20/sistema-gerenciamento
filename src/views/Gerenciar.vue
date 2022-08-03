<template>
  <div class="tabela-container">
    <div class="containerInserir">
      <div class="inserirText">
        <h2>Inserir Novo Item A Tabela</h2>
      </div>
      <div class="containerDaddos">
        <div class="dadosLinha">
          <input type="text" placeholder="Descrição" id="inputDesc" v-model="content.descricao"/>
          <input type="date" v-model="content.data">
          <input type="text" placeholder="Valor em R$" v-model="content.valor"/>
          <label>Tipo:</label>
          <select v-model="content.tipo" id="selecionar">
            <option value="selecione">Selecione</option>
            <option value="recebimento" for="selecionar">Recebimento</option>
            <option value="despesa" for="selecionar">Despesa</option>
          </select>
          <button id="buttonAdd">
            <button @click="adicionarItem(content)">Adicionar Novo Item</button>
          </button>
        </div>
      </div>
      <Tabela :items="items"/>
      <div class="containerResultados">
        <label>Despesas:</label>
        <input type="text" v-model="despesas"/>
        <label>Recebimentos:</label>
        <input type="text" v-model="recebimentos"/>
    </div>
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
      items: [],
      despesas: "",
      recebimentos: "",

    }
  },
  methods: {
    async adicionarItem(item){
      console.log(item)

      this.items.push(item);
      this.content.descricao = "";
      this.content.valor = "";
      this.content.data = "",
      this.content.tipo = "",
      this.content.id ++;
      this.calcular(item);
      // const data = {
      //   descricao: item.descricao,
      //   data: item.data,
      //   valor: item.valor,
      //   tipo: item.tipo
      // }

      // const dataJSON = JSON.stringify(data);

      // const req = await fetch("http://localhost:3000/items", {
      //   method: "POST",
      //   headers:{"Content-Type": "application/json"},
      //   body: dataJSON
      // });
      // const res = await req.json();
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
    }
  }

  
  
}
</script>

<style scoped>
.tabela-container{
  width: 100%;
  height: 100vh;
}
.containerInserir{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.dadosLinha{
  white-space: nowrap;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.dadosLinha #inputDesc{
  width: 300px;
}
</style>