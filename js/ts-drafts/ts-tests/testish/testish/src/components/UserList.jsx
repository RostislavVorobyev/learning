import { useEffect } from "react";

const UserList = () => {
  //   useEffect(async () => {
  //     const response = fetch("https://dummyapi.io/data/v1/user?limit=10", {
  //       method: "POST",
  //       headers: { "app-id": "613eff99ba934041b880f172" },
  //     });

  //     // const data = response.json();
  //     console.log("data");
  //   }, []);

  useEffect(async () => {
    const result = await fetch(
      "https://hn.algolia.com/api/v1/search?query=redux"
    );

    console.log(result.data);
  });

  return (
    <>
      <p>Ok</p>
    </>
  );
};

// export default function UserList() {
//   useEffect(() => {
//     // const response = await fetch("https://dummyapi.io/data/v1/user?limit=10", {
//     //   method: "POST",
//     //   headers: { "app-id": "613eff99ba934041b880f172" },
//     // });

//     // const data = response.json();
//     console.log("data");
//   }, []);

//   return (
//     <>
//       <p>Ok</p>
//     </>
//   );
// }

export default UserList;
