function findShortestString(arr) {
  // type your code here
  let shortestString
  shortestString = arr.reduce((a, b) => a.length <= b.length ? a : b)
  return shortestString
}

findShortestString(["test", "string" , "wow"])

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
  // assign variable for the shortest string
  // reduce the given array comparing string lengths
  // return shortest string found
// And a written explanation of your solution
