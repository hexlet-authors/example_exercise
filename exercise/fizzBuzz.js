/* eslint no-console: 0 */
// BEGIN
const fizzBuzz = () => {
  for (let i = 1; i <= 100; i += 1) {
    const output = `${i % 3 === 0 ? 'Fizz' : ''}${i % 5 === 0 ? 'Buzz' : ''}`;
    console.log(output === '' ? i : output);
  }
};

export default fizzBuzz;
// END
