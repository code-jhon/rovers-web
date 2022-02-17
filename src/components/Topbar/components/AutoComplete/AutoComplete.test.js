import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { AutoComplete } from './AutoComplete'


describe("AutoComplete", () => {

  const mockedProps = {
    rovers: [],
    search: "",
    setVisible: jest.mock()
  }
  it('renders autocomplete component' , () => {  
    render(<AutoComplete {...mockedProps} />)
    console.log( screen )
  })
})