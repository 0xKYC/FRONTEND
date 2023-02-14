import {
  StyledCard,
  StyledText,
  Heading,
  ImageWrapper,
  StyledImg,
  StyledTitle,
  Box,
} from "./styles";

interface Props {
  title: string;
  description: string;
  img?: string;
  tags: string[];
  href: string;
}
export const Service = ({
  title,
  description,
  img = "",
  tags,
  href,
}: Props) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <StyledCard>
        <Heading>
          <ImageWrapper>
            <StyledImg src={img} alt={title} />
          </ImageWrapper>
          <StyledTitle>{title}</StyledTitle>
        </Heading>
        <Box>
          <StyledText>{description}</StyledText>
        </Box>

        {/* <TagContainer>
        {tags.map((tag) => {
          return (
            <StyledTag key={tag}>
              <Text>{tag}</Text>
            </StyledTag>
          );
        })}
        <StyledLink href={href} target="_blank" rel="noreferrer">
          Read more
        </StyledLink>
      </TagContainer> */}
      </StyledCard>
    </a>
  );
};
