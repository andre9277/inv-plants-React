import {useState} from "react";


export const Procurar = () => {

    const [procura, setProcura] = useState<string>("")

    const plantas = [
      {name: "tulipa", cor:"amarela,vermelha" },
      {name: "rosa", cor: "vermelha"},
    ];

    const handleChange = (event:any) =>{
      setProcura(event.target.value)
    }

 
    return <div className="procurar">
              <input type ="text" onChange={handleChange}/>
              <button>Procurar</button>
              <h3>Cor disponivel: {plantas.map((plant) => plant.name === procura && <h6>{plant.cor}</h6>)}</h3> 
      </div>
  };