<template>
    <div id="containetTabela">
        <div class="containerContent">
            <div id="table">
                <div>
                    <div id="tableHeader">
                        <div class="order-id">ID:</div>
                        <div class="data">Data:</div>
                        <div>Descrição</div>
                        <div>Valor em R$</div>
                        <div class="tipo">Tipo</div>
                        <div>Ação</div>

                    </div>
                </div>
                <div id="tableBody" v-for="(item, index) in items" :key="index">
                    <div class="order-number">{{item.id}}</div>
                    <div class="item-data">{{item.data}}</div>
                    <div class="item-desc">{{item.descricao}}</div>
                    <div class="item-valor">R$ &nbsp; {{item.valor}}</div>
                    <div :class="item.tipo == 'recebimento' ? 'recebimento' : 'despesa'">{{item.tipo}}</div>
                    <div class="icons">
                        <i class="fa-solid fa-pencil" @click="editarItem(item)"></i>
                        <i class="fa-solid fa-trash" @click="excluirItem(item.id)"></i>

                    </div>

                </div>
            </div>

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
            items: [],
        }
    },
    methods:{
        async excluirItem(id){
            const req = await fetch(`http://localhost:3000/burgers/${id}`,{
                method: "DELETE"
            });

            this.getPedidos();

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
        async getLista( ){
            const req = await fetch("http://localhost:3000/items");
            console.log(req);
            const data = await req.json();
            this.items = data;

            console.log(this.items);
            this.emmiter.emit("getLista");
        },

    },
    mounted(){
        this.getLista();

        console.log(this.getLista())
    }
}
</script>
<style scoped>
#table{
    width: 1200px;
    margin: 0 auto;
}

#tableHeader,
#tableBody{
    display: flex;
    flex-wrap: wrap;
}

#tableHeader{
    font-weight: bold;
    padding: 12px;
    border-bottom: 3px solid #333;
}

#tableHeader div,
#tableBody div{
    width: 15%;
    text-align: center;
}

#tableBody{
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid #ccc;
}

.recebimento{
    background-color: green;
    text-align: center;
    align-items: center;
    border-radius: 20px;
    color: #FFF;
}


.despesa{
    background-color: red;
    text-align: center;
    border-radius: 20px;
    color: #FFF;
}

.icons{
    display: flex;
    justify-content: center;
    gap: 20px;
}

.contentModal{
    width: 100%;
    height: 100%;
    padding: 10px;
}

.contentModal input{
    margin-right: 10px;
}
</style>