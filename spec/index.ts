import { expect } from 'chai';
import { hello } from '../src/index';

describe('Test', () => {
  it('message', () => {
    const msg = hello();
    expect(msg.includes('Hello'));
  })
})
