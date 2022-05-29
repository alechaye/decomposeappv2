import React from "react";
import CircularProgress from '@mui/material/CircularProgress';


const DescompositionsDashboard = ({ data, word, foundMessage }) => {
  return (
    <>
      <div className="body">
        {foundMessage ? foundMessage : ``}
      </div>
      <div className="p8" />
      <div>
        {!data ? (
          !word ? (
            ""
          ) : (
            <CircularProgress color="primary" />
          )
        ) : (
          <div className="wordListWrapper">
            <div className="wordList">
              {data.map((perm, i) => (
                <div key={i} className="word">
                  {`${i+1}. ${perm}`}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DescompositionsDashboard;
