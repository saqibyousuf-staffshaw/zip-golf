import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode;
    className?:string
}

function Container({ children,className }: Props) {
    return (
        <div className='w-full h-full'>
            <div className={`mx-auto max-w-[1280px] xl:px-0 lg:px-6 px-3 ${className}`}>
                {children}
            </div>
        </div>
    )
}

export default Container