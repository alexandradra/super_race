document.addEventListener("DOMContentLoaded",
    function() {
        document.querySelector(".modal-btn").addEventListener("click", function() {
          document.querySelectorAll(".zou")[0].classList.toggle("slider");
          document.querySelectorAll(".zou")[1].classList.toggle("slider");
        });
    });
//classlist = pour ajouter ou supprimer classes
// document.addEventListener("DOMContentLoaded",
//     function() {
//         document.querySelector(".game_nav").addEventListener("click", function() {
//           document.querySelectorAll(".zou")[0].classList.toggle("slider");
//           document.querySelectorAll(".zou")[1].classList.toggle("slider");
//         });
//     });
