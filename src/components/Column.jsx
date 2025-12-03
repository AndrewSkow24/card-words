import styled from "styled-components";
import { words } from "../mock/data.js";
import Loader from "./Loader.jsx";
import Card from "./Card.jsx";

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

const Column = ({ title }) => {
  const words_for_column = words.filter((item) => item.status == title);

  console.log(words_for_column);

  return (
    <SColumn>
      {title}
      <CardsContent>
        {words_for_column.map((item) => (
          <Card card={item} key={item.id}></Card>
        ))}
      </CardsContent>
    </SColumn>
  );
};

export default Column;
