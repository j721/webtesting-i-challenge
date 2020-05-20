const enhancer = require('./enhancer.js');
// test away!

const item ={
    name: 'hammer',
    durability: 80, 
    enhancement: 12
}

describe("repair function", ()=>{
    it("a repair(item) method that should accept an object and return a new object with durability restored to 100", ()=>{
        expect(enhancer.repair(item)).toEqual({...item, durability: 100})
    })   
})


describe("success function", ()=>{
    it("enhancement should increase by 1 when enhancement level < 20",()=>{
        expect(enhancer.succeed(item)).toEqual({...item, enhancement: item.enhancement + 1 })
    })

    it("enhancement will not increase if enhancement level = 20",()=>{
        expect(enhancer.succeed({...item, enhancement: 20})).toEqual({...item, enhancement: 20})
    })

    it("durability should no decrease, even if enhancement level changes",()=>{
        expect(enhancer.succeed({...item, durability: item.durability}))
        .toEqual({...item, enhancement: item.enhancement + 1, durability: item.durability})
    })
})
    
    it("should accept an object and return a new item object modified according to the client's rule for failure enhancment",()=>{
    
    })