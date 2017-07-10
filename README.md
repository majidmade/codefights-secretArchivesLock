# codefights-secretArchivesLock
My entry for codefights' first "Beautiful JavaScript" challenge.

- [The Official Announcement](http://blog.codefights.com/beautiful-javascript-challenge/)
- [The Challenge Itself](https://codefights.com/challenge/tuX9NefHfwnPBFZoW)

Here's the text of the challenge, in case those links ever break:

-------

CFBot stores all of her important information in the Secret Archives. CodeMaster is trying to pick the lock! The lock, a metal rectangle composed of movable cells, is unique and hard to pick. Some of the lock’s cells are occupied, and some are empty. The lock is unlocked when its occupied cells form a specific configuration.

CodeMaster’s plan is to apply magnets to the lock’s 4 sides (one side at a time) to get the cells aligned correctly. CodeMaster doesn’t have much time to try to pick the lock before CFBot finds him, and he doesn’t want to waste time trying out different sequences. So you’re going to help him by implementing a function that, given a sequence of operations, will output the final state of the lock.

![example](https://codefightsuserpics.s3.amazonaws.com/tasks/secretArchivesLock/img/example.png)

The lock is represented as a matrix. The lock’s occupied cells are represented by an uppercase English letter `A-Z` and its empty cells are represented by `.`. When CodeMaster puts a magnet on one of the lock’s sides, all the occupied cells shift toward that end of the lock.

The sequence of actions is a string that can contain the uppercase English letters `L` (left), `R` (right), `D` (down), and `U` (up), which represent the side of the lock that CodeMaster places the magnet on.
Given the initial state of the lock and a sequence of actions, your function should return the final state of the lock to the Secret Archives.

### Example

For the example shown above, we have
```javascript
lock = ["....",
        "AB..",
        ".C..",
        "...."]
```
and `actions = "RDL"`, so the output should be

```javascript
secretArchivesLock(lock, actions) = ["....",
                                     "....",
                                     "B...",
                                     "AC.."]
```

### Constraints

Time Limit:

`4000ms`

Guaranteed constraints:

`1 ≤ lock.length ≤ 300`

`1 ≤ lock[i].length ≤ 300`

`1 ≤ actions.length ≤ 50.`
