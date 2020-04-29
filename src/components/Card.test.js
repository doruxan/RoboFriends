import { shallow } from 'enzyme'
import React from 'react'
import Card from './Card'


it('is rendering a card component', () => {
    expect(shallow(<Card item={{name:'doruk', email:'doruxan@gmail.com'}} />)).toMatchSnapshot()
})