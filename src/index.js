
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    let res = matrix.map((arr, i) => {
        if (i % 2 !== 0) {
            return arr.reverse();
        }
        return arr;
    });

    return res.flat();
}
