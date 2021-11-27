import fetch from "node-fetch";

// async/awaitで非同期処理の完了を待つ
// 関数定義にasyncをつける
// 関数実行時にawaitをつける
// awaitはasync付き関数ないでしか使えない
const getGitUsername = async () => {
  const url = "https://api.github.com/users/aokm";

  const json = await fetch(url)
    .then(res => {
      console.log("非同期処理成功!");
      return res.json();
    })
    .catch(error => {
      console.log("非同期処理失敗!", error);
      return null;
    });
  // return json.id;

  console.log(`idは${json.id}です`);
};

// getGitUsername().then(id => console.log(`idは${id}です`));

getGitUsername();
