{
    let a = 10;
    console.log("src-hello!");
    let Person;
    (function (Person) {
        Person[Person["name"] = 1] = "name";
        Person[Person["age"] = 2] = "age";
        Person[Person["gender"] = 3] = "gender";
    })(Person || (Person = {}));
}
