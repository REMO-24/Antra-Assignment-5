

function chance() {
    let count = 1;
    return function () {
        if (count <= 5) {
            console.log("Congrats you earn the chance!");
        } else {
            console.log("Sorry you missed the chance");
        }
        count++;
    }
}
const closure = chance();





function longerThan(length) {
    return (element) => {
        return (element.length > length)
    }
}










