//For loop
/*
legend:
    keyword = "for"
    1= a vareialbe to keep trak of "itteration" an it is start value
    2= a contidion to check each iteration
    3= how to modify your variable
<keyword>(<1>;<2>;<3>){
    //what we want to do
}

ex: for(let i=0; i<= 10; i= i+1){
    console.log(i)
}
*/


for (let x=0; x<20; x++){ //x++ same as x=x+1
    if(x%2===0){
        console.log(x)
    }else{
        console.log('this is an odd number')
    }
}

