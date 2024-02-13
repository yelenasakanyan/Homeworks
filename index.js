const fs = require('fs');

const [A, B, C] = JSON.parse(fs.readFileSync('text1.txt'));

function getA() {
    return A;
}

function getB(callback) {
    setTimeout(() => {
        callback(B);
    }, 10);
}

function getC() {
    return Promise.resolve().then(() => C);
}

function getABC() {
    return Promise.all([
        Promise.resolve(getA()),
        new Promise((resolve) => {
            getB((result) => {
                resolve(result);
            })
        }),
        getC()
    ]).then((values) => {
        return values
    })
}


getABC().then((arr) => console.log(arr));

/* Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
You are given a file with three methods implemented:
getA() - synchronous;
getB(callback) - callback driven;
getC() - promised based.
All methods resolve into some strings.
Your task is to implement getABC which returns a promise aggregating each function's result, 
like [<result of getA>, <result of getB>, <result of getC>]. */
