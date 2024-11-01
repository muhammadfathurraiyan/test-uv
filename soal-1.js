// 1. Logic Test

// Terdapat sebuah array of strings sebagai berikut:

// ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map']

// Buatlah sebuah fungsi yang mengelompokkan sebuah array of strings di atas menjadi kumpulan anagram, dengan expected result sebagai berikut:

// [
//   [ 'cook' ],
//   [ 'save', 'aves', 'vase' ],
//   [ 'taste', 'state' ],
//   [ 'map' ]
// ]

// Catatan: dilarang menggunakan built in function seperti array.map, array.reduce, dan array.filter.

function arrayGroup(words) {
  const result = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const sortedWord = word.split("").sort().join("");
    if (result[sortedWord]) result[sortedWord].push(word);
    else result[sortedWord] = [word];
  }

  return Object.values(result);
}

const words = ["cook", "save", "taste", "aves", "vase", "state", "map"];
console.log(groupAnagrams(words));
