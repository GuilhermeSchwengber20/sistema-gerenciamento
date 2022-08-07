<template>
    <div class="modalContainer">
        <div class="modalContent dimensao">
            <div class="modalHeader">
                <i class="fa-solid fa-xmark icon" @click="fecharModal"></i>
                <span>{{msg}}</span>
            </div>
            <div class="containerSlot">
                <slot></slot>
            </div>
        </div>
    </div>  

</template>
<script>
export default {
    name: "Modal",
    props: {
        dimensoes: {
            width: Number,
            height: Number
        },
        msg: String
    },
    methods:{
        fecharModal(){
            this.$emit("fecharModal");
        }
    },
    mounted(){
        if (this.dimensoes) {
            document.getElementsByClassName("dimensao")[0].style.width = this.dimensoes.width
            document.getElementsByClassName("dimensao")[0].style.height = this.dimensoes.height
        }
    }
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
.modalContainer{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
}
.modalContent{
    background: #5fcdd91c;
    width: 100%;
    border-radius: 12px;
    max-width: 40%;
}
.modalHeader{
    height: 30px;
    background: #048fad;
    width: 100%;
    display: flex;
    gap: 20px;    
    align-items: center;
    padding: 5px;
}

.containerSlot{
    padding: 20px;
    white-space: nowrap;
    width: 100%;
}
.icon{
    color: #fff;
}
</style>