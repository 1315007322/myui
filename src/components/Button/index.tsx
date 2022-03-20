import { Button } from 'antd'
import React from 'react'

export interface Props {
    text: string
}

export const Index = (props: Props) => {
    const { text } = props
    return (
        <Button>
            {text}
        </Button>
    )
}

Index.defaultProps = {
    text: '按钮'
}

