export function functionBiasa(a, b) {
    return a + b
}

export function functionCallback(a,b,callback) {
    var result = a + b
    
    if (typeof callback === 'function'){
        result = callback(a,b)
    }
    return result
}

export default {
    functionBiasa,
    functionCallback
}