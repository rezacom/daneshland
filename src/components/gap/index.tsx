import React from 'react'

interface IProps {
    size: string
}

const Gap: React.FC<IProps> = ({ size }) => {
    return (
        <div style={{ height: size }}></div>
    )
}

export default Gap;