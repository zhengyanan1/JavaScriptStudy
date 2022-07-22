type MyObjet = {
    name: 'harden',
    sex: 'man'
}
type P = keyof MyObjet
type PP = {
    [attr in keyof MyObjet]?: MyObjet[attr]
}

let pp: PP ={
    name: 'harden',
    sex: 'man',
}

let wrapper = {
    ...pp,
    like: 'baseketball'
}

console.log(wrapper)

const enum MyNumber{
    First, Second
}

console.log(MyNumber.First)