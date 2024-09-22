
const toCamelCase           = str => str.split(/[_-]/).map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join("")

const splitTest         = (str, seperator) => str.split(seperator) 

const charAtTest        = (str, index) => str.charAt(index)

const toUpperCaseTest   = char => char.toUpperCase()

const sliceTest         = (str, index) => str.slice(index)

const joinTest          = (arr, sep) => arr.join(sep)

/* color vars */
const green = "\x1b[32m";
const reset = "\x1b[0m";


/* toUpper Test */ 
console.log(
    `- toCamelCase() test: --->${green}`,

    toCamelCase("to_upper")

    , `${reset}<---\n`
)

/* split Test */ 
console.log(
    `- split() test: --->${green}`,
    
    splitTest("hey there amigo", ' ')
    
    , `${reset}<---\n`
)

/* charAt Test */ 
console.log(
    `- charAt() test: --->${green}`,
    
    charAtTest("Hello", 1)

    , `${reset}<---\n`)

/* toUpperCase Test */ 
console.log(
    `- toUpperCase() test: --->${green}`,
    
    toUpperCaseTest('q')
    
    , `${reset}<---\n`)

    /* slice Test */
console.log(
    `- slice() test: --->${green}`,
    
    sliceTest("hello", 2)
    
    , `${reset}<---\n`)

/* join Test */     
console.log(
    `- slice() test: --->${green}`,
    
    joinTest(["hello", "world"], 'x')
    
    , `${reset}<---\n`)




