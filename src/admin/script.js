const id = document.getElementById("id");
const password = document.getElementById("password");
const login = document.getElementById("login");

login.addEventListener("click", async () => {
  let checkResult;
  const response = await fetch("http://localhost:3005/checkAdmin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id.value,
      password: password.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      checkResult = data;
    });

  if (checkResult.isSuccess) {
    alert("로그인 성공");
    location.replace(checkResult.result);
  } else {
    alert("로그인 실패");
  }
});
