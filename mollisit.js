// Define the createToken function
const createToken = (name, value, isGlobal) => {
  return {
    name: name,
    value: value,
    global: isGlobal
  };
};

// Example usage of the function
const token = createToken('authToken', 'abc123', true);
console.log(token);
// Output will be: { name: 'authToken', value: 'abc123', global: true }
