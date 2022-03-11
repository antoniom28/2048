export const movementRight = {
    moveRight(sposta, spostamenti, newPos, score, originalArray) {
        
        let antiLoop = 0;
        sposta = false;
        for (let row = 0; row < newPos.length; row++) {
          for (let col = newPos.length - 1; col >= 0; col--) {
            sposta = false;
            if (newPos[row][col] == 0) {
              let findedRow = row;
              let findedCol = col;
              while (newPos[row][col] == 0) {
                sposta = false;

                for (let find = col - 1; find >= 0; find--) {
                  if (newPos[findedRow][find] != 0) {
                    sposta = true;
                    break;
                  }
                }
                if (!sposta)
                  break;
                  
                spostamenti = true;
                antiLoop++;
                if (antiLoop >= 50) {
                  console.log("rompo per loop");
                  break;
                }
                newPos[findedRow][findedCol] =
                  newPos[findedRow][findedCol - 1];
                newPos[findedRow][findedCol - 1] = 0;
                findedCol--;
                if (findedCol == 0) {
                  newPos[findedRow][findedCol] = 0;
                  findedCol = col;
                }
                originalArray = newPos;
              }
            }
          }
        }

        newPos = [...originalArray];
        for (let row = 0; row < newPos.length; row++) {
          for (let col = newPos.length - 1; col >= 0; col--) {
            if (
              newPos[row][col] == newPos[row][col - 1] &&
              newPos[row][col] != 0
            ) {
              newPos[row][col] *= 2;
              score += newPos[row][col];
              spostamenti = true;
              for (let colIndex = col - 1; colIndex >= 0; colIndex--) {
                if (colIndex - 1 >= 0)
                  newPos[row][colIndex] = newPos[row][colIndex - 1];
                else newPos[row][colIndex] = 0;
              }
            }
          }
        }
        originalArray = newPos;
        return [sposta, spostamenti, newPos, score];
    },
}