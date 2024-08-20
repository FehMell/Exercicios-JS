function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const countFruitsInRange = (fruitPositions, treeLocation, start, end) => {
        return fruitPositions.filter(fruitDistance => {
            const fruitPosition = treeLocation + fruitDistance;
            return fruitPosition >= start && fruitPosition <= end;
        }).length;
    };
    
   
    const applesInRange = countFruitsInRange(apples, a, s, t);
    const orangesInRange = countFruitsInRange(oranges, b, s, t);
    

    console.log(applesInRange);
    console.log(orangesInRange);
}


const s = 7;
const t = 11;
const a = 5;
const b = 15;
const apples = [-2, 2, 1];
const oranges = [5, -6];

countApplesAndOranges(s, t, a, b, apples, oranges);