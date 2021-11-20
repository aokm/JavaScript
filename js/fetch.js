import fetch from "node-fetch";

// 非同期処理の完了を待たない
const getGitUsername = () => {
  const url = "https://api.github.com/users/aokm";

  fetch(url)
    .then(res => res.json())
    .then(json => {
      console.log("非同期処理成功!");
      return json.id;
    })
    .catch(error => {
      console.log("非同期処理失敗!", error);
      return null;
    });
};

const result = getGitUsername();
console.log(`idは${result}です`);
