import React, { FC } from 'react'

interface Props {
    message: string;
}

const ErrorMessage:FC<Props> = ({ message }) => {
  return (
    <span className='text-red-500'>{message}</span>
  )
}

export default ErrorMessage