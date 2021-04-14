const employee = {
    name: "Todd",
    streetAddress: "123 Kings Dr",
}
// updateEmployeeWithKeyAndValue(): this function should take in three arguments: a employee Object, a key and a value. This function should not mutate the employee; it should return a new Object that has an updated value for the key passed in.
function updateEmployeeWithKeyAndValue(obj, key, value){
    const newEmployeeObj = {...obj};
    newEmployeeObj[key] = value; 
    return newEmployeeObj;
}

// destructivelyUpdateEmployeeWithKeyAndValue(): this function should work the same as updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in.
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

//deleteFromEmployeeByKey(): this function should take in a employee Object and a key. It should delete the property with that key from the employee Object. This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair.
function deleteFromEmployeeByKey(obj, key) {
    const newEmployeeObj = {...obj}
    delete newEmployeeObj[key];
    return newEmployeeObj;
}

// destructivelyDeleteFromEmployeeByKey(): this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}