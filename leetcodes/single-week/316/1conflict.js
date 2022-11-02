
/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
let haveConflict = function(event1, event2) {
    let start1 = event1[0], end1 = event1[1]
    let start2 = event2[0], end2 = event2[1]
    
    // return start1 >= start2 && start1 <= end2 ||
    //     end1 >= start2 && end1 <= end2 ||
    //     start2 >= start1 && start2 <= end1 ||
    //     end2 >= start1 && end2 <= end1

    return  !(start1 >= end2 || start2 >= end1)
};



module.exports = {
    haveConflict
}


console.log(haveConflict(["01:15","02:00"], ["02:00","03:00"]))
console.log(haveConflict(["01:00","02:00"], ["01:20","03:00"]))
console.log(haveConflict(["10:00","11:00"], ["14:00","15:00"]))

