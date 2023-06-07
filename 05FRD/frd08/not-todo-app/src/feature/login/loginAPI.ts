export async function loginUser(data: { username: string; password: string }) {
  const UserLogin = await fetch(
    `${process.env.REACT_APP_API_SERVER}/auth/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    }
  );
  const res = await UserLogin.json();
  return res;
}
