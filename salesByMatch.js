function sockMerchant(n, ar) {
    const sockCounts = {};
    
    for (let i = 0; i < n; i++) {
        const color = ar[i];
        if (sockCounts[color]) {
            sockCounts[color]++;
        } else {
            sockCounts[color] = 1;
        }
    }
    
    let totalPairs = 0;
    for (const count of Object.values(sockCounts)) {
        totalPairs += Math.floor(count / 2);
    }
    
    return totalPairs;
}

const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(sockMerchant(n, ar));