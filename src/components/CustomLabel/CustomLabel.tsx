import { FC } from 'react'
import { Label } from './styles'


const CustomLabel:FC = ( { children, ...rest }) => (
    <Label { ...rest }>
        { children }
    </Label>
)

export default CustomLabel

