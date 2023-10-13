import { Spacer } from '@nextui-org/react';
import React, { FC, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren { 
  title: string;
}

const MainLayout:FC<Props> = ({ children, title }) => {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center p-5">
        <div className="flex flex-col max-w-3xl">
            <h1 className="font-monts text-3xl font-bold">{title}</h1>
            <Spacer y={5} />
            {children}
        </div>
    </div>
  )
}

export default MainLayout