import styled from "styled-components";
import Loader from "./Loader";

const SCard = styled.article`
  width: 270px;
  height: 159px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background-color: ${({ $color }) => $color || "#ffffff"}; // ✅ Fallback
  border: 1px solid #101010;
  border-radius: 24px;
  font-size: 24px;
`;

const CardTitle = styled.div`
  color: ${(props) =>
    props.$open ? "#ffffff" : "#101010"}; // ✅ Логика исправлена
  font-size: ${(props) => (props.$open ? "24px" : "16px")};
`;

const CardBottom = styled.div`
  color: ${(props) => (props.$open ? "#ffffff" : "#101010")};
  font-size: ${(props) =>
    props.$date ? "12px" : "14px"}; // ✅ Логика исправлена
`;

const Card = ({ card }) => {
  return (
    <SCard>
      <CardTitle>{card.name}</CardTitle>

      {card.translation}
      {card.status}
      {card.deadline}
    </SCard>
  );
};

export default Card;
