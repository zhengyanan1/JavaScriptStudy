function foo(name, age, sex){
    console.log(arguments)
    console.log(arguments.length)
}

foo("name", "age", "sex")
foo(1)


function func(...args){
    console.log(args)
    console.log(arguments, arguments.length)
}
func(1, 2, 3)