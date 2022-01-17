import { CardContainer } from "./styles";

interface CardProps {
  width?: string;
  height?: string;
  children?: React.ReactNode;
  noShadow?: boolean;
}

const Card = ({children, width='auto', height='auto', noShadow=false}: CardProps) => {
  return (
    <CardContainer width={width} height={height} noShadow={noShadow}>
      {children}
    </CardContainer>
  )
}

export default Card;