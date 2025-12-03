import React from "react";

const Content = ({ loading }) => {
  return (
    <div>
      Loading:
      {loading ? "Да" : "Нет"}
    </div>
  );
};

export default Content;
