/**
  * 
  * @param prices int整型一维数组 
  * @return int整型
  */
function maxProfit( prices ) {
    if(prices.length === 0 || prices.length === 1)  return 0

    let max = 0
    let partMin = 100000
    if(prices[0] <= prices[1]){
        partMin = prices[0]
    }

    for(let i = 1; i + 1 < prices.length; i++){
        if(prices[i] >= prices[i - 1] && prices[i] >= prices[i + 1]){
            max = Math.max(max, prices[i] - partMin)
        }
        else if(prices[i] <= prices[i - 1] && prices[i] <= prices[i + 1]){
            partMin = Math.min(partMin, prices[i])
        }
    }

    max = Math.max(max, prices[prices.length - 1] - partMin)

    return max
}
module.exports = {
    maxProfit : maxProfit
};