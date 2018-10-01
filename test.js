const longestword = require("./index");

test("longestword is a function", () => {
    expect(typeof longestword).toBe("function");
});

test("longest word returns a string value", () => {
    expect(typeof longestword("")).toBe("string");
});

test("longestword returns first string with highest number of characters", () => {
    expect(longestword("one three fives")).toBe("three");
});

test("longest word cannot contain punctuation", () => {
    expect(longestword("happy!!! Sad…???????????? watermelon ")).toBe("watermelon");
});
