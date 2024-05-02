import React, { ReactElement } from 'react'
import { IconType } from 'react-icons'
import { BsDatabaseFillExclamation } from 'react-icons/bs'

interface NoDataProps {
    icon?: ReactElement<IconType>
    message: string
}

function NoData(props:NoDataProps) {
    return (
        <div className='flex h-full w-full items-center justify-center m-auto p-10'>
            <div className='flex flex-col items-center justify-center text-gray-500 dark:text-gray-400'>
                {props.icon ?? <BsDatabaseFillExclamation
                    size={50}
                    className='' />}
                <h3 className='text-lg mt-4'>{props.message}</h3>
            </div>
        </div>
    )
}

export default NoData
