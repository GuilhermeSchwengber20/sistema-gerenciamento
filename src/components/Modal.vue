<template>
    <div class="modalContainer">
        <div class="modalContent dimensao">
            <div class="modalHeader">
                <i class="fa-solid fa-xmark icon" @click="fecharModal"></i>
                <span>{{msg}}</span>
            </div>
            <slot></slot>
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
.modalContainer{
	height: 100vh;
	width: 100%;
	max-width: 100vw;
	background-color: rgba(0, 0, 0, 0.7);
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
}

.modalContent{
    background-color: #fff;
	width: 100%;
	height: 100%;
	margin: auto auto;
	border-radius: 10px;
	overflow: auto;
	max-height: 100vh;
}

.modalHeader{
    height: 25px;
    background-color: #04bf9d;
    display: flex;
    flex-direction: row;
}

.icon{
    width: 30px;
    align-items: center;
    align-content: center;
    display: flex;
    justify-content: center;

}
</style>