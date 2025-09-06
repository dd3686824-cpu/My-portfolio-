// Show selected skill in text instead of just alert

document.querySelectorAll(".skills div").forEach(skill => {

  skill.addEventListener("click", () => {

    document.getElementById("selected-skill").innerText =

      "You selected: " + skill.innerText;

  });

});