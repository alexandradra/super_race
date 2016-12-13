document.addEventListener("DOMContentLoaded",
    function() {
        document.querySelector(".start_btn").addEventListener("click", function() {
          document.querySelectorAll(".zou")[0].classList.toggle("slider");
          document.querySelectorAll(".zou")[1].classList.toggle("slider");
        });
    });
//classlist = pour ajouter ou supprimer classes
