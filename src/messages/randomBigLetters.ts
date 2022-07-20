function setCharAt(str: string, index: number, chr: string) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

function randomBigLetter(input: string) {
  if (input.length < 3) return input;
  const spaces = input.split(' ').length - 1;
  const randomLetters = spaces * 3;
  let output: string = input;

  for (let i = 0; i < randomLetters; i += 1) {
    let index = Math.floor(Math.random() * input.length);
    while (input.charAt(index) === ' ') {
      index = Math.floor(Math.random() * input.length);
    }
    const replacement = input.charAt(index).toUpperCase();
    output = setCharAt(output, index, replacement);
  }

  return input;
}

export default randomBigLetter;
