function dataHours(timestamp) {
    const date = new Date(timestamp);

    return `${date.getHours()}:${date.getMinutes()}`
}

export default dataHours;