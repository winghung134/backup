import { useQuery } from "@tanstack/react-query";
import { Item } from "./todoitem";

export function useFetched() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["todoItems"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_SERVER}/todo/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("refetching.....");
      const result = await res.json();

      return result.item;
    },
  });
  if (isLoading || error || !data || isFetching) {
    return [] as Array<any>;
  }
  // const result: { item: Array<Item>; msg: string } = await res.json();
  // console.log(result);
  return data as Array<any>;
}

export async function addItemDB(name: string, description: string) {
  const add = await fetch(`${process.env.REACT_APP_API_SERVER}/todo/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ name, description }),
  });
  const res = await add.json();
  console.log("check create response", res);
}

export async function renameDB() {}

export async function deleteItemDB(id: number) {
  const del = await fetch(`${process.env.REACT_APP_API_SERVER}/todo/remove`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ id }),
  });
  console.log("del", del);

  const res = await del.json();
  console.log("check delete api reutrn", res);
}

export async function renameItemDB(id: number, name: string) {
  const rename = await fetch(
    `${process.env.REACT_APP_API_SERVER}/todo/update`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ id, name }),
    }
  );
  const res =await rename.json()
  console.log("rename",res);
}
