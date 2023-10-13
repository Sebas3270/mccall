import { Button, Spacer } from '@nextui-org/react'
import React, { FC } from 'react'

interface Props {
    prevFunction?: () => void;
    nextFunction?: () => void;
    nextText?: string;
    nextDisabled?: boolean;
}

const NavigationFooter:FC<Props> = ({ prevFunction, nextFunction, nextText = 'Continuar', nextDisabled = false }) => {
  return (
    <>
      <Spacer y={3}/>
      <div className='flex flex-row justify-between'>
        { prevFunction 
          ? <Button onClick={() => prevFunction()}>Regresar</Button>
          : <Spacer/>
        }
        { nextFunction 
          ? <Button onClick={() => nextFunction()} disabled={nextDisabled}>{nextText}</Button>
          : <Spacer/>
        }
          
          
      </div>
    </>
  )
}

export default NavigationFooter