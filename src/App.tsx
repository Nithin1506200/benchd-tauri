import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import Footer from "./components/Footer";
import { execute } from "./db";
import Header from "./components/Header";
import ListUsers from "./components/users/Users";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }
  const [data, setData] = useState("");
  return (
    <>
      <Header />

      {/* <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet!</button>
      </form>

      <p>{greetMsg}</p>
      <div
        onClick={async (_) => {
          let data = await execute();
          setData(JSON.stringify(data));
        }}
      >
        clickkkk
      </div>
      <div>{data}</div> */}
      {/* <div>{data}</div> */}
      <ListUsers
        users={[
          {
            id: "12",
            name: "Nithin N",
            pet_name: "Nitxsn",
          },
          {
            id: "22",
            name: "Anish N",
            pet_name: "Anish",
          },
        ]}
      />
      <Footer
        selected="sdfa"
        list={[
          { id: "home", name: "Home" },
          { id: "users", name: "Users" },
        ]}
      />
    </>
  );
}

export default App;
