# Wordle

### Requirement

A function `wordle` that accepts two strings, `guess` and `answer`, each consisting of 5 letters, and returns feedback in the form of a clue to help the user solve the Wordle puzzle. The clue indicates whether each letter is correct, in the wrong position, or not present in the answer.

- 'g' (green) is returned when a letter is in the correct position.
- 'y' (yellow) is returned when a letter is in the answer but in the wrong position.
- 'b' (black) is returned when a letter is not in the answer at all.

## Output Example

### Example 1:
guess = "nnnnn", answer = "ynnnn"
The function will return 'b-g-g-g-g'.

### Example 2:
guess = "xxxzx", answer = "aaaax"
The function will return 'y-b-b-b-b'.

### Example 3:
guess = "xxxxx", answer = "xxxxx"
The function will return 'g-g-g-g-g'.

<br>

## Code Explanation

let result = ['b', 'b', 'b', 'b', 'b']; initializes an array with all 'b' (black).

The first for loop compares each letter of the guess with the answer. If a letter matches exactly, it is marked as 'g' (green), and for non-matches, a count of the letters in the answer is stored in answerCount where the letter will be the key and the number of times it appeared will be the value ex: 

```
say answer is "ssssh" and i (index) is on 3 right now, then

answerCount[answer[i]] += 1 just means => answerCount["s"] += 1  
```

<br>


The second for loop checks the letters that were not marked as green and evaluates whether they exist in the answer (but in a different position). If so, it marks them as 'y' (yellow).

<br>


### Example Usage
```console.log(wordle("xxxxx", "xxxxx"))```

### To Run

Go to terminal and run:
``` node jsWordle.js```
