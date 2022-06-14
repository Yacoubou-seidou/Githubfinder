const barreRech = document.getElementById("barre-rech");
const btnSend = document.getElementById("btn-send");
const searchResult = document.getElementById("search-result");
btnSend.addEventListener("click", lancerSearch);
function lancerSearch(event) {
  event.preventDefault();
  let nombre = 0;
  let adresse = "";
  let lesProj = "";
  const objetRecher = barreRech.value.trim();
  const turl = `https://api.github.com/users/${objetRecher}/repos?type=owner`;
  fetch(turl)
    .then((result) => result.json())
    .then((result) => {
      nombre = result.length;
      console.log(result);
      adresse = result;
      console.log(adresse);
      adresse.forEach((element) => {
        lesProj += `<li><a class="dropdown-item" target="_blank" href="${element.html_url}">${element.name}</a></li>`;
      });

      const zurl = `https://api.github.com/users/${objetRecher}`;
      fetch(zurl)
        .then((response) => response.json())
        .then((response) => {
          searchResult.innerHTML += `       <div class="col-8 d-flex my-2  lacarte">
                <img src="${response.avatar_url}" alt="" />
                <div class="col-4 gauche">
                  <p>Nom : ${response.login}</p>
                  <p>GitHub : <a target="_blank" href="${response.html_url}"class="bg-primary p-2 text-white lien" >link</a></p>
                  <p >Public Repos : <span class="bg-success text-white p-2">${nombre}</span> </p>
                </div>
          <div class="dropdown lescroll mt-3">
            <button
              class="btn lebutt dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Get Repos
            </button>
            <ul
              class="dropdown-menu dropdown-menu-warning lescroll"
              aria-labelledby="dropdownMenuButton2"
            >
            ${lesProj}
            </ul>
          </div>
              </div>`;
        });
    });
  barreRech.value = "";
}
//NarcisseObadiah
//Algaslass
