<template>
    <header class="container">
        <h1
            @click="newGame()"
        >
            NEW GAME
        </h1>
    </header>
</template>

<script>
//import elemento from '../section/elemento.vue'

export default {
    name: 'Header',
    components: {
        //elemento
    },
    data(){
        return{
        }
    },
    props: {},
    methods: {
        newGame(){
            this.$emit('newGame');
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/partials/variables.scss';
h1{
    cursor: pointer;
    display: inline-block;
}
</style>