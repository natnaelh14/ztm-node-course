function encrypt(data) {
    return 'Encrypted Data';
}

function send (url, data) {
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`)
}

module.exports = {
    send
}