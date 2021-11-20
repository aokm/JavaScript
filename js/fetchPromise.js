import fetch from "node-fetch";

// Promiseで非同期処理の完了を待つ
const getGitUsername = () => {
  return new Promise((resolve, reject) => {
    const url = "https://api.github.com/users/aokm";

    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log("非同期処理成功!");
        return resolve(json.id);
      })
      .catch(error => {
        console.log("非同期処理失敗!", error);
        return reject(null);
      });
  });
};

getGitUsername().then(id => console.log(`idは${id}です`));
