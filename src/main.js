
//mostrar datos (manipulacion del XHR)

/*.............. Funcion para llamar lista de Usuarios..................*/
const listStudents = document.getElementById('list');
const btnStudents = document.getElementById('btnStudent');


btnStudents.addEventListener ('click', (e) => {
e.preventDefault();
getListStudent();
});

getListStudent = () => {
    let students = new XMLHttpRequest();
    students.open('GET', '../data/cohorts/lim-2018-03-pre-core-pw/users.json');
    students.onload = addStudents;
    students.onerror = error;
    students.send();
  }
   
const addStudents = (event) => {
   const usuarios =JSON.parse(event.target.responseText);
   for(let i=0;i<usuarios.length;i++)
     {
            let li = document.createElement('li');
            li.className = 'articleClass';
            li.innerText = usuarios[i].name;
            listStudents.appendChild(li);
     }  
}

const error = () =>  console.log ('Se ha presentado un error');

/*Funcion para llamar cohorts */
const btnCohorts = document.getElementById('btnCohorts');
const listCohorts = document.getElementById('listCohorts');

btnCohorts.addEventListener ('click', (e) => {
    e.preventDefault();
    getListCohorts();
    //createCohortsTable();
 });

getListCohorts = () => {
        let cohorts = new XMLHttpRequest();
        cohorts.open('GET', '../data/cohorts.json');
        cohorts.onload = addCohorts; 
        cohorts.onerror = error;
        cohorts.send();
      }

      const addCohorts = (event) => {
        const listCohort =JSON.parse(event.target.responseText);
        for(let i=0;i<listCohort.length;i++)
     {
            let li = document.createElement('li');
            li.className = 'cohortClass';
            li.innerText = listCohort[i].id;
            listCohorts.appendChild(li);
     }  
        
        }

/*const addCohorts = (event) => {
    const listCohort =JSON.parse(event.target.responseText);
    listCohort.forEach(cohor =>{
        let li = document.createElement('listCohorts');
        li.innerHTML = cohor.id;
        li.value = cohor.id;
        listCohorts.appendChild(li);
    })*/
     /*
      {
             let li = document.createElement('li');
             li.className = 'articleClass';
             li.innerText = usuarios[i].name;
             listStudents.appendChild(li);
      }   */ 


