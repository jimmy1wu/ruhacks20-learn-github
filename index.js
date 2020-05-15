const ul = document.getElementById("people");

fetch("people.json")
  .then((response) => response.json())
  .then((data) => {
    data.people.forEach((person) => {
      const li = document.createElement("li");
      li.innerHTML = person;
      ul.appendChild(li);
    });
  });
