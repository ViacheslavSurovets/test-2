import React, { memo } from 'react'

export const lazy = (path: string) => memo(React.lazy(() =>
  import(`../pages/${ path }`)))
