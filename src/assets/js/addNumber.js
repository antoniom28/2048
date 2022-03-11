export const addNumber = {
    newNumber(array) {
        let noloop = 0;
        while (1) {
          noloop++;
          if (noloop > 1000) break;
          let random = Math.floor(Math.random() * array.length);
          let random2 = Math.floor(Math.random() * array.length);
          if (array[random][random2] == 0) {
            array[random][random2] = 2;
            let newBox = document.querySelectorAll(".number-box");
            setTimeout(() => {
              newBox[4 * random + random2].className += " add-number";
              setTimeout(() => {
                newBox[4 * random + random2].classList.remove("add-number");
              }, 350);
            }, 0);
  
            //forzavo perché non sentiva la modifica
            /*let forceUpdate = [...array];
            array = 0;
            array = forceUpdate;*/
  
            break;
          }
        }
      },
}