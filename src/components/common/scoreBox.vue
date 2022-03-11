<template>
    <div id="" class="score-box">
        <div class="score">
            <h2> SCORE </h2>
            <p class="number">
                {{score}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "scoreBox",
    data(){
        return{}
    },
    props: {
        score: Number,
    },
    methods: {},
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/partials/variables.scss';
.score-box{
    position: fixed;
    top:0;
    left: 0;
}
</style>