type ID = string | number | null;

function handleId(id: ID) {
    if (!id) {
        return;
    }
    if (typeof id === 'string') {
        // ...
    }

    if (typeof id === 'number') {
        // ...
    }
}