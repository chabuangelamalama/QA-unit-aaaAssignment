
function greet(name) {
return name || "Guest";
}
test('returns Guest when name is empty', () => {
// Arrange
const name = "";
// Act
const result = "greet (name)";
// Assert
expect(result).toBe("Guest");
});



function toggle(value) {
return !value;
}

JavaScript
test('toggles boolean value', () => {
// Arrange
const input = 10;
// Act
const result = toggle(input);
// Assert
expect(result).toBe(false);
});



function addItem(arr, item) {
arr.push(item);
return arr;
}
test('adds item to array', () => {
// Arrange
const arr = ["Chabu", "Gabby", "Emma", "Kuda"];
// Act
const result = addItem(arr,"Rose");
// Assert
expect(result).toEqual(5);
});



function removeItem(arr, item) {
return arr.filter(i => i !== item);
}
test('removes item from array', () => {
// Arrange
const arr = ["Emma","Chabu","Rose","Gabby", "Kuda"];

// Act
const result = removeItem(arr, "Rose");
// Assert
expect(result).toEqual(4);
});



function isValidPassword(password) {
return password.length >= 6;
}
test('returns true for valid password length', () => {
// Arrange
const password = "guMgu2";
// Act
const result = isValidPassword(password);
// Assert
expect(result).toBe(true);
});






//test for password
function isValidPassword(password) {
return password.length >= 8;
}
test("returns false for invalid password"),()=>{
//Arrenge
const password= "12345";
//Act
const result = isValid(password);
//Assert
expect(result).toBe(false);
}



test("returns false for invalid password"),()=>{
//Arrenge
const password= "12345678";
//Act
const result = isValid(password);
//Assert
expect(result).toBe(true);
}


test("returns false for invalid password"),()=>{
//Arrenge
const password= "12345";
//Act
const result = isValid(password);
//Assert
expect(result).toBe(false);
}

test("returns false for invalid password"),()=>{
//Arrenge
const password= " ";
//Act
const result = isValid(password);
//Assert
expect(result).toBe(false);
}

test("returns true  for password with a space"),()=>{
//Arrenge
const password= "123 456";
//Ac
const result = isValid(password);
//Assert
expect(result).toBe(true);
}

//test for add function

function addItem(arr, item) {
arr.push(item);
return arr;
}
test('adds number to array of numbers', () => {
// Arrange
const arr = [1,2,3,4,,5];
// Act
const result = addItem(arr,6);
// Assert
expect(result).toEqual([1,2,3,4,5,6]);
});

test('adds item to empty array', () => {
// Arrange
const arr = [];
// Act
const result = addItem(arr,"Rose");
// Assert
expect(result).toEqual(["Rose"]);
});

test('adds item to a number to arry of Strings', () => {
// Arrange
const arr = ["Chabu", "Gabby", "Emma", "Kuda"];
// Act
const result = addItem(arr,2);
// Assert
expect(result).toEqual(["Chabu", "Gabby", "Emma", "Kuda" ,2 ]);
});
test('adds list in arry', () => {
// Arrange
const arr = [1,2,3,4,5,6];
// Act
const result = addItem(arr, 7,8,9);
// Assert
expect(result).toEqual([1,2,3,4,5,6,7,8,9]);
});
// remove function


test('removes item from array', () => {
// Arrange
const arr = ["Emma","Chabu","Rose","Gabby", "Kuda"];

// Act
const result = removeItem(arr, "Rose");
// Assert
expect(result).toEqual(4);
});


test('removes two item from array', () => {
// Arrange
const arr = ["Emma","Chabu","Rose","Gabby", "Kuda"];

// Act
const result = removeItem(arr, "Rose", "Chabu");
// Assert
expect(result).toEqual(["Emma","Gabby", "Kuda"]);
});


test('removes all items from array', () => {
// Arrange
const arr = ["Emma","Chabu","Rose","Gabby", "Kuda"];

// Act
const result = removeItem(arr, "Rose","Chabu","Kuda", "Emma","Gabby");
// Assert
expect(result).toEqual([]);
});


test('removes frst item from array', () => {
// Arrange
const arr = ["Emma","Chabu","Rose","Gabby", "Kuda"];

// Act
const result = removeItem(arr, "Emma");
// Assert
expect(result).toEqual(["Chabu","Rose","Gabby", "Kuda"]);
});







