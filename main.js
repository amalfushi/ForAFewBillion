var days = 30;
var total = 0;
var pennies = .01;


for(var i = 1; i <= 30; i++){
    total+= pennies;
    pennies = pennies*2;
}

console.log("After 30 Days Total: $"+total);

var daysUntil = 0;
pennies = .01;
total = Infinity;
var totalString = total;

while(total > 0){
    total-=pennies;
    pennies=pennies*2;
    daysUntil++;
}

console.log(daysUntil + ' days until $' + totalString);