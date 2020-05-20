const enhancer = require('./enhancer.js');
// test away!


describe("enhancer", ()=>{
//repair 
    it("a repair(item) method that should accept an object and return a new object with durability restored to 100", ()=>{
        expect (enhancer.repair({
            name: "hammer",
            durability: 5,
            enhancement: 20
        })
        ).toEqual({
            name: "hammer",
            durability: 100
        })
    })
    
    it("should accept an object and returns a new item object modified according to the rules defined by the client for success enhancement",()=>{
    
    })
    
    it("should accept an object and return a new item object modified according to the client's rule for failure enhancment",()=>{
    
    })
})