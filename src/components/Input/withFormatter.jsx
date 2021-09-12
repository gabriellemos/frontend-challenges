import React, { useCallback } from 'react'

const withFormatter = (Component, formatter) => {
  return ({ setValue, ...props }) => {
    const localSetValue = useCallback(
      (value) => {
        setValue(formatter(value))
      },
      [setValue]
    )

    return <Component {...props} setValue={localSetValue} />
  }
}

export default withFormatter
