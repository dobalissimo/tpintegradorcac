import "./Members.css"

export const Members = () => {
  const members = [
    "Karina Soledad Meza - karinasolmeza83@gmail.com",
    "Maria Sol Arroyo - mariasolarroyoc@gmail.com",
    "Rodrigo Urquia - rodrigourq@gmail.com",
    "Cristian Flores - dobalissimo@gmail.com",
    "Maria Isabel Trettel - mariaisabeltrettel@gmail.com",
    "Rosmery Torres - rosmery.torres10@gmail.com",
    "Claudio Morales - mclaudiod@gmail.com",
    "Enzo Valverde - enzovalverde@gmail.com",
  ];

  return (
    <div className="members-container">
      <div className="members">
        <h1 className="titleMembers">Members G 9</h1>
        <ul>
          {members.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};