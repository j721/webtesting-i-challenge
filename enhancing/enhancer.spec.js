const enhancer = require('./enhancer.js');
// test away!

const item ={
    name: 'hammer',
    durability: 80, 
    enhancement: 12
}

// describe("repair function", ()=>{
//     it("a repair(item) method that should accept an object and return a new object with durability restored to 100", ()=>{
//         expect(enhancer.repair(item)).toEqual({...item, durability: 100})
//     })   
// })


// describe("success function", ()=>{
//     it("enhancement should increase by 1 when enhancement level < 20",()=>{
//         expect(enhancer.succeed(item)).toEqual({...item, enhancement: item.enhancement + 1 })
//     })

//     it("enhancement will not increase if enhancement level = 20 and no changes to durability of item",()=>{
//         expect(enhancer.succeed({...item, enhancement: 20})).toEqual({...item, enhancement: 20})
//     })

//     it("durability will not decrease, if enhancement level changes to  value < 20",()=>{
//         expect(enhancer.succeed({...item, durability: item.durability}))
//         .toEqual({...item, enhancement: item.enhancement + 1, durability: item.durability})
//     })
// })
    

describe("fail function",()=>{
    it("if enhancement level < 15, the durability of item should decrease by 5 ",()=>{
        expect(enhancer.fail(item)).toEqual({...item, durability: item.durability - 5 })
    })

    it("if enhancement level >= 15, the durability of the item object should decrease by 10",()=>{
        expect(enhancer.fail({...item, enhancement: 15 }))
        .toEqual({...item,  enhancement: 15, durability: item.durability -10})
    })

    it("if enhancement level > = 16, the enhancement level should decrease by 1, durability should decrease by 10" ,()=>{
        expect(enhancer.fail({...item, enhancement: 17})).toEqual({...item, enhancement: 16, durability: item.durability -10})
    })
})

// describe("get function",()=>{
//     it("if enhancement level = 0, name is not modified",()=>{
//         expect(enhancer.get({...item, enhancement: 0})).toEqual(item.name);
//     })

//     it("if enhancement level > 0, change the name to include [+ enhancement level number] before the item's name",()=>{
//         expect(enhancer.get({...item, enhancement: item.enhancement})).toEqual(`[+${item.enhancement}]${item.name}`)
//     })
// })