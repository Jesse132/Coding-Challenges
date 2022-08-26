var totalFruit = function(fruits) {
  let combos = {firstFruit: null, secondFruit: null}
  let firstFruitCount = 0;
  let currentCombo = 0;
  let maxCombos = 0;

  for (let i =0; i < fruits.length; i++) {
    let fruit = fruits[i];
    
    fruit === combos.firstFruit || fruit === combos.secondFruit
    ? currentCombo++ : currentCombo = firstFruitCount+1;

    fruit === combos.firstFruit ? firstFruitCount++ : firstFruitCount = 1;

    if (fruit !== combos.firstFruit) {
      combos.secondFruit = combos.firstFruit;
      combos.firstFruit = fruit;
    }
    maxCombos = Math.max(maxCombos, currentCombo);
  }
  return maxCombos;
};