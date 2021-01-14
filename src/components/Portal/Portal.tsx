import React, { useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'

interface portalInterface {
  component: React.ElementType,
  nameOfClass: string
}

const Portal = ({ component: ComponentPortal, nameOfClass, ...rest }: portalInterface) => {
  const el = useMemo(() => (
    document.createElement('div')
  ), [])
  el.setAttribute('class', nameOfClass)
  useEffect(() => {
    document.body.appendChild(el)
    return () => {
      document.body.removeChild(el)
    }
  }, [el])

  return (
    createPortal(<ComponentPortal { ...rest } />, el)
  )
}

export default Portal
