
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





