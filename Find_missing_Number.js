const inputArray = [1, 3, 4, 5, 6, 7, 8, 9, 10];
const missingNumber = findMissingNumber(inputArray);

function findMissingNumber(arr) {
    const n = arr.length + 1;
    const totalSum = (n * (n + 1)) / 2;
    const arrSum = arr.reduce((acc, num) => acc + num, 0);
    const missingNumber = totalSum - arrSum;
    return missingNumber;
}

const Missingnumber = () => {
    console.log("Missing Number:", missingNumber)
}
export default Missingnumber;