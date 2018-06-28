//* botones //*
// Función para mostrar lista de sedes
document.getElementById('sede').addEventListener('click', () => {
  let citys = document.getElementById('ciudad').style.display;
  if (citys == 'block') {
    document.getElementById('ciudad').style.display = 'none';
  }
  else {
    document.getElementById('ciudad').style.display = 'block';
  }
});


//* botones //*
// Función para mostrar lista de cohort
document.getElementById('cohorts').addEventListener('click', () => {
  let citys = document.getElementById('cohorts-l').style.display;
  if (citys == 'block') {
    document.getElementById('cohorts-l').style.display = 'none';
  }
  else {
    document.getElementById('cohorts-l').style.display = 'block';
  }
});



//* busqueda //*

//mostrar datos (manipulacion del XHR)

/*.............. Funcion para llamar lista de Usuarios..................*/

const listStudents = document.getElementById('list');
const btnStudents = document.getElementById('btnStudent');

btnStudents.addEventListener('click', (e) => {
  e.preventDefault();
  getListStudent();
});

getListStudent = () => {
  let students = new XMLHttpRequest();
  students.open('GET', '../data/cohorts/lim-2018-03-pre-core-pw/users.json');
  students.onload = addStudents;
  students.onerror = () => { console.log("error") };
  students.send();
}



// alert("hola");
//debugger

/* const addStudents = (event) => {
  const usuarios = JSON.parse(event.target.responseText);
  for (let i = 0; i < usuarios.length; i++) {
    let li = document.createElement('li');
    li.className = 'articleClass';
    li.innerText = usuarios[i].name;
    listStudents.appendChild(li);
  }
} */
const error = () => console.log('Se ha presentado un error');




/*Funcion para llamar cohorts*/
const btnCohorts = document.getElementById('btncohorts');
const listCohorts = document.getElementById('listcohorts');

btnCohorts.addEventListener('click', (e) => {
  e.preventDefault();
  getListCohorts();
});

getListCohorts = () => {
  let cohorts = new XMLHttpRequest();
  cohorts.open('GET', '../data/cohorts.json');
  cohorts.onload = addCohorts;
  cohorts.onerror = error;
  cohorts.send();
}

const addCohorts = (event) => {
  const listCohort = JSON.parse(event.target.responseText);
  listCohort.forEach(cohor => {
    let li = document.createElement('li');
    li.innerHTML = cohor.id;
    li.value = cohor.id;
    listCohorts.appendChild(li);
  })
}


/*Funcion para llamar user progresso*/

const addStudents = (event) => {
  console.log("test")
  const students = JSON.parse(event.target.responseText);
  const progress = new XMLHttpRequest();
  progress.open('GET', '../data/cohorts/lim-2018-03-pre-core-pw/progress.json');
  progress.onload = (event) => {
    const progress = JSON.parse(event.target.responseText);
    console.log(progress);
    console.log(students)
    
  };
  progress.send();
  
}

const obtuvoError = () => {
  console.log('hay un error')
}

let students = new XMLHttpRequest();
students.open('GET', '../data/cohorts/lim-2018-03-pre-core-pw/users.json');
students.onload = addStudents;
students.onerror = () => {
  console.log("error");
  

  console.log()
}
students.send();



