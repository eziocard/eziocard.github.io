import "./App.css";
import Cards from "./components/Cards";
import todolist from "./assets/tasks/todo-list.png";
import portafolio from "./assets/tasks/portafolio.png";
import { useState } from "react";

type cardlistType = {
  title?: string;
  src?: string;
  pf?: string;
  href?: string;
};
function App() {
  const [cardlist] = useState<cardlistType[]>([
    {
      title: "Portafolio",
      src: portafolio,
      pf: "Entrega Portafolio",
      href: "https://portafolio.rjlopezdiaz.xyz/",
    },
    {
      title: "todo-list",
      src: todolist,
      pf: "Entrega todo-list",
      href: "https://todolist.rjlopezdiaz.xyz/",
    },
  ]);
  return (
    <main>
      <h1 id="titulo">Entregas</h1>
      <div id="container">
        {cardlist.map((e, index) => (
          <Cards
            key={index}
            title={e.title}
            src={e.src}
            pf={e.pf}
            href={e.href}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
