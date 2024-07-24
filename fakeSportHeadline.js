// Function to generate random number.
// Number generated will be between 0 and max -1.
const getRandNum = max => Math.floor(Math.random() * max);

// Create objects to hold the data to be used to create the fake headlines
const f1 = {
  
  // F1 drivers. (Past, present and ridiculous!)
  drivers: ["Max Verstappen","Sergio Perez","Oscar Piastri","Lando Norris","Charles LeClerc","Nelson Piquet",
    "Niki Lauda","James Hunt","Lewis Hamilton","George Russell","Alexander Albon","Carlos Sainz","Fernando Alonso",
    "Lance Stroll","Nico Hulkeberg","Yuki Tsunoda","Oliver Bearman","You!!","Pierre Gasly","Kevin Magnussen",
    "My Mom!!","Alexander Albon","Esteban Ocon","Zhou Guanyu","John Watson","Valtteri Botas","Logan Sargeant","Damon Hill"],
  // Outcomes and results.
  results: ["finished last in","retired from","won","was disqualified from","finshed on the podium at",
    "came 5th in","came 6th at","came 7th in","finished outside the points yet again in","cruised to victory in",
    "clinched the championship with a 2nd place finish at","came 8th in","finished 9th in",
    "limped to a disappointing 15th place in","crashed out of"],  
  
  // GP races 
  gp: ["Bahrain","Saudi Arabian","Australian","Japanese","Chinese","Miami","Emilia-Romagna","Monaco","Canadian","Spanish",
    "Austria","British","Hungarian","Belgian","Netherlands","Italian","Azerbaijan","Singapore",
    "United States","Mexican","Brazilian","Las Vegas","Qatar","Abu Dhabi"],
  
  // F1 teams
  teams: ["Red Bull Racing","McLaren Mercedes","Ferrari","Mercedes","Aston Martin","Honda F1","Haas Ferrari",
    "Alpine Renault","Tyrrell Ford","Williams Mercedes","Sauber Ferrari","Arrows", "Hexagon F1","Brabham","Lotus"],
  
  // Method to generate and return a random headline.
  headline() {
    const driver = this.drivers[getRandNum(this.drivers.length)];
    const result = this.results[getRandNum(this.results.length)];
    const grandPrix = this.gp[getRandNum(this.gp.length)];
    const team = this.teams[getRandNum(this.teams.length)];

    // Format the headline for output.
    const headline = `In the world of Formula 1 today, ${driver} ${result} the ${grandPrix} Grand Prix driving for ${team}`;
    return headline;
  },
};

const wtaTennis = {
  
  // WTA Tennis Players.
  players: ["Maria Sakkari","Serena Williams","Venus Williams","You","Iga Swiatek","Sue Barker","Coco Gauff",
    "Jasmine Paolini","Jessica Pegula","Danielle Collins","Barbora Krejcikova","Jelena Ostapenko","Madison Keys",
    "Emma Navarro","Donna Vekic","Beatriz Haddad Maia","Caroline Garcia","Katie Boulter","Elise Mertens",
    "Karolina Pliskova","Sloane Stephens","Sofia Kenin","Paula Badosa","Martina Trevisan","Sara Errani",
    "Emma Raducanu","Heather Watson","Lauren Davis"],
  
  // Outcomes and results.
  results: ["beat","lost in straight sets to","thrashed","scraped a rare win over","retired injured in her match against",
    "came back to win after losing the first set to"],
  
  // Stages of a tournament.
  rounds: ["1st round","2nd round","3rd round","4th round","quarter final","semi final","final"],
  
  // Grand Slam Competitions.
  grandSlams: ["Championships at Wimbledon","US Open at Flushing Meadows","Australian Open",
    "French Open at Roland Garros"],
  
  // Method to generate and return a random headline.
  headline() {
    
    const player1 = this.players[getRandNum(this.players.length)];
    let player2 = '';
    
    // When selecting player2, ensure that player1 and player2 are not the same.
    do {
      player2 = this.players[getRandNum(this.players.length)];
    } while (player1 === player2)
    
    const result =  this.results[getRandNum(this.results.length)];
    const round = this.rounds[getRandNum(this.rounds.length)];
    const grandSlam = this.grandSlams[getRandNum(this.grandSlams.length)];

    // Format the headline for output.
    const headline = `In Womans Tennis today ${player1} ${result} ${player2} in the ${round} of the ${grandSlam}`;
    return headline;
  },
};

const atpTennis = {
  
  // ATP Tennis Players.
  players: ["Jannik Sinner","Novak Dkokovic","Roger Federer","Rafa Nadal","Andy Murray","Carlos Alcaraz",
    "Alexander Zverev","Daniil Medvedev","Grigor Dimitrov","Stefanos Tsitsipas","Taylor Fritz"],
  
  // Outcomes and results.
  results: ["beat","lost in straight sets to","thrashed","scraped a rare win over","retired injured in his match against",
    "came back to win after losing the first set to","came back to win after going down 2 sets to love to"],
  
  // Stages of a tournament.
  rounds: ["1st round","2nd round","3rd round","4th round","quarter final","semi final","final"],
  
  // Grand Slam Competitions.
  grandSlams: ["Championships at Wimbledon","US Open at Flushing Meadows","Australian Open",
    "French Open at Roland Garros"],
  
  // Method to generate and return a random headline.
  headline() {
    
    const player1 = this.players[getRandNum(this.players.length)];
    let player2 = '';
    
    // When selecting player2, ensure that player1 and player2 are not the same.
    do {
      player2 = this.players[getRandNum(this.players.length)];
    } while (player1 === player2)
    
    const result =  this.results[getRandNum(this.results.length)];
    const round = this.rounds[getRandNum(this.rounds.length)];
    const grandSlam = this.grandSlams[getRandNum(this.grandSlams.length)];

    // Format the headline for output.
    const headline = `In Mens Tennis today ${player1} ${result} ${player2} in the ${round} of the ${grandSlam}`;
    return headline;
  },
};

// Put each sport in an array for random selection.
const sports = [f1, wtaTennis, atpTennis];

// Select a random sport and get a random headline from the selected sport.
console.log( sports[getRandNum(sports.length)].headline());