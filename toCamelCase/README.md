# toCamelCase

#### toCamelCase is a function that turns a word into camel case such as to_upper and or to-upper becomes toUpper

it uses regex operation to look for _- and split the words between those characters into string
    which are then mapped over my map which passes the array words and index and performs a function on them, this 
    function is either return the word if the index is 0 because we should not do anything on the first word
    and if the index is not 0 we convert the first character to uppercase and we concatinate it with the rest of the characters


    - split()        => splits the string and returns an array of strings, ex: "hey there amigo".split(' ') returns ["hey", "there", "amigo"].
    - map()          => takes each element of the array and performs a function on them and returns a new array.
    - charAt()       => returns a character in the word, the index is passed as a paramter, ex: "word".charAt(2) returns 'r'.
    - toUpperCase()  => a method that works on individual characters and turns them into upper case.
    - slice()        => slices the word and returns a new word beggening with the index passed as parameter, ex: "testing".slice(2) returns "sting"
    - join()         => joins the result of map() with a seperated passed as argument, ex: ["hello", "world"].join("x") returns "helloxworld"
