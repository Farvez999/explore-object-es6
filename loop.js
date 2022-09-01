// For of loop calabo Array er upore
// For in loop calabo Object er upore

const bottle = { color: 'yello', price: 50, isClear: true, capasity: 1 }
const keys = Object.keys(bottle);
// 3 object read propaty
// 1. bottle.color
// 2. bottle['color']
// 3. bottle[key]
for (const key of keys) {
    // console.log(key, bottle[key]);
}

//for in ata use korbo
for (const key in bottle) {
    console.log(key, bottle[key]);
}