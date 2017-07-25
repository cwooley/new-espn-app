function createPlayers(){
  let id = 0

  return class {
     constructor (name, hometown, points, position, team, imageURL){
       this.name = name
       this.hometown = hometown
       this.points = points
       this.position = position
       this.teamID = team.id
       this.id = ++id
       this.imageURL = imageURL
       store.players.push(this)
     }

     makeCard(){
       let team = store.teams.find((team)=>{
         return team.id === this.teamID
       })
       return ` <div class="card grey lighten-4 col s12 m6 l4" style="margin-left: 5px; width: 30%;">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="${this.imageURL}">
                </div>
                <div class="card-content" style="height: 100%;">
                  <span class="card-title flow-text grey-text text-darken-4">${this.name}<i class="material-icons right card-revealer" id="player-${this.id}">more_vert</i></span>
                  <p>${team.name}</p>
                </div>
                <div class="card-reveal z-depth-2 grey lighten-4 cr-${this.id}">
                  <ul class="flow-text">
                    <li>${this.hometown}</li>
                    <li>${this.points}</li>
                    <li>${this.position}</li>
                  </ul>
                </div>
              </div>`
     }

     static makePlayerCards(){
       return store.players.map((player)=>{
         return player.makeCard();
       }).join(' ')
     }
     static makeRowsOfCards(){
       let index = 0;
       let HTML = `<div class="row">`
       store.players.forEach((player)=>{
         if (index % 3 === 0){
           HTML += `</div> <div class="row">`
         }
         HTML += player.makeCard();
         index++
       })
       HTML += `</div>`

       return HTML

     }
  }

}

let Player = createPlayers()
