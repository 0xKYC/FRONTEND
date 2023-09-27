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
  redirect?: boolean;
  biggerImg?: boolean;
};
export const Service = ({
  title,
  description,
  img,
  href,
  biggerImg,
  redirect,
}: Props) => {
  if (redirect) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
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
      </a>
    );
  } else {
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
  }
};
