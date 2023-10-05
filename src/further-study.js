// EXTRA CREDIT

// Return the strings common to both input arrays. Do not return duplicates.
// Ex.:
//   commonStrings(['a', 'b', 'c'], ['a', 'd', 'e']);
//   => ['a']
//   commonStrings(['zoo', 'space', 'zoo'], ['zoo', 'space', 'boat']);
//   => ['zoo', 'space']
function commonStrings(array1, array2) {

    let grandArr = []
    let newArr = []

    for (let item of array1) {
        grandArr.push(item)
    }

    for (let item of array2) {
        grandArr.push(item)
    }

    for (let item of grandArr) {
        if (array1.includes(item)&&array2.includes(item)&&!newArr.includes(item)) {
            newArr.push(item)
        }
    }

    return newArr
}

// Given three numbers, return a list of numbers from 1 to 100 that are
// divisible by at least one of a, b or c.
// Ex.:
//   divisibleByEither(50, 30, 29);
//   => [29, 30, 50, 58, 60, 87, 90, 100]
function divisibleByEither(a, b, c) {

    let devisers = []

    for (let i = 1; i < 101; i++) {
          
        if (i % a === 0 || i % b === 0 || i % c === 0) {
            console.log(i)
            devisers.push(i)
        }
    }

    return devisers

}

// Compress a string using the rules below and return the result. To compress a
// string, replace consecutive duplicate characters with a number and the
// character. For this compression, only count consecutive duplicate
// characters. If a character is not repeated, it should not be changed.
// Assume that all inputs are lowercased.
// Ex.:
//   compressString('aaa');
//   => '3a'
//   compressString('ssssbb');
//   => '4s2b'
//   compressString('ssssbbba');
//   => '4s3ba'
function compressString(string) {
    
    const stringArr = []
    let num = 0
    for (let i = 0; i < string.length; i++) {
        
        if (string[i]!==string[i+1]&&num===0) {
            stringArr.push(string[i])
        
        } else if (string[i]!==string[i+1]&&num!==0){
            
            stringArr.push(`${num}`)
            stringArr.push(string[i])
            num = 0
        } else if (string[i]===string[i+1]&&num===0) {
            num = 2
        } else {
            num++
        }

    }
    
    let newWord = "";
    for(let letter of stringArr) {
        newWord += letter
    }
  
    return newWord

}

export { commonStrings, compressString, divisibleByEither };
