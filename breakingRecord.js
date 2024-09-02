function breakingRecords(scores) {

    let minRecord = scores[0];
    let maxRecord = scores[0];
    
    let minRecordCount = 0;
    let maxRecordCount = 0;

    for (let i = 1; i < scores.length; i++) {
        const score = scores[i];
        
        if (score > maxRecord) {
            maxRecord = score;
            maxRecordCount++;
        }
        
        else if (score < minRecord) {
            minRecord = score;
            minRecordCount++;
        }
    }
    
    return [maxRecordCount, minRecordCount];
}

// Exemplo de uso
const inputScores0 = [10, 5, 20, 20, 4, 5, 2, 25, 1];
const inputScores1 = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

console.log(breakingRecords(inputScores0)); 
console.log(breakingRecords(inputScores1)); 