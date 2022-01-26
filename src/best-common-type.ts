const mixedArray = ['jonathan', false, 33, 'jonathan'];

function isNumbersArray(array: any[]) {
    return array.every(item => typeof item === 'number')
}

function containsBooleans(array: any[]) {
    return array.some(item => typeof item === 'boolean');
}
