import { FC } from 'react'
import { Form } from './styles'

interface CustomFormProps {
    onSubmit: (event: any) => any
}

const CustomForm:FC<CustomFormProps> = ( { children, ...rest } ) => (
    <Form { ...rest }>
        { children }
    </Form>
)

export default CustomForm

