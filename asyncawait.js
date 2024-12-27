const fsPromises = require('fs/promises')

const openFiles = (fileName) => {
    return new Promise((resolve, reject) => {
        fsPromises.readFile(fileName, 'utf8').then((data) => {
            console.log('Data', data)
            resolve(data)
        }).catch((err) => {
            console.log('Error:', err)
            reject(err)
        })
    })
}

const openFiles1 = (fileName) => {
    return new Promise((resolve, reject) => {
        fsPromises.readFile(fileName, 'utf8').then((data) => {
            console.log('1 Data', data)
            resolve(data)
        }).catch((err) => {
            console.log('1 Error:', err)
            reject(err)
        })
    })
}

const multipleFileOpen = async () => {
    try {
        const result = await openFiles('test.txt')
       // console.log("Test.txt", result)
        const result2 = await openFiles('test2.txt')
       // console.log("Test2.txt", result2)
        const result3 = await openFiles('test3.txt')
       // console.log("Test3.txt", result3)
    }
    catch (err) {
        console.log('Error', err)
    }
}

const multipleFileOpen1 = async () => {
    try {
        const result =  openFiles1('test.txt')
      //  console.log("Test.txt", result)
        const result2 =  openFiles1('test2.txt')
       // console.log("Test2.txt", result2)
        // const result3 = openFiles('test3.txt')
        // console.log("Test3.txt", result3)
    }
    catch (err) {
        console.log('Error', err)
    }
}

multipleFileOpen()
multipleFileOpen1()