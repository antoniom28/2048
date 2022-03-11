export const movementUp = {
    moveUp(sposta, spostamenti, newPos, score, originalArray) {
        let antiLoop = 0;
        sposta = false;
        for (let col = 0; col < newPos.length; col++) {
            for (let row = 0; row < newPos.length; row++) {
                sposta = false;
                if (newPos[row][col] == 0) {
                    let findedRow = row;
                    let findedCol = col;
                    while (newPos[row][col] == 0) {
                        sposta = false;
                        for (
                            let find = row + 1;
                            find < originalArray.length;
                            find++
                        ) {
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
                            newPos[findedRow + 1][findedCol];
                        newPos[findedRow + 1][findedCol] = 0;
                        findedRow++;
                        if (findedRow == newPos.length - 1) {
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
            for (let row = 0; row < newPos.length - 1; row++) {
                if (
                    newPos[row][col] == newPos[row + 1][col] &&
                    newPos[row][col] != 0
                ) {
                    newPos[row][col] *= 2;
                    score += newPos[row][col];
                    spostamenti = true;
                    for (
                        let rowIndex = row + 1;
                        rowIndex < newPos.length;
                        rowIndex++
                    ) {
                        if (rowIndex + 1 < newPos.length)
                            newPos[rowIndex][col] = newPos[rowIndex + 1][col];
                        else newPos[rowIndex][col] = 0;
                    }
                }
            }
        }
        originalArray = newPos;
        return [sposta, spostamenti, newPos, score];
    },
}