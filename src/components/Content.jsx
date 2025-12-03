import styled from "styled-components";
import Button from "./Button";
import Column from "./Column";
import Loader from "./Loader";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 240px;
  gap: 24px;
  padding: 0 135px;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 30px;
  padding-top: 42px;
  overflow-x: scroll;
`;

const Content = ({ loading }) => {
  return (
    <Container>
      <ContentContainer>
        {["Новое", "В процессе", "Выучено"].map((title, i) => (
          <Column loading={loading} title={title} key={i} />
        ))}
      </ContentContainer>
    </Container>
  );
};

export default Content;
