// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "yash",
    "full name": "yash Patel",
    [mySym]: "mykey1",
    age: 18,
    location: "North York",
    email: "Yashp@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


// Object.freeze(JsUser)
JsUser.email = "yash@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());