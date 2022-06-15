import counter from './index'

// init the unit Test file

// Test Successfully
describe('reducers', () => {
    describe('counter', () => {
        // 0
        it('should provide the initial state', () => {
            expect(counter(undefined, {})).toBe(0)
        })
        // 1 + 1 = 2
        it('should handle INCREMENT action', () => {
            expect(counter(1, {type: 'INCREMENT'})).toBe(2)
        })
        // 1 - 1 = 0
        it('should handle DECREMENT action', () => {
            expect(counter(1, {type: 'DECREMENT'})).toBe(0)
        })
        // 1
        it('should handle DECREMENT action', () => {
            expect(counter(1, {type: 'UNKNOWN'})).toBe(1)
        })
    })
})
