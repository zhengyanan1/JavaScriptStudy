function Sum_Solution(n)
{
    return n && (n + Sum_Solution(n - 1))
}

module.exports = {
    Sum_Solution : Sum_Solution
};

console.log(Sum_Solution2(1))