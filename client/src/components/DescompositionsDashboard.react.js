import React from "react";


const DescompositionsDashboard = ({ data, word, foundMessage, columns }) => {
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
          <ol style={{columns: columns}}>
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
