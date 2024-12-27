let users = [{ id: 1, name: 'Venkat', course: 'Node', age:31 },
    { id: 2, name: 'Lavanya', course: 'React',age:32 },
    { id: 3, name: 'Teja', course: 'UI/UX', age:25},
    { id: 4, name: 'Shiva', course: 'Node', age:26 }];
const usersCopy=JSON.parse(JSON.stringify(users))
usersCopy.forEach((item)=>{
item.course='Node.js'
return item
})
console.log('Users:', JSON.stringify(users), 'UsersCopy', JSON.stringify(usersCopy))


const usersMap= users.map((item)=>{
return item.name
})
console.log('\n users',JSON.stringify(users),JSON.stringify(usersMap))


const filteredUsers=users.filter((item)=>{
   return item.course==='Node'
})
console.log('\n users', JSON.stringify(users),'filteredUsers', JSON.stringify(filteredUsers))

const findUser=users.find(user=>user.id===1)
console.log('Find user:', JSON.stringify(findUser))

const findIndexUser=users.findIndex(item=>item.id==1)
console.log('findIndexUser', JSON.stringify(findIndexUser))

users.forEach((item,index)=>{
console.log('item.name:', item.name)
console.log('index:',index)
})

let usersConcat= users.concat(usersMap)
console.log('users',users)
console.log('usersConcat', usersConcat)

let usersSpread=[...users,...usersMap]
console.log('users', users, '\n usersmap',usersMap, '\n usersSpread', usersSpread)

const inputs=[2,3,4,5]
const maxVal=inputs.reduce((accumulator, currentValue)=>{
return currentValue>accumulator?currentValue:accumulator
}, inputs[0])
console.log('maxVal:', maxVal)

const totalAge=users.reduce((total,item)=>{
return total+item.age
}, 0)
console.log('totalAge:', totalAge)

usersCopy.sort((item1,item2)=>item1.age-item2.age )
console.log('usersCopy', usersCopy)