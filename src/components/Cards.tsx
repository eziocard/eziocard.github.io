import "./styles/cardstyle.css";
type Props = {
  title?: string;
  src?: string;
  pf?: string;
};

function Cards({ title, src, pf }: Props) {
  return (
    <article>
      <div className="card">
        <img src={src} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{pf}</p>
          <a href="#" className="btn btn-primary">
            Ir a la Tarea
          </a>
        </div>
      </div>
    </article>
  );
}

export default Cards;
