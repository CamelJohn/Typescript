function log(message: string | any, type?: string) {
    if (type === 'error') {
        console.error(message);
    }

    if (type === 'table') {
        console.table(message);
    }

    if (!type) {
        console.log(message);
    }

}
