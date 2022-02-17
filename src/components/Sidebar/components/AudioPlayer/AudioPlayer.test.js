import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { AudioPlayer } from './AudioPlayer'
import { mockRover } from '../../../../mocks/mocks'

describe('AudioPlayer', () => {
  const filledAudio = mockRover[0].gallery.audio

  const setup = (mockedAudio=filledAudio) => render(
    <AudioPlayer audio={mockedAudio} />
  );

  test('renders audio player', () => {
    setup()
    expect(screen.queryByTestId('AudioPlayer-container')).toBeTruthy()
  })

  test('renders nothing', () => {
    setup([])
    expect(screen.queryByTestId('AudioPlayer-container')).toBeNull()
  })
})
