let size = 3;
let output = '';
for (let i = 0; i < size; i ++) {
    for (let h = 0; h < size; h ++) {
        (((i + h) % 2 == 0 ? output += "." : output += "^"))
    }
    output += '\n'
}
console.log(output);
