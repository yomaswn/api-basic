# **api-basic**

| **Route**     | **HTTP**           | **Description**             |
| ------------- |:------------------:| ---------------------------:|
| /api/users    | GET                | Get all the users           |
| /api/users/:id| GET                | Get a single user           |  
| /api/users    | POST               | Create a user               |
| /api/users/:id| DELETE             | Delete a user               |
| /api/users/:id| PUT                | Update a user with new info |

### using password-hash
```
**installation**
npm install password-hash

**example**
var passwordHash = require('password-hash');
var hashedPassword = passwordHash.generate('password123');
console.log(hashedPassword); // sha1$3I7HRwy7$cbfdac6008f9cab4083784cbd1874f76618d2a97```
