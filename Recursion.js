const n = 10;
const result = factorial(n);
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } 
    else {
        return n * factorial(n - 1);
    }
}
const Recursionvalue = () =>{
console.log("Factorial of", n + ":", result);}

export default Recursionvalue;
