//For .. in loop
/*
legend:
    keyword= 'for'
    var= some temp word you use to refer to the current item
    collection=  some colection you want to go through ex...Arry or Obj or String
<keyword>(<var> in <collection>){
    //do something
}
*/

let person= {
    name: 'Justin',
    age: 28
}
//console.log(person.name)
//console.log(person['name'])


for(let property in person){
    console.log(property)
}


