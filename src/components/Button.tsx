import React from 'react'
import classNames from 'classnames'

type TypeProps = {
    className: string,
    outline: boolean,
    onClick: () => void,
    children: React.ReactNode | React.ReactChild
}

function Button({ onClick , className , outline , children}:TypeProps) {
    return (
        <button
            onClick={onClick}
            className={classNames('button', className, {
                'button--outline':outline
            })}
            >
            {children}
        </button>
    )
}

export default Button
