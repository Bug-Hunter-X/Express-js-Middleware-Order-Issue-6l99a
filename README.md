# Express.js Middleware Order Bug
This repository demonstrates a common, yet subtle, bug in Express.js applications related to the order of middleware functions. Incorrect middleware order can lead to unexpected behavior, such as functions not executing as intended or errors not being properly handled.

## Bug Description
The `bug.js` file contains an Express.js application with middleware functions that are not ordered correctly. This incorrect ordering causes unexpected behavior in the application's response.

## Solution
The `bugSolution.js` file provides the correct ordering of middleware functions, resolving the unexpected behavior described above.  The solution demonstrates the importance of understanding the flow of middleware execution in Express.js.

## How to reproduce
1. Clone the repository
2. Navigate to the repository's directory
3. Run `node bug.js` to see the bug in action.
4. Run `node bugSolution.js` to see the correct behavior.