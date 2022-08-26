function LeftRotateString(str, n)
{
    if(str == null)         return ""
    if(str.length === 0)    return ""
    const LEN = str.length
    n = n % LEN

    return str.substring(n) + str.substring(0, n)
}
module.exports = {
    LeftRotateString : LeftRotateString
};