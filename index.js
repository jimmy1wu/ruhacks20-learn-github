const contributorsContainer = document.getElementById("contributors");

fetch("contributors.json")
  .then((response) => response.json())
  .then((data) => {
    data.contributors.forEach((username) => {
      const contributor = document.createElement("div");
      const profileLink = document.createElement("a");
      const profileImg = document.createElement("img");

      contributor.appendChild(profileLink);
      profileLink.appendChild(profileImg);

      profileLink.href = `http://github.com/${username}`;
      profileImg.classList.add("profile-img");
      profileImg.src = `http://github.com/${username}.png`;

      contributorsContainer.appendChild(contributor);
    });
  });
