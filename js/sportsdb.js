

const loadPlayer = () => {
    const searchField = document.getElementById("searchField");
    const searchText = searchField.value;
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayPlayer(data));
}

const displayPlayer = player => {
    const playerContainer = document.getElementById("player_container");
    const players = player.teams;

    players.forEach(team => {
        console.log(team);
        const createDiv = document.createElement("div");
        createDiv.classList.add("player");
        createDiv.innerHTML = `
            <img style='margin-bottom: 10px;' src="${team.strTeamBadge}" alt="Stadium-Picture">
            <h2 style='margin-bottom: 10px;'>${team.strTeam}</h2>
            <p style='margin-bottom: 10px;'>${team.strStadiumDescription.slice(0, 200)}</p>
            <p><span style='font-weight: bold;'>Since: </span>${team.intFormedYear}</p>
            <p><span style='font-weight: bold;'>Stadium Capacity: </span>${team.intStadiumCapacity}</p>
            <p><span style='font-weight: bold;'>Country: </span>${team.strCountry}</p>
            <p><span style='font-weight: bold;'>Location: </span>${team.strStadiumLocation}</p>
            <p><span style='font-weight: bold;'>League: </span>${team.strLeague}</p>
            <p><span style='font-weight: bold;'>Short Name: </span>${team.strTeamShort}</p>
            <h4 style='margin: 10px 0px;'>Social Links</h4>
            <div class="social_links">
                <a href="${team.strFacebook}" target="_blank">Facebook</a>
                <a href="${team.strInstagram}" target="_blank">Instagram</a>
                <a href="${team.strTwitter}" target="_blank">Twitter</a>
                <a href="${team.strYoutube}" target="_blank">Youtube</a>
                <a href="${team.strWebsite}" target="_blank">Visit Officeal Website</a>
            </div>
        `;
        playerContainer.appendChild(createDiv);
    });
}