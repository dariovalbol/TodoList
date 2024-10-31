import './style.css'

const classNames=["container","search","li-container","empty","task-count"]

const alldivs = document.querySelectorAll("div")
alldivs.forEach((div, index) => {
  div.className = classNames[index]
});
const allspan = document.querySelectorAll("span")
const spannum = allspan[2]
let numtareas = 0
const ultareas = document.querySelector("ul")
const pnotarea = document.querySelector("p")
const imputtarea = document.querySelector("input")
const btnadd = document.querySelector("button")
btnadd.className="btn-add"
let tarea = ""
let iddelete = ""

btnadd.addEventListener("click",function(event){
  event.preventDefault()
  tarea=imputtarea.value
  if(tarea.length>0){
    modifyUl("añadir")
  }
})

const createLi = (text) => {
  const li = document.createElement("li");
  iddelete="li"+numtareas
  li.id=iddelete
  const ptarea= document.createElement("p")
  const spantarea = document.createElement("span")
    spantarea.textContent = text
    ptarea.addEventListener("click",()=>{
      if(spantarea.style.textDecoration.length==0){
        spantarea.style.textDecoration="line-through"
      }
      else{
        spantarea.style.textDecoration=""
      }
    })
  ptarea.appendChild(spantarea)
  const btndel= document. createElement("button")
    btndel.className="btn-delete"
    btndel.textContent="x"

  btndel.addEventListener("click",()=>{
    iddelete=li.id
    modifyUl("eliminar")
    })
  li.appendChild(ptarea);
  li.appendChild(btndel);
  return li;
};

const modifyUl = (action) => {
  if (action == "añadir"){
    numtareas++
    ultareas.appendChild(createLi(tarea))
    imputtarea.value = ""
    tarea = ""
  }
  else if (action == "eliminar") {
    let ilborrado = document.getElementById(iddelete)
    numtareas--
    ultareas.remove(ilborrado)
  }

  if(numtareas==0){
    pnotarea.textContent="You have no pending tasks."
  }
  else{
    pnotarea.textContent=""
  }
    
  allspan[1].textContent=numtareas
};

