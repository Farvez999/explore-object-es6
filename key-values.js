const bottle = { color: 'yello', price: 50, isClear: true, capasity: 1 }
const keys = Object.keys(bottle);
console.log(keys);
const values = Object.values(bottle);
console.log(values);
const pair = Object.entries(bottle);
console.log(pair);

console.log(bottle);
//Object.seal(bottle);//seal korle delete kora jabe na, seal korle value change kora jai, new propaty add kora jai na.
Object.freeze(bottle);//freeze korle 
delete bottle.isClear;
bottle.price = 200;//seal korle value change kora jai, new propaty add kora jai na.
console.log(bottle);