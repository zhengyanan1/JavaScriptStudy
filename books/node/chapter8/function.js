
let fcontent = 'let name = harden; console.log(name + "--")'
let f = new Function('harden', fcontent)

f('aaa', "bbb")