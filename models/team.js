function createTeams() {
  let id = 0;

  return class {
    constructor (name, city){
      this.name = name
      this.city = city
      this.id = ++id
      store.teams.push(this)
    }

    makeLi(){
      return `<li> ${this.city} ${this.name} <a class="waves-effect waves-light btn top-3-btn right" id="top-3-${this.id}">Top 3 Players</a></li>`
    }

    static makeTeamsHTML(){
      return store.teams.map((team)=>{
          return team.makeLi();
        }).join(' ')
    }

    makeOpt(){
      return `<option value="${this.id}">${this.name}</option>`
    }

    static makeTeamsOptions(){
      return store.teams.map((team)=>{
          return team.makeOpt();
        }).join(' ')
    }

  }
}

let Team = createTeams()
