import React from 'react'

export function SectionDate({weather}) {
  return (
    <>
      {weather.data.map(data => (
        <div>{`Sol ${data.sol} : ${data.date}`}</div>
      ))}
    </>
  )
}
