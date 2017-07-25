const store = {players: [], teams: []}


let giants = new Team("Giants", "New York")
let eagles = new Team("Eagles", "Philadelphia")
let redskins = new Team("redskins", "Washington")

let odb = new Player("Odell Beckham Jr", "Baton Rouge", "800", "WR", giants, 'http://assets.nydailynews.com/polopoly_fs/1.3351867.1500922977!/img/httpImage/image.jpg_gen/derivatives/article_750/giants-redskins-football.jpg')

function render(html, into){
  $(into).empty();
  $(into).append(html);
}


$('document').ready(function(){
  render(Team.makeTeamsHTML(), '.teams-go-here');
  render(odb.makeCard(), '.players-go-here');

  $('body').on('click', '.card-revealer', function(){
    let cardID = `.cr-${this.id.split('-')[1]}`
    $(cardID).slideToggle();
  })
})
