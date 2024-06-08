exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.strongify({
            name: 'LOMI',
            age: 22,
            email: 'thesecond@gmail.com'
        })
    }
}