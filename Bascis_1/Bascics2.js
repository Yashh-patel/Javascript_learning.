
// 1.var
//Scope: Function-scoped. A variable declared with var is available throughout the function in which it is declared. If declared outside a function, it is globally scoped.
//Hoisting: var declarations are hoisted to the top of their scope. This means the variable can be used before it is declared, but it will be undefined until the actual declaration is encountered.
//Re-declaration: You can re-declare the same variable in the same scope without an error.



// 2: let
//Scope: Block-scoped. A variable declared with let is only available within the block, statement, or expression where it is used.
//Hoisting: let declarations are hoisted but are not initialized. This means accessing the variable before the declaration will result in a ReferenceError.
//Re-declaration: You cannot re-declare the same variable in the same scope with let.


// 3:const
//Scope: Block-scoped. Similar to let, a variable declared with const is only available within the block, statement, or expression where it is used.
//Hoisting: const declarations are hoisted but are not initialized. Accessing the variable before the declaration results in a ReferenceError.
//Re-declaration: You cannot re-declare the same variable in the same scope with const.
//Assignment: Variables declared with const cannot be reassigned. However, if the variable holds an object, the properties of the object can be modified.

const accountId = 144553
let accountEmail = "yash@google.com"
var accountPassword = "12345"
accountCity = "Northyork"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Etobicoke"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])