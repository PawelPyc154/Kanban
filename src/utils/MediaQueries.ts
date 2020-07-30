const customMediaQuery = (maxWidth: number) => `@media (min-width: ${maxWidth}px)`;

const media = {
  custom: customMediaQuery,
  extraLarge: customMediaQuery(1200),
  desktop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
};

export default media;
