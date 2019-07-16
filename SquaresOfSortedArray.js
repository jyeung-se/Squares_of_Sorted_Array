const sortedSquares = function(A) {

    let sqrA = A.map(num => num * num)
    return sqrA.sort((a,b) => a - b)
}
