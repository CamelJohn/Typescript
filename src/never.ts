function handleErrorTypes(error: { type: string } & Error): never {
    if (error.type === 'user Error') {
        throw new Error('user error');
    }

    if (error.type === 'server error') {
        throw new Error('server error');
    }

    else throw new Error('');
}