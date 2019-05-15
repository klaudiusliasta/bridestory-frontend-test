let numbers = new Array(2, 4, 1, 6, 8, 2, 4, 9);
let result = new Array();

function filter() {
    for (i=0;i<numbers.length;i++){
        if (numbers[i]>5){
            result.push(numbers[i]);
        }
    }
    return result;
}

let p1 = "From this array : " + numbers.toString();
let p2 = "\nThe numbers above 5 is " + filter().toString();