function miniMaxSum(arr) {
    const totalSum = arr.reduce((acc, num) => acc + num, 0);


    const minSum = totalSum - Math.max(...arr);
    const maxSum = totalSum - Math.min(...arr);

    console.log(minSum, maxSum);
}


const inputArr = [1, 2, 3, 4, 5];
miniMaxSum(inputArr); 