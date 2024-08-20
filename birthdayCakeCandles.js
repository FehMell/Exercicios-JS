function birthdayCakeCandles(candles) {
   
    const maxHeight = Math.max(...candles);
    
    
    const countMaxHeight = candles.filter(candle => candle === maxHeight).length;
    
    return countMaxHeight;
}

// Exemplo de uso
const input = [3, 2, 1, 3];
console.log(birthdayCakeCandles(input)); 