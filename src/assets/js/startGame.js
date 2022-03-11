export const startGame = {
    startGame(array) {
        let antiLoop = 0;
        for (let i = 0; i < 2; i++) {
          antiLoop++;
          if (antiLoop >= 100) {
            console.log("rompo start game for loop");
            break;
          }
          let random = Math.floor(Math.random() * array.length);
          let random2 = Math.floor(Math.random() * array.length);
          if (array[random][random2] == 0)
            array[random][random2] = 2;
          else 
            i--;
        }
      },

    
  }