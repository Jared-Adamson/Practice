/*
Write a function that reverses a list.

function reverseList(arr)
You should create a new array inside the function that contains the elements of arr in reverse order, and return it. It is okay to modify the original array arr inside the function.

Print out the reversed list to make sure your function works!

For example,

var arr = [1,2,3,4];
var reversed = reverseList(arr);
println(reversed);
should print:

4,3,2,1
*/
function start(){
	
	var arr = [1,2,3,4];
    var reversed = reverseList(arr);
    println(reversed);
	
}

function reverseList(x){
    
    var y = [];
    
    for(var i=x.length-1; i>=0; i--){
        
        y.push(x[i]);
        
    }
    return y;
}
