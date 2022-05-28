import React from "react";


const DescompositionsDashboard = ({ data, word, foundMessage }) => {
  return (
    <>
      <div>
        {foundMessage
          ? foundMessage
          : `Presiona un botón y obtén sus descomposiciones válidas`}
      </div>
      <div>
        {!data ? (
          !word ? (
            ""
          ) : (
            "Cargando..."
          )
        ) : (
          <ol>
            {data.map((perm, i) => (
              <li key={i}>{perm}</li>
            ))}
          </ol>
        )}
      </div>
    </>
  );
};

export default DescompositionsDashboard;
