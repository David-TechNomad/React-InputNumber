import React, { useState, useMemo } from 'react'

export default function InputNumberFunction(props) {
  const [value, setValue] = useState(() =>
    'value' in props ? props.value : props.defaultValue
  )

  let val = useMemo(() => ('value' in props ? props.value : value), [
    props,
    value
  ])

  return (
    <>
      <input
        value={val}
        onChange={e => {
          !('value' in props) && setValue(e.target.value)
          props.onChange(e)
        }}
      />
    </>
  )
}