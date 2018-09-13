const baseURL = 'https://us.api.battle.net/wow/mount/?locale=en_US&apikey=s9q24tyvz9ft2x6497y82eb9y54bm458'
let url;

let wowMountsInfo
let creatureIdDisplay


fetch(baseURL)
    .then(function (result) {
        return result.json();
    }).then(function (json) {
        let wowMounts = json.mounts;
        wowMountsInfo = json.mounts;
        console.log(wowMountsInfo)
        for (i = 0; i < 15; i++) {
            console.log(wowMounts[i])
            document.getElementById('ddMounts').add(new Option(wowMounts[i]["name"]));
        }
    })

let mountImage = document.getElementById('imageDisplay');
document.getElementById("ddMounts").onchange = mountSelection;

function mountSelection() {
    for (j = 0; j < 15; j++) {
        if (wowMountsInfo[j]["name"] === this.value) {                           
        document.getElementById('can-fly').innerHTML = `${wowMountsInfo[j].name} (Can Fly): ${ wowMountsInfo[j].isFlying}`;
        }
    }
}
