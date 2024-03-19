module.exports = {
    hello() {
        return {
            text: 'Hello Wordl!',
            views() {
                return {
                    text: 'sub query text', // this field is not required
                    subText: 'Hello from sub query'
                }
            }
        }
    }
}