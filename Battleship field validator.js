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
