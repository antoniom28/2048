export const movementDown = {
    moveDown(sposta, spostamenti, newPos, score, originalArray) {
        
        let antiLoop = 0;
        sposta = false;
        for (let col = 0; col < newPos.length; col++) {
          for (let row = newPos.length - 1; row >= 0; row--) {
            sposta = false;
            if (newPos[row][col] == 0) {
              let findedRow = row;
              let findedCol = col;
              while (newPos[row][col] == 0) {
                sposta = false;

                for (let find = row - 1; find >= 0; find--) {
                  if (newPos[find][findedCol] != 0) {
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
                  newPos[findedRow - 1][findedCol];
                newPos[findedRow - 1][findedCol] = 0;
                findedRow--;
                if (findedRow == 0) {
                  newPos[findedRow][findedCol] = 0;
                  findedRow = row;
                }
                originalArray = newPos;
              }
            }
          }
        }

        newPos = [...originalArray];
        for (let col = 0; col < newPos.length; col++) {
          for (let row = newPos.length - 1; row > 0; row--) {
            if (
              newPos[row][col] == newPos[row - 1][col] &&
              newPos[row][col] != 0
            ) {
              newPos[row][col] *= 2;
              score += newPos[row][col];
              spostamenti = true;
              for (let rowIndex = row - 1; rowIndex >= 0; rowIndex--) {
                if (rowIndex - 1 >= 0)
                  newPos[rowIndex][col] = newPos[rowIndex - 1][col];
                else newPos[rowIndex][col] = 0;
              }
            }
          }
        }
        originalArray = newPos;
        return [sposta, spostamenti, newPos, score];
    },
}