/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

function isIsogram(str) {
  return str.toLowerCase()
            .split('')
            .sort()
            .every((el, i, a) => el != a[i + 1]);
}

function isIsogramBestPractice(str) {
	return new Set(str.toUpperCase()).size == str.length;
}

function isIsogramClever(str) { 
  return !/(\w).*\1/i.test(str)
}
