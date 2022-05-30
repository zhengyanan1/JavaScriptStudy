let bytes = new Int8Array(32)
// let bytes = new Array(1024 * 1024)

console.log(bytes.length)

bytes[0] = -127   
bytes[1] = 127 // 0111 1111
// bytes[2] = 129 // 1000 0000
// console.log(bytes)
console.log(process.memoryUsage())
console.log(bytes)

console.log(bytes.buffer, bytes.byteOffset, bytes.byteLength, bytes.buffer.byteLength)

let ints = new Uint32Array(bytes.buffer)
console.log(ints)

let floats = new Float64Array(bytes.buffer)
console.log(floats)


let littleEndian = new Int8Array(new Int32Array([1]).buffer)[0] === 1
console.log(littleEndian)
console.log(new Int32Array([1]).buffer)


let view = new DataView(bytes.buffer, 0, 32)
view.getInt16(0)
view.setInt16(0, 90)