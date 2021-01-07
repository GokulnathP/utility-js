const head = (list) => {
    if(list?.length > 0) {
        return list[0];
    }
    return null;
}

module.exports = head;