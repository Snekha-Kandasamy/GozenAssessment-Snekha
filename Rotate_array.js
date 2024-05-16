const inputArray = [3, 8, 9, 2, 5];
const k = 2;
const rotatedArray = rotateArray(inputArray, k);

function rotateArray(a, k) {
    reverse(a, 0, a.length - 1);
    reverse(a, 0, k - 1);
    reverse(a, k, a.length - 1);
    return (a);
}

function reverse(a, i, j) {
    while (i < j) {
        let s = a[i];
        a[i] = a[j];
        a[j] = s;
        i++;
        j--;
    }
}

const Rotatedarray = () => {
console.log("Rotated Array:", rotatedArray);}

export default Rotatedarray;
