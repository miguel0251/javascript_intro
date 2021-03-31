//For .. of loop
/*
legend:
    keyword= 'for'
    var= some temp word you use to refer to the current item
    collection=  some colection you want to go through ex...Arry or Obj or String

    NOte: this is better for array and strings if you want the items

    <keyword>(<var> in <collection>){
    //do something

*/

let students= ['amy', 'adam','blake','circe', 'drew']
for(let student of students){
    console.log(student)
}

let alphabet= 'abcdefghijklmnopqrstuvwxyz'
for(let letter of alphabet){
    console.log(letter)
}

let person= {
    name: 'justin',
    age: 28
}

for(let entry of Object.entries(person)){
    //console.log
console.log(entry)}