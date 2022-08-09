const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrNum = [];
    for (i = 0; i < expr.length / 10; i++) {
        arrNum.push(expr.slice(i * 10, (i + 1) * 10));
    }
    
    let arrMorse =[];
    arrNum.forEach(el => {
        let shortStr = el.slice(el.indexOf('1', 0));
        let morseStr = '';
        for (i = 0; i < (shortStr.length / 2); i++) {
            if (shortStr.slice(i * 2, (i + 1) * 2) === "*") {
                morseStr += ' '
            } else if (shortStr.slice(i * 2, (i + 1) * 2) === '10') {
                morseStr += '.';
            } else {
                morseStr += '-';
            }
        }
        arrMorse.push(morseStr);
    })
    let ArrWord = [];
    arrMorse.forEach(el => {
        if (MORSE_TABLE[el] === undefined) {
            ArrWord.push(' ');
        }
        ArrWord.push(MORSE_TABLE[el]);
    })
    return ArrWord.join('');    
}

module.exports = {
    decode
}