/* eslint no-console: 0 */
// BEGIN
const fizzBuzz = (begin, end) => {
  for (let i = begin; i <= end; i += 1) {
    const maybeFizz = i % 3 === 0 ? 'Fizz' : '';
    const maybeBuzz = i % 5 === 0 ? 'Buzz' : '';
    const output = `${maybeFizz}${maybeBuzz}`;
    console.log(output === '' ? i : output);
  }
};

export default fizzBuzz;
// END
