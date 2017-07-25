const store = {players: [], teams: []}


let giants = new Team("Giants", "New York")
let eagles = new Team("Eagles", "Philadelphia")
let redskins = new Team("Redskins", "Washington")
let cowgirls = new Team("Cowgirls", "Dallas")

let odb = new Player("Odell Beckham Jr", "Baton Rouge", "800", "WR", giants, 'http://assets.nydailynews.com/polopoly_fs/1.3351867.1500922977!/img/httpImage/image.jpg_gen/derivatives/article_750/giants-redskins-football.jpg')

let shep = new Player("Sterling Shepard", "Oklahoma city", "400", "WR", giants, "https://s.yimg.com/ny/api/res/1.2/bKcJDG.Mzj0qcX2uP4DdJw--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/sbnation.fantasy.vox.com/f54a0397653a7aebe4f811996b6d8318")

let bMarsh = new Player("Brandon Marshall", "Somewhere", "22", "WR", giants, "https://i.ytimg.com/vi/BRMp9NGX874/maxresdefault.jpg")

let zeke = new Player("Ezikiel Elliot", "Texas?", "4", "RB", cowgirls, "https://media.tmz.com/2017/07/19/0719-ezekiel-elliott-getty-4.jpg" )
let dez = new Player("Dez Bryant", "Texas?", "2", "WR", cowgirls, "https://media4.giphy.com/media/l0HluP3xZLyV637A4/200_s.gif")
let crowder = new Player("Jamison Crowder", "Somewhere?", "12", "WR", redskins, "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Jamison_Crowder.jpg/250px-Jamison_Crowder.jpg")
let dak = new Player("Dak Prescott", "Somewhere", "0", "QB", cowgirls, "http://images.performgroup.com/di/library/sporting_news/c3/cd/dak-prescott-cowboys-getty-ftr-121116_19nno1yviv3l2zxulq3d1jj52.jpg?t=-244472904&w=960&quality=70")
let jones = new Player("Matt Jones", "Somewhere", "10", "RB", redskins, "https://www.gannett-cdn.com/usatsimg/image/thumb/540-390nw/8821597.jpg")
function render(html, into){
  $(into).empty();
  $(into).append(html);
}
let eli = new Player("Eli Manning", "Tenesee?", "999", "QB", giants, "http://assets.nydailynews.com/polopoly_fs/1.1017593.1328502882!/img/httpImage/image.jpg_gen/derivatives/article_750/eli-trophy.jpg")

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

  $('body').on('click', '.top-3-btn', function(){
    teamID = parseInt(this.id.split('-')[2])
    players = store.players.filter((player)=>{
      return player.teamID === teamID
    });
    top3 = players.sort(function(a, b) {
      var pointsA = parseInt(a.points)
      var pointsB = parseInt(b.points)
      if (pointsA < pointsB) {
        return 1;
      }
      if (pointsA > pointsB) {
        return -1;
      }
      return 0;
    }).slice(0, 3)
    HTML = top3.map((player)=>{
      return player.makeCard();
    }).join(' ')
    HTML = `<div class="row" id="div-top-3-${teamID}"> ${HTML} </div>`
    $(this).parent().append(HTML);
    $(this).removeClass("top-3-btn")
    $(this).addClass("top-3-btn-clicked")

  })

  $('body').on('click', '.top-3-btn-clicked', function(){

    teamID = parseInt(this.id.split('-')[2])
    $(`#div-top-3-${teamID}`).remove()
    $(this).removeClass("top-3-btn-clicked")
    $(this).addClass("top-3-btn")
  })
})
