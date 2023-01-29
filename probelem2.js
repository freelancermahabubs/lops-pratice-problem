var side1 = 9;
var side2 = 8;
var side3 = 9;
if(side1 == side2 && side1 == side3){
console.log('The triangle is an equilateral triangle');
}
else if((side1 == side2) || (side1 == side3) || (side2 == side3)){
  console.log("The triangle is an isosceles triangle.");
}
else(
 "The triangle is a scalene triangle"
)