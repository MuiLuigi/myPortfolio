document.addEventListener("DOMContentLoaded", function() {
    var descriptionButton = document.querySelector(".description-btn");
    var descriptionButton2 = document.querySelector(".description-btn2");
    var descriptionButton3 = document.querySelector(".description-btn3");

    var descriptionDetail = document.querySelector(".projectDescription");
    var descriptionDetail2 = document.querySelector(".projectDescription2");
    var descriptionDetail3 = document.querySelector(".projectDescription3");

    function descriptionDetails(buttons, detail) {
        if (detail.style.display === "") {
            detail.style.display = "block";
            buttons.textContent = "Hide";
         }
         else {
            detail.style.display = "";
            buttons.textContent = "Show Description";
         }
      }

      descriptionButton.addEventListener("click", function() {
        descriptionDetails(descriptionButton, descriptionDetail);
      })

      descriptionButton2.addEventListener("click", function() {
        descriptionDetails(descriptionButton2, descriptionDetail2);
      })

      descriptionButton3.addEventListener("click", function() {
        descriptionDetails(descriptionButton3, descriptionDetail3);
      })
    });