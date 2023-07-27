import { assert, describe, expect, it } from 'vitest'
import { math } from './App'
describe('APP', () =>{
  it('check calculator' , () => {
  expect(math(3,8 , '*')).toEqual(3006)
  })
})
