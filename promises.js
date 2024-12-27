const fsPromises = require('fs/promises')

fsPromises.readFile('test.txt', 'utf8').then((data) => {
    console.log('Data', data)
}).catch((err) => {
    console.log('Error:', err)
})

fsPromises.readFile('test2.txt', 'utf8').then((data) => {
    console.log('Data', data)
}).catch((err) => {
    console.log('Error:', err)
})

fsPromises.readFile('test.txt', 'utf8').then((data) => {
    console.log('Data1'+data)
     
    return  fsPromises.readFile('test2.txt', 'utf8')    
}).then((data2)=>{
console.log('Data2' +data2)
})
.catch((err) => {
    console.log('Error:', err)
})