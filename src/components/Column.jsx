import { words } from "../mock/data.js";

export default function Column({ title, loading }) {
  return (
    <>
      <div>
        <h2>{title}</h2>

        <div>
          {words
            .filter((item) => item.status == title)
            .map((item, i) =>
              loading ? <CardLoader /> : <Card item={item} key={i} />
            )}
        </div>
      </div>
    </>
  );
}
