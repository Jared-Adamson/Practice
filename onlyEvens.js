/*
Write a function called

function onlyEvens(arr)
That takes an array and returns an array with only the even numbers in the original array.

Then, you should print out the new list.

For example, calling

var arr = [1,2,3,4,5,6];
var evens = onlyEvens(arr);
println(evens);
will print

2,4,6
*/

function start(){
	
	var arr = [1,2,3,4,5,6];
    var evens = onlyEvens(arr);
    println(evens);
	
}

function onlyEvens(arr){
    
    var even = [];
    
    for(var i=0;i<arr.length;i++){
        
        if(arr[i]%2 == 0){
            even.push(arr[i]);
        }
    }
    return even;
}
