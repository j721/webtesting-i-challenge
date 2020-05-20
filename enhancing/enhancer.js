module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  let enhancement = item.enhancement;
  if (enhancement < 20 ){
    enhancement++
  }
  return { ...item, enhancement};             //return new item with enhancement level increased by 1
}

function fail(item) {
  let enhancement = item.enhancement;
  let durability = item.durability; 

  if(enhancement < 15){
    durability = durability -5
  }else{
    durability = durability -10         //enhancement level is 15 or more. then decrease durability by 10
  }

  if(enhancement > 16){                   //enhancement level >16. enchament decreases by 1
    // enhancement --
    enhancement - 1
  }
  return { ...item, enhancement, durability };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
