import React from 'react'

// import { colors } from '../../styles/colors'
import { ButtonContainer } from './styles'

export default function Button(props: any) {
  return <ButtonContainer {...props}>{props.children}</ButtonContainer>
}

////testando outra forma de fazer mais complicada :)

// export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   cColor?: string
//   cBackgroundColor?: string
//   cBorderColor?: string
//   cBackgroundColorHover?: string
//   cMinWidth?: string
//   cMaxWidth?: string
//   cMaxWidthSM?: string
//   cMaxWidthMD?: string
//   cMaxWidthLG?: string
//   cMaxWidthXL?: string
//   cMaxWidthXXL?: string
//   children?: React.ReactNode
//   type?: any
//   onClick?: any
//   className?: string
// }

// const Button = ({
//   cColor = colors.BACKGROUND,
//   cBackgroundColor = colors.PRIMARY,
//   cBackgroundColorHover = colors.PRIMARYHOVER,
//   cBorderColor = colors.PRIMARY,
//   cMinWidth = 'initial',
//   cMaxWidth = 'initial',
//   cMaxWidthSM = 'initial',
//   cMaxWidthLG = 'initial',
//   cMaxWidthXL = 'initial',
//   cMaxWidthXXL = 'initial',
//   children,
//   type,
//   onClick,
//   className
// }: ButtonProps) => {
//   return (
//     <ButtonContainer
//       cColor={cColor}
//       cBackgroundColor={cBackgroundColor}
//       cBackgroundColorHover={cBackgroundColorHover}
//       cBorderColor={cBorderColor}
//       cMinWidth={cMinWidth}
//       cMaxWidth={cMaxWidth}
//       cMaxWidthSM={cMaxWidthSM}
//       cMaxWidthMD={cMaxWidthMD}
//       cMaxWidthLG={cMaxWidthLG}
//       cMaxWidthXL={cMaxWidthXL}
//       cMaxWidthXXL={cMaxWidthXXL}
//       type={type}
//       onClick={onClick}
//       className={className}
//     >
//       {children}
//     </ButtonContainer>
//   )
// }

// export default Button
