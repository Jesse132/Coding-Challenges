/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function(num) {
   
const collection = {
M:1000,
CM:900,
D:500,
CD:400,
C:100,
XC:90,
L:50,
XL:40,
X:10,
IX:9,
V:5,
IV:4,
I:1,
}

let result = '';

while(num > 0){
    let keys = Object.keys(collection)
    for (let i=0; i<keys.length; i++){
        let amount = collection[keys[i]]
        if(num>=amount){
            num-=amount
            result+=keys[i];
            i--
        }
    }
}
    return result;
    
};