import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { AutoComplete } from './AutoComplete'
import { RoversContext } from '../../../../providers/RoversProvider'
import { mockRover } from '../../../../mocks/mocks'

describe("AutoComplete", () => {

  const mockedProps = {
    rovers: [],
    search: "",
    setVisible: jest.mock()
  }
  const mockedValues = {
    rovers: [], 
    fetched: false, 
    currentRover: {}, 
    setCurrentRover: jest.fn()
  }

  const mockedFilledProps = {
    rovers: mockRover,
    search: "",
    setVisible: jest.mock()
  }
  const mockedFilledValues = {
    rovers: mockRover, 
    fetched: true, 
    currentRover: mockRover[0], 
    setCurrentRover: jest.fn()
  }

  const setup = (values=mockedValues, customProps=mockedProps) => render(
    <RoversContext.Provider value={values}>
      <AutoComplete {...customProps} />
    </RoversContext.Provider>
  );

  test('renders component without results' , () => { 
    setup()
    expect(screen.queryByTestId('AutoComplete-container')).toBeTruthy()
    expect(screen.queryByTestId('rover-item')).toBeNull()
  })

  test('renders items', () => {
    setup(mockedFilledProps, mockedFilledValues)
    expect(screen.queryByTestId('rover-item-1')).toBeTruthy()
  })
})