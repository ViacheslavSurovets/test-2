import React, { FC, ReactNode } from 'react'
import { Image } from './styles'

export interface ImageContainerProps {
  imageUrl?:string;
  width?: number;
  height?: number;
  readonly background?: string;
  onContextMenu?: (prop:any) => any;
  onClick?: (prop:any) => any;
  shape?: 'circle' | 'rect';
  children?: ReactNode;
}

const ImageContainer: FC<ImageContainerProps> = ({ imageUrl, children, width, height, ...rest }) => (
  <Image background={ imageUrl } width={ width } height={ height }  { ...rest }>{children}</Image>
)

export default ImageContainer

