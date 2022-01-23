function cutArray(array: string[]) {
    if (array.length > 10) {
        return array.slice(0, 10);
    }
    return array;
}