const inputArray = [1, 1, 1, 2, 2, 3, 3, 3, 4, 5];
const newLength = removeDuplicates(inputArray);

function removeDuplicates(a) {
    if (a.length === 0) return 0;

    let i = 0;
    for (let j = 1; j < a.length; j++) {
        if (a[j] !== a[i]) {
            i++;
            a[i] = a[j];
        }
    }

    return i + 1;
}

const Removeduplicates = () => {
console.log("New Length:", newLength);
}

export default Removeduplicates;