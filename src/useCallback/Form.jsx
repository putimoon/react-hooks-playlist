import React, { memo } from 'react'

function Form({onSubmit}) {
  return (
    <div>Form</div>
  )
}

// memo prevents re-rendering if props dont change
export default memo(Form)