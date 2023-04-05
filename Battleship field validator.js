/*
DESCRIPTION:
Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. 
Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

Battleship (also Battleships or Sea Battle) is a guessing game for two players. 
Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field. 
The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. 
In this kata we will use Soviet/Russian version of the game.

Before the game begins, players set up the board and place the ships accordingly to the following rules:
There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). 
Any additional ships are not allowed, as well as missing ships.
Each ship must be a straight line, except for submarines, which are just single cell.

The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.
*/

function validateBattlefield(field) {
  field.forEach(el => {el.unshift(0); el.push(0)});
  field.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  field.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  field.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  field.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  let sh2 = 0, sh3 = 0, sh4 = 0, sum = 0, err = 0;
  for (let i = 1; i < 11; i ++) {
    field[i].forEach((el, ind) => {   
      if (el + field[i + 1][ind] == 2 && field[i - 1][ind] + field[i][ind - 1] + field[i][ind + 1] + field[i + 2][ind] + field[i + 1][ind - 1] + field[i + 1][ind + 1] == 0 ||
          el + field[i][ind + 1] == 2 && field[i - 1][ind] + field[i - 1][ind + 1] + field[i][ind - 1] + field[i][ind + 2] + field[i + 1][ind] + field[i + 1][ind + 1] == 0) {
        sh2++;
      }
      if (el + field[i + 1][ind] + field[i + 2][ind] == 3 && field[i - 1][ind] + field[i][ind - 1] + field[i][ind + 1] + field[i + 3][ind] + field[i + 1][ind - 1] + field[i + 1][ind + 1] + field[i + 2][ind - 1] + field[i + 2][ind + 1] == 0 ||
          el + field[i][ind + 1] + field[i][ind + 2] == 3 && field[i - 1][ind] + field[i - 1][ind + 1] + field[i - 1][ind + 2] + field[i][ind - 1] + field[i][ind + 3] + field[i + 1][ind] + field[i + 1][ind + 1] + field[i + 1][ind + 2] == 0) {
        sh3++;
      }
      if (el + field[i + 1][ind] + field[i + 2][ind] + field[i + 3][ind] == 4 && field[i - 1][ind] + field[i][ind - 1] + field[i][ind + 1] + field[i + 4][ind] + field[i + 1][ind - 1] + field[i + 1][ind + 1] + field[i + 2][ind - 1] + field[i + 2][ind + 1] + field[i + 3][ind - 1] + field[i + 3][ind + 1] == 0 ||
          el + field[i][ind + 1] + field[i][ind + 2] + field[i][ind + 3] == 4 && field[i - 1][ind] + field[i - 1][ind + 1] + field[i - 1][ind + 2] + field[i - 1][ind + 3] + field[i][ind - 1] + field[i][ind + 4] + field[i + 1][ind] + field[i + 1][ind + 1] + field[i + 1][ind + 2] + field[i + 1][ind + 3] == 0) {
        sh4++;
      }
      if (el == 1) sum++; 
      if (el + field[i + 1][ind + 1] == 2 || el + field[i + 1][ind - 1] == 2) err++;
    })
  }  
  if (sh2 == 3 && sh3 == 2 && sh4 == 1 && sum == 20 && err == 0) return true
  else return false;
}
