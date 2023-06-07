import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";
export function ItemDetail() {
  const param = useParams();
  const list_item = useSelector((state: IRootState) => state.todo);
  const item = list_item.todo.find((item) => item.id === parseInt(param.id!));
  console.log(item);

  return (
    <div>
      <b>item id</b>:{param.id}
      <div>
        <b>Name</b>: {item?.name.toUpperCase()}
      </div>
      <div>
        <b>Description</b>:{item?.description.toUpperCase()}
      </div>
    </div>
  );
}
