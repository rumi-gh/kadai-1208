// import {
//   BrowserRouter,
//   Router,
// } from "react-router-dom/cjs/react-router-dom.min";
// import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
// import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
// import { SearchInput } from "./components/molecules/SearchInput";
// import { UserCard } from "./components/organisms/user/UserCard";
// import { DafaultLayout } from "./components/templates/DafaultLayout";
// import { HeaderOnly } from "./components/templates/HeaderOnly";
import { Router } from "./router/Router";

import "./styles.css";

// const user = {
//   name: "いとう",
//   image: "https://source.unsplash.com/YCPkW_r_6uA",
//   email: "12345@example.com",
//   phone: "090-1111-2222",
//   company: {
//     name: "テスト株式会社",
//   },
//   website: "https://google.com",
// };

export default function App() {
  return (
    // <div className="App">
    // <BrowserRouter>
    //   {/* <HeaderOnly> */}
    //   <DafaultLayout>
    //     <PrimaryButton>テスト</PrimaryButton>
    //     <SecondaryButton>検索</SecondaryButton>
    //     <br />
    //     <SearchInput />
    //     <UserCard user={user} />
    //     {/* </div> */}
    //     {/* </HeaderOnly> */}
    //   </DafaultLayout>
    // </BrowserRouter>
    <Router />
  );
}
