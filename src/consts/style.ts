import styled from "styled-components";
import Text from "../components/Text/Text";

export const ColorGroup = styled.div`
  padding: 1rem;
  margin: 2rem;
  color: #fff;
`;

export const ColorGroupHeader = styled(Text)`
  /* color: #fff; */
`;

export const ColorName = styled(Text)`
  font-size: 12px;
  font-weight: 500px;
  display: block;
  text-overflow: ellipsis;
  max-width: 80%;
`;

export const Color = styled.div<{ value: string }>`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  flex-shrink: 0;
  background: ${({ value }) => (value ? value : "#fff")};
`;

export const ColorBox = styled.div`
  display: flex;
  position: relative;
  gap: 10px;
  margin-bottom: 20px;
  width: 280px;
  background: #e5e5e5;
  padding: 10px;
  border-radius: 12px;
`;

export const ColorValue = styled(Text)``;

export const CopyBtn = styled.button`
  background: transparent;
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
`;

export const ColorDescription = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  gap: 1rem;
`;
