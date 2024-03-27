obj1 = {
    name: "Abhi",
    id: 3213,
    age: 22,
    surname: "Tiwari"
}

//1) Object.keys(objName) = ["K1","K2","K3"] // ie, array of all keys(as strings)
console.log(Object.keys(obj1)); // [ 'name', 'id', 'age', 'surname' ]

//2) Object.values() -> similar as 1(array of values as there own datatype)

//3) Object.entries()  = [["k1", v1], ["k2", v2], ["k3", v3]]
console.log(Object.entries(obj1)); //[ [ 'name', 'Abhi' ], [ 'id', 3213 ], [ 'age', 22 ], [ 'surname', 'Tiwari' ] ]

//4) ObjName.hasOwnProperty("keyName") -> returns true is "keyName" exists, else false
console.log(obj1.hasOwnProperty("Abhi")); //true