let a = [1, true]

function isString(a: unknown): a is string{
    return typeof a === 'string'
}

if(isString('harden')){

}

type SecondArg<F> = F extends (a: any, b: infer B) => any ? B : never
type F = typeof Array['prototype']['slice']
type A = SecondArg<F>