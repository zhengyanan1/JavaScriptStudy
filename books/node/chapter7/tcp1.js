const net = require('net')

let server = net.createServer(function(socket){
    socket.on('data', function(data){
        socket.write('你好\n')
    })

    socket.on('end', function(){
        console.log("close the connect\n")
    })
    
    socket.write("welcome to《深入浅出nodejs》\n")
})
server.listen(8124, function(){
    console.log("server bound")
})