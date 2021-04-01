const StringUtils = {
    idGenerator: (length: number) => {
        // 查表得知：
        // 数字0~9对应的ASCII码值是 48-57
        // 大写字母A-Z对应的ASCII码值是 65-90
        // 小写字母a-z对应的ASCII码值是 97-122
        // 定义一个空数组保存我们的密码
        let passArrItem = []

        // 定义获取密码成员的方法
        const getNumber = () => Math.floor(Math.random() * 10) // 0~9的数字
        const getUpLetter = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65) // A-Z
        const getLowLetter = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97) // a-z

        // 将获取成员的方法保存在一个数组中方便用后面生成的随机index取用
        const passMethodArr = [getNumber, getUpLetter, getLowLetter]

        // 随机index
        const getIndex = () => Math.floor(Math.random() * 3)

        // 从0-9，a-z，A-Z中随机获取一项
        const getPassItem = () => passMethodArr[getIndex()]()

        // 不多解释
        Array(length - 3)
            .fill('')
            .forEach(() => passArrItem.push(getPassItem()))

        const confirmItem = [getNumber(), getUpLetter(), getLowLetter()]

        // 加上我们确认的三项，从而使生成的密码，大写字母、小写字母和数字至少各包含一个
        passArrItem.push(...confirmItem)

        // 转为字符串返回
        return passArrItem.join('')
    },
}

export default StringUtils
