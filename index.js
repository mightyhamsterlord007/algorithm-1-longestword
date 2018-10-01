// function longestword(str) {

//     let  words = str.split(' ');

//     var word = '';

//     for (let i in words) {
//         if ( words[i].replace(/\W+/g, '').length > word.length) {
//             word = words[i].replace(/\W+/g, '');
//         }
//     }
//     return word;
// }

// function longestword(str) {

//   return str.split(' ').map(word => word.replace(/[^a-zA-Z]/g, ''))
//     .reduce( (acc, value) => value.length > acc.length ? value : acc , '' );
// }

function longestword(str) {
    
    let longestWord = '';
    let wordCount = str.replace(/[\:^&?!]/g, '').split(" ");

    for ( let i = 0; i < wordCount.length; i++) {
        if (wordCount[i].length > longestWord.length) {
            longestWord = wordCount[i];
        }
    }

    return longestWord;
}
  


module.exports = longestword;
