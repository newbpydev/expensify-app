const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}`;

test("should add two numbers", () => {
  const result = add(3, 4);

  expect(result).toBe(7);
});

test('should return a greeting with a name', () => { 
  const greeting = generateGreeting("John");

  expect(greeting).toBe("Hello John")
 })
test('should return a greeting with no name', () => { 
  const greeting = generateGreeting();

  expect(greeting).toBe("Hello Anonymous");
 })