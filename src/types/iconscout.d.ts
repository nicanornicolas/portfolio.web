declare module '@iconscout/react-unicons' {
  import { ComponentType } from 'react'
  
  interface IconProps {
    size?: string | number
    color?: string
    className?: string
  }
  
  export const UilLinkedinAlt: ComponentType<IconProps>
  export const UilTwitterAlt: ComponentType<IconProps>
  export const UilGithubAlt: ComponentType<IconProps>
} 