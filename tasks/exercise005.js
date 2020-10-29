// Introduction
// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed 
// stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator 
// returns to the usual seated position.

// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. 
// In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously 
// around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, 
// the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating 
// waves have been produced. (Source Wikipedia)

// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string 
// in an array where an uppercase letter is a person standing up. 

// Rules
//  1.  The input string will always be lower case but maybe empty.
//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
const mexican = (str) =>{
    let arr = []
    for (let i =0 ; i <str.length;i++){
        arr.push(str.replace(str[i],str[i].toUpperCase()))
    }
    return arr
}

function mexicanWave(str){
    // Your code here!
    let result = []
    if (str.length == 0){
        return result
    } else if (str.includes(" ")){
        let index = str.indexOf(" ")
        let first = str.substr(0,index)
        let second = str.substr(index + 1)
        for (let i =0 ; i <first.length;i++){
            result.push(first.replace(first[i],first[i].toUpperCase()) +" "+ second)
        }
        for (let i =0 ; i <second.length;i++){
            result.push(first +" " + second.replace(second[i],second[i].toUpperCase()))
        }
    } else {
        for (let i =0 ; i <str.length;i++){
            result.push(str.replace(str[i],str[i].toUpperCase()))
        }
    }

    return result
}

module.exports = {
    mexicanWave
};
console.log(mexicanWave("hello"));
