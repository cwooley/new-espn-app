const store = {players: [], teams: []}


let giants = new Team("Giants", "New York")
let eagles = new Team("Eagles", "Philadelphia")
let redskins = new Team("redskins", "Washington")

let odb = new Player("Odell Beckham Jr", "Baton Rouge", "800", "WR", giants, 'http://assets.nydailynews.com/polopoly_fs/1.3351867.1500922977!/img/httpImage/image.jpg_gen/derivatives/article_750/giants-redskins-football.jpg')

let shep = new Player("Sterling Shepard", "Oklahoma city", "400", "WR", giants, "https://s.yimg.com/ny/api/res/1.2/bKcJDG.Mzj0qcX2uP4DdJw--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/sbnation.fantasy.vox.com/f54a0397653a7aebe4f811996b6d8318")

function render(html, into){
  $(into).empty();
  $(into).append(html);
}


$('document').ready(function(){
  $('.new-player-form').toggle();
  render(Team.makeTeamsHTML(), '.teams-go-here');
  render(Team.makeTeamsOptions(), '.team-select');
  render (Player.makePlayerCards(), '.players-go-here');

  $('body').on('click', '.card-revealer', function(){
    let cardID = `.cr-${this.id.split('-')[1]}`
    $(cardID).slideToggle();
  })

  $('body').on('click', '.show-new-player-form', function(){
    $('.new-player-form').slideToggle();
  })

  $('.submit-player').on('click', function(){

    let name = $('#name').val()
    console.log(name)
    let hometown = $('#hometown').val()
    let points = $('#points').val()
    let position = $('#position').val()
    let team = store.teams.find((team)=>{
      return `${team.id}` === $('.team-select option:selected').val()
    })
    let imageURL = $('#imageURL').val()
    let player = new Player(name, hometown, points, position, team, imageURL)
    render (Player.makePlayerCards(), '.players-go-here');
  })

})
