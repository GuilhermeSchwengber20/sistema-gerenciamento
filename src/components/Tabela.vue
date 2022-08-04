<template>
    <div id="containerTabela">
        <div class="tableContainer">
            <table id="table">
                <thead>
                    <tr>
                        <td>ID:</td>
                        <td>DATA:</td>
                        <td>DESCRIÇÃO</td>
                        <td>VALOR</td>
                        <td>TIPO</td>
                        <td>AÇÃO</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in items" :key="index">
                        <td :class="item.tipo == 'recebimento' ? 'green' : 'red'">{{item.id}}</td>
                        <td class="item-data">{{item.data.split("-").reverse().join("/")}}</td>
                        <td class="item-desc">{{item.descricao}}</td>
                        <td class="item-valor">R$&nbsp;{{item.valor}}</td>
                        <td ><span :class="item.tipo == 'recebimento' ? 'recebimento' : 'despesa'">{{item.tipo}}</span></td>
                        <td class="icons">
                            <i class="fa-solid fa-pencil editar" @click="editarItem(item)"></i>
                            <i class="fa-solid fa-trash delete" @click="excluirItem(item.id , index)"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    <Modal v-if="abrirModal == true" v-on:fecharModal="fecharModal" :dimensoes="{width: 'auto', height:'auto'}" :msg="this.msg">
        <div class="contentModal">
            <input type="text" v-model="inputDesc">
            <input type="date" v-model="inputData"/>
            <input type="text" v-model="inputValor"/>
            <button @click="salvarEdicao">
                Salvar
            </button>
        </div>
    </Modal>
    </div>
</template>
<script>
import Modal from "../components/Modal.vue"
export default{
    name: "Tabela",
    props:{
        items: Array
    },

    components: {
        Modal,
    },
    data(){
        return{
            abrirModal: false,
            inputDesc: "",
            inputData: "",
            inputValor: "",
            msg: "",
            
        }
    },
    methods:{
        async excluirItem(id, index){
            const req = await fetch(`http://localhost:3001/items/${id}`,{
                method: "DELETE"
            });
            this.items.splice(index, 1);

        },
        editarItem(item){
            this.msg = `Editar ${item.tipo}`;
            this.abrirModal = true;
            this.inputDesc = item.descricao;
            this.inputData = item.data,
            this.inputValor = item.valor
        },
        salvarEdicao() {
            this.items.forEach((element) => { 
                console.log(target);
            });

        },
        fecharModal() {
            this.abrirModal = false;
        },

    },
    mounted(){
    }
}
</script>
<style scoped>
.containerTabela{
    width: 100%;
    height: 92vh;
}
.tableContainer{
    width: 100%;
    height: 92vh;
}

table{
    width: 1200px;
    height: 30px;
    overflow-x: auto;
    align-items: center;
    padding: 20px;
}

table thead{
    background: #048fad;
    text-align: center;
}
table tbody{
    text-align: center;

}
thead tr td,
thead tr th{
    box-shadow: 1px 1px 2px #292929;
	padding: 0px 2px;
}

tbody tr:nth-of-type(odd) {
	background-color: #5fcdd91c;
}

tbody tr td{
    padding: 5px;
}



.red{
    border-left: 5px solid #c90606;
}
.green{
    border-left: 5px solid #139901;
}

.icons{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
}

.editar:hover{
    transition: 0.5s;
    color: #048fad;
}

.delete:hover{
    transition: 0.5s;
    color: #c90606;
}
</style>