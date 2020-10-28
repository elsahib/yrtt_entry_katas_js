// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
  }
  
function pigLatin(str){
    // You code here!
    let resultArr =[]
    let strArr = str.split(" ");

    strArr.forEach((element) => {
        let notLetter = []
        let tempArr = element.split("")
        tempArr.forEach((letter,i) =>{
           if (!(/[a-zA-Z]/).test(letter)) {
            notLetter.push(letter); 
           }
        })
        if (notLetter.length > 0){
            notLetter.forEach(letter =>{
                tempArr.splice(tempArr.indexOf(letter),1) 
            })
        }

        let first = tempArr.shift()
        tempArr.push(first);
        tempArr.push("ay")
        notLetter.forEach(letter =>{
            tempArr.push(letter)
        })
        
        let result = tempArr.join("")
        resultArr.push(result)

    });
    

 return resultArr.join(" ")
}

module.exports = {
    pigLatin
};

console.log(pigLatin('Pig latin is cool!!'));