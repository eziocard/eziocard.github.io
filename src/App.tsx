import "./App.css";
import Cards from "./components/Cards";
import todolist from "./assets/tasks/todo-list.png";
import portafolio from "./assets/tasks/portafolio.png";
import { useState } from "react";

type cardlistType = {
  title?: string;
  src?: string;
  pf?: string;
};
function App() {
  const [cardlist, setCardlist] = useState<cardlistType[]>([
    { title: "Portafolio", src: portafolio, pf: "Entrega Portafolio" },
    { title: "todo-list", src: todolist, pf: "Entrega todo-list" },
  ]);
  return (
    <main>
      <h1 id="titulo">Entregas</h1>
      <div id="container">
        {cardlist.map((e, index) => (
          <Cards key={index} title={e.title} src={e.src} pf={e.pf} />
        ))}
      </div>
    </main>
  );
}

export default App;
