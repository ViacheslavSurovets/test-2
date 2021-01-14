export type numOrString = string | number

export type Prop<T extends object> = (items: T ) => numOrString

export interface sizeProp {
  readonly size: numOrString
}

export interface IconProps {
  width?: numOrString;
  height?: numOrString;
  color?: string;
  fill?: string;
}

export interface CustomInputWrapperProps {
  margin?: string;
  width?: string;
  marginTop?: string;
  marginBottom?: string;
}

export interface HrProps {
  marginTop?: string;
  marginBottom?: string;
}
