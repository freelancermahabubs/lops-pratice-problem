/*
 ---------------
 CONDITIONALS
 -----------
 1. meaning of: >, <, >=, <=, ==, !=, ===, !==,
 2. meaning of &&,
 3. meaning of ||
 */
let myAmount = 90000;
if(myAmount >= 80000){
  console.log("I will by a Mac");
}
else if(myAmount >= 60000 && myAmount < 80000){
  console.log("I will buy a Gaming laptop");
}
else if(myAmount >= 40000 && myAmount < 60000){
  console.log("I will buy a Lenovo Yoga");
}
else if(myAmount >= 20000 && myAmount < 40000){
  console.log("I will buy a Used Laptop");
}
else{
  console.log("I will Use My Bangha Phone")
};

