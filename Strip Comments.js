/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
Any whitespace at the end of the line should also be stripped out.

Example:
Given an input string of:
apples, pears # and bananas
grapes
bananas !apples
The output expected would be:
apples, pears
grapes
bananas
The code would be called like so:
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/

function solution(input, markers) {
  for (let i = 0; i < markers.length; i++) {
    input = input
      .split('\n')
      .map(x => x.split(markers[i])[0].trim())
      .join('\n');
  }
  return input;
};

function solutionBP(input, markers) {
  return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
}
