
export function randomBigLetter(input: string) {
    if (input.length < 3) return input;
    const spaces = input.split(' ').length - 1;
    let randomLetters = spaces * 3;

    for (var i = 0; i < randomLetters; i++) {
        let index = Math.floor(Math.random() * input.length);
        while (input.charAt(index) === ' ') {
            index = Math.floor(Math.random() * input.length);
        }
        let replacement = input.charAt(index).toUpperCase();
        input = setCharAt(input, index, replacement);
    }

    return input;
}

function setCharAt(str: string, index: number, chr: string) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}