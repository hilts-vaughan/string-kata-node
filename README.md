# string-kata-node

A solution to the String Kata in Node.js with TDD Mocha tests to back it up. You can read more about that here: http://osherove.com/tdd-kata-1/

The solution is implemented inside of Node to get me familar with using Mocha and the TDD process inside of a Node application. The entire exercise was completed in about ~35 minutes (all 9 quesitons) so some of the code is a bit sloppy but it shows fundamentals.

There's a template here but no sample solutions: https://github.com/ymartin/kata-node-string-calculator -- so this provides one. It's just a single exported function since an entire class is going to be overkill here. 

```
  calculator
    ✓ given no numbers, should just return 0
    ✓ given a single number, it should return the number itself
    ✓ given some random set of numbers, it should return the right sum
    ✓ give some numbers and a single one that is larger than 1000, it should be ignored
    ✓ given new lines a seperator, can handle the split as well
    ✓ accept some random delimitter input that allows you to seek and change the delimitter output
    ✓ accept some random delimitter with random length
    ✓ accept multiple delimitters of some random length given the amount of context changed
    ✓ should throw an exception when the input has multiple delimitters in a row
    ✓ should throw some exception if some number in the stream is negative


  10 passing (13ms)
```
