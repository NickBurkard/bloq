const number_names = [
    ':zero:',
    ':one:',
    ':two:',
    ':three:',
    ':four:',
    ':five:',
    ':six:',
    ':seven:',
    ':eight:',
    ':nine:'
];

const alphabetic = /^[a-zA-Z]$/;
const numeric = /^[0-9]$/;

function to_indicator(character) {
    if (alphabetic.test(character)) {
        return `:regional_indicator_${character}:`
    }

    if (numeric.test(character)) {
        let value = parseInt(character);
        return number_names[value]
    }

    return character
}

function concat(a, b) {
    if (a === ' ' || b === ' ') {
        return `${a}${b}`
    }

    return `${a} ${b}`
}

function bloq(text) {
    if (typeof text !== 'string') {
        return
    }

    let result = text
        .toLowerCase()
        .split('')
        .map(to_indicator)
        .reduce(concat);

    navigator.clipboard.writeText(result);
}
