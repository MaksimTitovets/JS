/*

You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2.

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1];
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2];
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3];
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4];
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5].

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

Note:
consecutive strings : follow one after another without an interruption.

*/

function longestConsec (strarr, k) {
  let arr = [], 
      len = strarr.length;
  for (let i = 0; i <= strarr.length - k; i++) {
    let con = '';
    for (let j = i; j < i + k; j++) {
      con = con.concat(strarr[j]);
      }
    arr.push(con);    
  }  
  return len && len >= k && k > 0 ? arr.find(x => x.length == Math.max(...arr.map(x => x.length))) : "";
}

function longestConsecBP(strarr, k) {
		var longest = "";
		for(var i=0;k>0 && i<=strarr.length-k;i++){
			var tempArray = strarr.slice(i,i+k);
			var tempStr = tempArray.join("");
			if(tempStr.length > longest.length){
				longest = tempStr;
			}
		}
		return longest;
}

function longestConsecClever(strarr, k) {
    if (k <= 0 || k > strarr.length) {
      return "";
    }
    
    return strarr
    .map((value, index) => (
      strarr.slice(index, index+k).join('')
    ))
    .reduce((longest, current) => current.length > longest.length ? current : longest)
    
}
