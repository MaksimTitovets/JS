function incrementString(strng) {
  //console.log(strng.replace(/\d+$/, x => x.match(/0/g).slice(2).join('') + Number(x) + 1));
  let reg = strng.reverse().match(/(0+)/);
  console.log(reg);
 // return strng.replace(/\d+$/, x => x.match(/0/g).slice(2).join('') + Number(x) + 1);
}
