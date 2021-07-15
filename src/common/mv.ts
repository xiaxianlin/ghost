export function dot(u: number[], v: number[]) {
    if (u.length != v.length) {
        throw 'dot(): vectors are not the same dimension'
    }

    let sum = 0.0
    for (let i = 0; i < u.length; ++i) {
        sum += u[i] * v[i]
    }

    return sum
}

export function mix(u: number[], v: number[], s: number) {
    if (u.length != v.length) {
        throw 'vector dimension mismatch'
    }
    let result = []
    for (let i = 0; i < u.length; ++i) {
        result.push((1.0 - s) * u[i] + s * v[i])
    }
    return result
}

export function length(u: number[]) {
    return Math.sqrt(dot(u, u))
}
