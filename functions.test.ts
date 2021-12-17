const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('Array length check', ()=>{
        expect(shuffleArray([1,2,3,4,5])).toHaveLength(5)
    }),
    test('Array contents shuffled', ()=>{
        expect(shuffleArray([1,2,3,4,5])).not.toBe([1,2,3,4,5])
    })
    
})