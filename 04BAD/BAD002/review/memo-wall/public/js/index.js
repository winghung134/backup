window.onload = () => {
  initCreateMemoForm();
  initLoginForm();
  loadMemoData();

  const socket = io.connect();
  socket.on("create_memo", () => {
    loadMemoData();
  });
};

function initLoginForm() {
  const form = document.querySelector("#login-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = form.username.value;
    const password = form.password.value;
    const resp = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (resp.status === 200) {
      window.location = "/admin.html";
    } else {
      const data = await resp.json();
      alert(data.message);
    }
  });
}

async function loadMemoData() {
  console.log("loadMemoData");
  const resp = await fetch("/memos");
  const memos = await resp.json();
  let htmlStr = ``;
  for (const memo of memos) {
    const image = memo.image ? `<img src="/images/${memo.image}" width="50" alt="" />` : "";
    htmlStr += `<div class="memo-div" data-id="${memo.id}">
    <div class="memo">
      <div contenteditable="true">${memo.content}</div>
        ${image}
    </div>
    <div class="del-button memo-button">
      <i class="fa-solid fa-trash"></i>
    </div>
    <div class="edit-button memo-button">
      <i class="fa-regular fa-pen-to-square"></i>
    </div>
  </div>`;
  }
  document.querySelector(".memo-area").innerHTML = htmlStr;

  document.querySelectorAll(".edit-button").forEach((editBtn) =>
    editBtn.addEventListener("click", async (e) => {
      // const memoDiv = e.currentTarget.parentElement;
      const memoDiv = editBtn.parentElement;
      const memoId = memoDiv.dataset.id;
      const newContent = memoDiv.querySelector(".memo").textContent.trim();

      const resp = await fetch(`/memos/${memoId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: newContent }),
      });

      // if (resp.status == 200) {
      //   const result = await resp.json();
      //   alert(result.message);
      // } else {
      //   const result = await resp.json();
      //   alert(result.message);
      // }
      const result = await resp.json();
      alert(result.message);
    })
  );

  document.querySelectorAll(".del-button").forEach((delBtn) =>
    delBtn.addEventListener("click", async (e) => {
      const memoDiv = e.currentTarget.parentElement;
      const memoId = memoDiv.dataset.id;

      // /memos/3
      const resp = await fetch(`/memos/${memoId}`, {
        method: "DELETE",
      });

      const result = await resp.json();
      alert(result.message);

      if (resp.status === 200) {
        loadMemoData();
      }
    })
  );
}

function initCreateMemoForm() {
  document.querySelector("#create-memo-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;
    const content = form.content.value;
    const image = form.image.files[0];

    const formData = new FormData();
    formData.append("content", content);
    formData.append("image", image);

    const resp = await fetch("/memos", {
      method: "POST",
      body: formData,
    });
    const result = await resp.json();
    if (resp.status === 200) {
      alert("Success");
      form.reset();
    } else {
      alert(result.message);
    }
  });
}
