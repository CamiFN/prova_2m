import HelloWorld from './HelloWorld'
import Button from './Button'
import HelloPerson from './HelloPerson';
import { useState } from 'react';
import './App.css'

function App() {
  const [nome, setNome] = useState("");

  const pessoas = [
    {
      nome: "Melisa",
      idade: 5,
      caracterista: "Extressada",
      foto: "https://picsum.photos/200"
    },
    {
      nome: "Rodrigo",
      idade: 12,
      caracterista: "Magro",
      foto: "https://picsum.photos/200"
    },
    {
      nome: "Uysi",
      idade: 24,
      caracterista: "Chato",
      foto: "https://picsum.photos/200"
    },
    {
      nome: "Millena",
      idade: 17,
      caracterista: "Maravilhosa",
      foto: "https://picsum.photos/200"
    },
  ]

  return (
    <div>
      <input type="text" onChange={(event)=> { setNome(event.target.value)  }}/>  
      <HelloWorld/>
      <Button/>
      {pessoas.map((pessoa, hey) =>{
      return<HelloPerson
      hey = { hey }
      nome = { pessoa.nome }
      idade = { pessoa.idade }
      caracterista = { pessoa.caracterista }
      foto = "https://picsum.photos/200" /> 
       })} 
  </div>
        )
  }

export default App
