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