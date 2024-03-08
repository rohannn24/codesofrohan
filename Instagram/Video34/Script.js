const arr = ['rohan', 'aryan', 'vikash']
const realArr = arr.filter((e) => {
    if(e !== 'vikash'){
        return e;
    } 
}) 
console.log(realArr);