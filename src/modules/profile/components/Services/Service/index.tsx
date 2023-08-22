import { Link } from "react-router-dom";

import {
  Box,
  Heading,
  ImageWrapper,
  StyledCard,
  StyledImg,
  StyledText,
  StyledTitle,
} from "./styles";

type Props = {
  title: string;
  description: string;
  img: string;
  href: string;
  biggerImg?: boolean;
};
export const Service = ({
  title,
  description,
  img,
  href,
  biggerImg,
}: Props) => {
  return (
    <Link to={href}>
      <StyledCard>
        <Heading>
          <ImageWrapper biggerImg={biggerImg}>
            <StyledImg src={img} alt={title} />
          </ImageWrapper>
          <StyledTitle>{title}</StyledTitle>
        </Heading>
        <Box>
          <StyledText>{description}</StyledText>
        </Box>
      </StyledCard>
    </Link>
  );
};
