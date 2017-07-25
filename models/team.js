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
      return `<li> ${this.city} ${this.name} </li>`
    }

    static makeTeamsHTML(){
      return store.teams.map((team)=>{
          return team.makeLi();
        }
      ).join(' ')
    }
  }
}

let Team = createTeams()
