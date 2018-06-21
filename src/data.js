//mostrar datos (manipulacion del XHR)

/* Funcion para llamar lista de Usuarios*/

const form = document.getElementById('search-form')
const search = document.getElementById('search');
const responsecontainer = document.getElementById('response-container');
let searchedForText;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    responseContainer.innerHTML = '';
    searchedForText = search.value;
    getsearch();
    
// creamos las peticiones

        getsearch = () => {
        let searchStudent = new XMLHttpRequest();
        searchStudent.open('GET', '../data/cohorts/lim-2018-03-pre-core-pw/users.json');
        searchStudent.onload = addsearchStudent;
        searchStudent.onerror = error;
        searchStudent.send();
      }

      function error(){
          console.log('se ha presentado un error');
      }

      function addsearchStudent(){
          const data = JSON.parse(this.responseText);
          console.log(data)
      }

    


});

