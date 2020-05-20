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
    it("should accept an object and returns a new item object modified according to the rules defined by the client for success enhancement",()=>{
    
    })
    
    it("should accept an object and return a new item object modified according to the client's rule for failure enhancment",()=>{
    
    })