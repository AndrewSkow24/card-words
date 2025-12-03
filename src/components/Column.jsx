import styled from "styled-components";
import { words } from "../mock/data.js";
import Loader from "./Loader.jsx";

const SColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CardsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Heading = styled.h2``;

export default function Column({ title, loading }) {
  return <SColumn>{loading ? <Loader /> : <Heading>{title}</Heading>}</SColumn>;
}
