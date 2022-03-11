
        <template>
  <main class="container">
    <div class="box">
      <div v-if="resetGame" class="reset-game"></div>
      <div
        v-for="(elem, index) in getBoxValue"
        :key="index"
        :class="['number-' + elem , 'box-'+index]"
        class="number-box"
      >
        <h1 v-if="elem > 0">{{ elem }}</h1>
      </div>
    </div>
  </main>
</template>

<script>
import {startGame} from "../../assets/js/startGame.js";
import {addNumber} from "../../assets/js/addNumber.js";
import {movementUp} from "../../assets/js/movementUp.js";
import {movementDown} from "../../assets/js/movementDown.js";
import {movementLeft} from "../../assets/js/movementLeft.js";
import {movementRight} from "../../assets/js/movementRight.js";

export default {
  data() {
    return {
      boxValue: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
    };
  },
  name: "Main",
  components:{
  },
  props: {
    restart: Boolean,
  },
  computed: {
    getBoxValue() {
      let array = [];
      for (let i = 0; i < this.boxValue.length; i++) {
        for (let j = 0; j < this.boxValue[i].length; j++)
          array.push(this.boxValue[i][j]);
      }
      return array;
    },
    resetGame() {
      if (this.restart == true) {
        this.boxValue = [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ];
        startGame.startGame(this.boxValue);
      }
      return false;
    },
  },
  created: function () {
    startGame.startGame(this.boxValue);
    this.moveBox();
  },
  methods: {
    moveBox() {
      window.addEventListener("keydown", () => {
        let newPos = [...this.boxValue];
        let sposta = false;
        let spostamenti = false;
        let getUpdate = [sposta,spostamenti,newPos];
          if (event.key == "w") 
            getUpdate = movementUp.moveUp(sposta , spostamenti , newPos , this.boxValue);

          if (event.key == "s") 
            getUpdate = movementDown.moveDown(sposta , spostamenti , newPos , this.boxValue);

          if (event.key == "a") 
            getUpdate = movementLeft.moveLeft(sposta , spostamenti , newPos , this.boxValue);

          if (event.key == "d") 
            getUpdate = movementRight.moveRight(sposta , spostamenti , newPos , this.boxValue);

          sposta = getUpdate[0];
          spostamenti = getUpdate[1];
          this.boxValue = newPos = getUpdate[2];

          if (spostamenti)
            addNumber.newNumber(this.boxValue);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/partials/variables.scss";
.box {
  width: 500px;
  height: 500px;
  margin: 0 auto;
  background-color: #bbada0;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  .number-box {
    width: 22%;
    height: 22%;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(61, 61, 61);
    transition: 150ms ease-in-out;
  }
}

@keyframes show {
  0% {
    opacity: 0.5;
    transform: scale(0);
  }
}
.add-number {
  transition: none;
  animation: show 400ms ease-in-out;
}
.number-0 {
  background-color: rgba(238, 228, 218, 0.35);
}
.number-2 {
  background-color: #eee4da;
}
.number-4 {
  background-color: #eee1c9;
}
.number-8 {
  background-color: #f3b27a;
}
.number-16 {
  background-color: #f69664;
}
.number-32 {
  background-color: #f77c5f;
}
.number-64 {
  background-color: #f75f3b;
}
.number-128 {
  background-color: #edd073;
}
.number-256 {
  background-color: #edcc62;
}
.number-512 {
  background-color: #bb9413;
}
.number-1024 {
  background-color: #00ff37;
}
</style>