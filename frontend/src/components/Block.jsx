import React from 'react';

const Block = ({ name, value }) => {
  const style = {
    backgroundColor: value > 0 ? 'lightgreen' : 'lightred',
    width: '200px',
    height: '100px',
    margin: '10px',
    padding: '10px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={style}>
      <h2>{name}</h2>
      <h3>{value}</h3>
    </div>
  );
};

export default Block;
