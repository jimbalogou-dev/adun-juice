import engagements from "../data/engagements";
import "./Engagements.css";

// Les icônes (dessins SVG simples), choisies par leur nom.
const icones = {
  goutte: <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />,
  bouclier: (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  coche: <polyline points="20 6 9 17 4 12" />,
  coeur: <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />,
};

function Engagements() {
  return (
    <section id="engagements" className="engagements">
      <h2 className="invisible">Nos engagements</h2>
      <ul className="conteneur engagements__liste">
        {engagements.map((e) => (
          <li key={e.id} className="engagement">
            <span className="engagement__icone">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {icones[e.icone]}
              </svg>
            </span>
            <span>
              <strong>{e.titre}</strong>
              <small>{e.texte}</small>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Engagements;