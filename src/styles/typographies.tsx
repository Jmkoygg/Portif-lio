import styled from "styled-components";
import { TypeTypographies } from "../types/typographies";

export const H1 = styled.h1<TypeTypographies>`
  font-weight: 600;
  line-height: 2rem;
  font-size: 3rem;
`;
export const H2 = styled.h2<TypeTypographies>`
  font-weight: 600;
  line-height: 2rem;
  font-size: 1.5rem;
`;

export const Span = styled.span<TypeTypographies>`
  font-weight: 500;
  line-height: 2rem;
  font-size: 1rem;
`;
export const P = styled.p<TypeTypographies>`
  font-weight: 600;
  line-height: 2rem;
  font-size: 1rem;
`;
