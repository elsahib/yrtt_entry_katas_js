// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigLatin(str){
    // You code here!
    let resultArr =[]
    let strArr = str.split(" ");
    strArr.forEach(element => {
        let temp = element.split("")
        let first = temp.shift()
        temp.push(first);
        let word = temp.join("")
        let result = word +"ay"
        resultArr.push(result)
    });
    

 return resultArr.join(" ")
}

module.exports = {
    pigLatin
};

console.log(pigLatin('Pig latin is cool'));