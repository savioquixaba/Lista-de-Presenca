import './styles.css'
import React, {useState} from 'react';
import  {useEffect} from 'react';
import Card from '../../components/Card';

function Home() {
  const [estudanteName, setEstudanteName] = useState();
  const [estudantes, setEstudantes] = useState([]);
  const [user, setUser] = useState({name: '', avatar: ''});

  function handleAddStudent() {
    
      const  newEstudante = {
        name: estudanteName,
        time: new Date().toLocaleTimeString('pt-br',{
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        }),
     };
    
    setEstudantes((prevState) => [...prevState,newEstudante])
    
  }

  function handleDelete_estudante(time){
    setEstudantes((prevState) => prevState.filter(estudante => estudante.time !== time)
  )}


  useEffect(()=> {
    fetch('https://api.github.com/users/Savioquixaba')
      .then(response => response.json())
      .then(data => {
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        })
      })
      
  
    },[]);
  return (
    <div className='container'>
    <header>
      <h1>Lista de presença</h1>
      <div>
        <strong>{user.name}</strong>
        <img src={user.avatar} alt="foto de perfil" />
      </div>
    </header>
    
    
    
    <input type="text" placeholder="digite algo..."
      onChange={e => setEstudanteName(e.target.value)}
    />
     <button type="button" className="botao-principal" onClick={handleAddStudent} >Adicionar</button>
    {
      estudantes.map((estudante)=> <Card key={estudante.time} name={estudante.name} time={estudante.time}  onDelete={() => handleDelete_estudante(estudante.time)}/>)
    }
    
    </div>
  )
}

export default Home;
