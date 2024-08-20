function diagonalDifference(arr) {
    let somaDiagonalprimaria = 0;
    let somaDiagonalsecundaria = 0;
    const n = arr.length;
    
    for (let i = 0; i < n; i++) {
        somaDiagonalprimaria += arr[i][i]; 
        somaDiagonalsecundaria += arr[i][n - 1 - i]; 
    }
    return Math.abs(somaDiagonalprimaria - somaDiagonalsecundaria);
}


const matrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

console.log(diagonalDifference(matrix)); 