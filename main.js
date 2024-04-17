const generarchistebtn = document.getElementById("generar_chiste")
let arrayChistes = JSON.parse(localStorage.getItem("chistes")) || []
const chistescontainer = document.createElement("div");
let chistesHTML = ""

const getElements = async()=>{
    try {
      res = await axios.get(`https://api.chucknorris.io/jokes/random`)
      chiste = res.data.value
      arrayChistes.push(chiste)
      localStorage.setItem( "chistes", JSON.stringify(arrayChistes))

      chistesHTML = "";
      
      for (let index = 0; index < arrayChistes.length; index++) {
        chistesHTML += `
                <div class="card m-5 d-flex border-primary mb-3">
                <div class="card-body">
                    <p>${arrayChistes[index]}</p>
                    <button class="btn btn-outline-danger" onclick="eliminarchiste(${index})">Eliminar</button>
                </div>
            </div>
        `;
        
      }
      
      chistescontainer.innerHTML = chistesHTML;
      
      
      document.body.appendChild(chistescontainer);
        } catch (error) {
        console.error(error);
        }
    }

const eliminarchiste = (posicionchiste) =>{
    arrayChistes.splice(posicionchiste,1)
    localStorage.setItem( "chistes", JSON.stringify(arrayChistes))
    chistesHTML = ""
    iniciarchistes()
    console.log(arrayChistes)
}

const iniciarchistes = () => {
        for (let index = 0; index < arrayChistes.length; index++) {
            console.log(arrayChistes[index])
            chistesHTML += `
                <div class="card m-5 d-flex border-primary mb-3">
                    <div class="card-body">
                        <p>${arrayChistes[index]}</p>
                        <button class="btn btn-outline-danger" onclick="eliminarchiste(${index})">Eliminar</button>
                    </div>
                </div>
            `;
          }
          chistescontainer.innerHTML = chistesHTML;
          document.body.appendChild(chistescontainer);

}

iniciarchistes()


generarchistebtn.addEventListener("click",()=>getElements())



  
 

