import React, { useCallback } from 'react'

const withPattern = (Component, pattern) => {
  return ({ setValue, ...props }) => {
    const localSetValue = useCallback(
      (value) => {
        setValue(value.replace(pattern, ''))
      },
      [setValue]
    )

    return <Component {...props} setValue={localSetValue} />
  }
}

export default withPattern
