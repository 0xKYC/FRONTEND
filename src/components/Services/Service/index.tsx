import {
  StyledCard,
  StyledTag,
  StyledText,
  TagContainer,
  Heading,
  Text,
  StyledLink,
  ImageWrapper,
  StyledImg,
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
    <StyledCard>
      <Heading>
        <ImageWrapper>
          <StyledImg src={img} alt={title} />
        </ImageWrapper>
        <p>{title}</p>
      </Heading>
      <StyledText>{description}</StyledText>

      <TagContainer>
        {tags.map((tag) => {
          return (
            <StyledTag>
              <Text>{tag}</Text>
            </StyledTag>
          );
        })}
        <StyledLink href={href} target="_blank" rel="noreferrer">
          Read more
        </StyledLink>
      </TagContainer>
    </StyledCard>
  );
};
