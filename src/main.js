
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

const listDataProgress = document.getElementById('showProgress');
const btnDataProgress = document.getElementById('btnProgress');

btnDataProgress.addEventListener ('click', (e) => {
  e.preventDefault();
  ();
  });

getDataProgress = () => {
    let dataProgress = new XMLHttpRequest();
    dataProgress.open('Get','../data/cohorts/lim-2018-03-pre-core-pw/progress.json');
    dataProgress.onload = addDataProgress;
    dataProgress.onerror = error;
    dataProgress.send();
}

const addProgress = (event) => {
  const listDataProgress = JSON.parse(event.target.responseText);
  for(let i=0;i<listdataProgress.length;i++)
  {
         let li = document.createElement('li');
         li.className = 'showProgress';
         li.innerText = listDataProgress[i].intro.percent;
         listDataProgress.appendChild(li);
  }  
}

/*
generation.addEventListener('change',function(e){
  if (generation.value === 'lim-2018-03-pre-core-pw') {
      showStudents.innerHTML= '';
      addStudents();
  }else{
      alert('Sin datos para mostrar');
  }

});*/