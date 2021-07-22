"use strict";
// import { hi } from "./m.js";
{
    let a = 10;
    console.log("src-hello!");
    let Person;
    (function (Person) {
        Person[Person["name"] = 1] = "name";
        Person[Person["age"] = 2] = "age";
        Person[Person["gender"] = 4] = "gender";
    })(Person || (Person = {}));
    //   console.log(hi);
}
