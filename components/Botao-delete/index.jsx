import React from 'react';
import './styles.css'; // Crie um arquivo CSS para estilizar o botão

function DeleteButton({ onClick }) {
  return (
    <button className="delete-button" onClick={onClick}>
      Apagar
    </button>
  );
}

export default DeleteButton;