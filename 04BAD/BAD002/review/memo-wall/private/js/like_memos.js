window.onload = async () => {
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("user_id");

  const res = await fetch(`/memos/like_memos?user_id=${id}`);
  const likedMemos = await res.json();
  console.log(likedMemos);
};
