const countSheep = function(sheep){
    if (sheep === 0) {
        return ' All the sheep jumped over the fence'
    };
    return ' Another sheep jumped over the fence' + 
    countSheep(sheep - 1)
}

let sheeps = 3;
console.log(countSheep(sheeps))

const powerCalculator = function(a, b) {
    if (b <= 0) {
        return ' exponent should be >= 0'
    }

    return a ** b
}
console.log(powerCalculator(10, 2))
console.log(powerCalculator(3, 3))

const stringReverse = function(string) {
    if (string.length < 2) {
        return string;
    }
    return stringReverse(string.substr(1)) + string.charAt(0)
}
console.log(stringReverse('This Is Now Backwards!'))

const nthTriangle = function(n) {
    if (n === 1) {
        return n;
    }
    return n + nthTriangle(n-1);

}
console.log(nthTriangle(5))

const stringSplit = function(string) {
    let array = [];
    if (!string.includes('/')) {
        array.unshift(string);
        return array;
    }
    let newString = string.substring(0, string.indexOf('/'));
    array.unshift(newString);
    return stringSplit(string.substring(string.indexOf('/')+1));
}
console.log(stringSplit('20/30/4050'))

const fibonacci = function(n) {
    if (n === 0) {
        return n;
    }
    if (n === 1) {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(6));

const factorial = function(n) {
    if (n === 1) {
        return n;
    }

    return n * factorial(n-1);
}

console.log(factorial(5));

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

function getCell(x,y, maze) {
    if (x < 0 || x > maze[0].length-1) {
        return '*';
    }
    if (y < 0 || y > maze.length-1) {
        return '*'
    }
    let value = maze[y][x];
    return value;
}

function exitMaze(x, y, maze, positions, moves) {
    if (getCell(x, y ,mySmallMaze, [], []) === '*') {
        return;
    } else {
        console.log(x,y);
    }
    exitMaze(x+1, y, maze,);
   // exitMaze(x-1, y, maze);
    exitMaze(x, y+1, maze,);
    //exitMaze(x, y-1, maze);
}
exitMaze(0, 0, mySmallMaze);

function allAnagrams(word) {

    let uniqueAnagram = {};
    
    (function anagram(ana, str) {
        if (str === '') {
            uniqueAnagram[ana] = 1;
        }
        for (let i = 0; i < str.length; i++) {
            anagram(ana + str[i], str.slice(0,i) + str.slice(i + 1));
        }
    })('', word);
    return Object.keys(uniqueAnagram);    
}
console.log(allAnagrams('Jordan'));

function anagram(word) {
    let array = [];
    if (word.length < 2) {
        array.push(word);
        return array;
    }

    for (let i = 0; i < word.length; i++) {
        let string = word.slice(0,i) + word.slice(i+1);
        //console.log(string);
        let spam = anagram(string);
        for (let f = 0; f < spam.length; f++ ) {
            array.push(word[i] + spam[f]);
        }
    }
    return array;
}
console.log(anagram('foot'));



let chart = {
    Zuckerberg: {
        Schroepfer:{
            Bosworth:{
                Steve: {},
                Kyle: {},
                Andra: {}
            },
            Zhao: {
                Richie: {},
                Sofia: {},
                Jen: {}
            }
        },
        Schrage: {
            VanDyck: {
                Sabrina: {},
                Michelle: {},
                Josh: {}
            },
            Swain: {
                Blanch: {},
                Tom: {},
                Joe: {}
            }
        },
        Sandberg: {
            Goler: {
                Eddie: {},
                Julie: {},
                Annie: {}
            }
        },
        Hernandez: {
                Rowi: {},
                Inga: {},
                Morgan: {}
        },
        Moissinac: {
                Amy: {},
                Chuck: {},
                Vinni: {}
        },
        Kelley: {
                Eric: {},
                Ana: {},
                Wes: {}
        }
    }
}

function organizationChart(obj, depth) {
    let names = Object.keys(obj);
    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        console.log('    '.repeat(depth) + name);
        organizationChart(obj[name], depth + 1);
    }
}
organizationChart(chart, 0);

function toBinary(num) {
   if (num === 0) {
       return 0 
    } else {
    return num % 2 + 10 * toBinary(Math.floor(num /2));
    }
}
console.log(toBinary(7));