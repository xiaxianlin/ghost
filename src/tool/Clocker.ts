let now: number = 0
const Clocker = {
    start() {
        if (now == 0) {
            now = Date.now()
            console.log('--- clocker start ---')
        } else {
            console.log('--- clocker is running ---')
        }
    },
    stop() {
        if (now === 0) {
            console.log('--- clocker not start ---')
        } else {
            let cur = Date.now()
            console.log('--- clocker stop ---')
            console.log(`total: ${cur - now} ms`)
            now = 0
        }
    },
}

export default Clocker
