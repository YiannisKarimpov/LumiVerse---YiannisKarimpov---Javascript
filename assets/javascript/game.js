
// --------------GLOBAL STATE -------------- //


// let lives = 3;
// let lumiPoints = 1000;
let correctStreak = 0;
let quizStage = 1;
let battleStage = 1;

let count = 0;

let questionsLeft = 10;




// -----------------GAME MODE CHARCTERS LIST------------

const heroes = {

  // LumiSquad Heroes

  Kyaazer:  { team: "LumiSquad",  rarity: "Legendary", hp:170, atk:35, def:20, mag: 30, critChance:0.10, critDamage:1.8, dodgeChance: 0.05, lifesteal: 0.05, unlocked: false, image: "assets/images/characters/lumi-squad/kyaazer-gallery/kyaazer-original.jpeg" },
  Inachu:   { team: "LumiSquad",  rarity: "Epic",      hp:150, atk:23, def:18, mag: 32, critChance:0.05, critDamage:1.5, dodgeChance: 0.03, lifesteal: 0,    unlocked: false, image: "assets/images/characters/lumi-squad/inachu-gallery/inachu-original.jfif" },
  Noooyer:  { team: "LumiSquad",  rarity: "Epic",      hp:145,  atk:25, def:13,  mag: 27, critChance:0.05, critDamage:1.5, dodgeChance: 0.03, lifesteal: 0,    unlocked: true,  image: "assets/images/characters/lumi-squad/noyer-gallery/noyer-3.jpeg" },
  Jynxie:   { team: "LumiSquad",  rarity: "Rare",      hp:145,  atk:21, def:7,  mag: 33, critChance:0.05, critDamage:1.5, dodgeChance: 0.03, lifesteal: 0,    unlocked: true,  image: "assets/images/characters/lumi-squad/jynxie-gallery/jynxie-original.jpeg" },
  Velmira:  { team: "LumiSquad",  rarity: "Rare",      hp:140,  atk:19, def:18, mag: 33, critChance:0.05, critDamage:1.5, dodgeChance: 0.03, lifesteal: 0,    unlocked: true,  image: "assets/images/characters/lumi-squad/velmira-gallery/velmira-original.jfif" },
 
  // GrimLight Heroes rarity: ""
 
  Nyxara:   { team: "GrimLight",  rarity: "Legendary", hp:165, atk:24, def:12, mag: 18, critChance:0.10, critDamage:1.8, dodgeChance: 0.05, lifesteal: 0.05, unlocked: false, image: "assets/images/characters/dark-squad/nyxara-gallery/nyxara-original.jfif" },
  Morrix:   { team: "GrimLight",  rarity: "Epic",      hp:150, atk:22, def:10, mag: 15, critChance:0.05, critDamage:1.5, dodgeChance: 0.03, lifesteal: 0,    unlocked: false, image: "assets/images/characters/dark-squad/morrix-gallery/morrix-original.jfif" },
  Seraphyne:{ team: "GrimLight",  rarity: "Epic",      hp:145,  atk:19, def:9,  mag: 24, critChance:0.05, critDamage:1.5, dodgeChance: 0.03, lifesteal: 0,    unlocked: true,  image: "assets/images/characters/dark-squad/seraphyne-gallery/seraphyne-original.jfif" },
  Pyrakon:  { team: "GrimLight",  rarity: "Rare",      hp:160, atk:26, def:8,  mag: 10, critChance:0.05, critDamage:1.5, dodgeChance: 0.03, lifesteal: 0,    unlocked: true,  image: "assets/images/characters/dark-squad/pyrakon-gallery/pyrakon-original.jfif" },
  Vael:     { team: "GrimLight",  rarity: "Rare",      hp:140,  atk:17, def:14, mag: 12, critChance:0.05, critDamage:1.5, dodgeChance: 0.03, lifesteal: 0,    unlocked: true,  image: "assets/images/characters/dark-squad/vael-gallery/vael-original.jfif" },
 
  // Void Choir Heroes rarity: ""
 
  Lucerith: { team: "Void Choir", rarity: "Legendary", hp:165, atk:34, def:22, mag: 29, critChance:0.10, critDamage:1.8, dodgeChance: 0.05, lifesteal: 0.05, unlocked: false, image: "assets/images/characters/void-squad/lucerith-gallery/lucerith-original.jfif" },
  Virelle:  { team: "Void Choir", rarity: "Epic",      hp:150, atk:23, def:17, mag: 32, critChance:0.05, critDamage:1.5, dodgeChance: 0.03, lifesteal: 0,    unlocked: false, image: "assets/images/characters/void-squad/virelle-gallery/virelle-original.jfif" },
  Erezia:   { team: "Void Choir", rarity: "Epic",      hp:145,  atk:25, def:20, mag: 29, critChance:0.05, critDamage:1.5, dodgeChance: 0.03, lifesteal: 0,    unlocked: true,  image: "assets/images/characters/void-squad/erezia-gallery/erezia-original.jfif" },
  Khalvex:  { team: "Void Choir", rarity: "Rare",      hp:155, atk:24, def:15,  mag: 24, critChance:0.05, critDamage:1.5, dodgeChance: 0.03, lifesteal: 0,    unlocked: true,  image: "assets/images/characters/void-squad/khalvex-gallery/khalvex-original.jfif" },
  Oryn:     { team: "Void Choir", rarity: "Rare",      hp:140,  atk:20, def:17, mag: 29, critChance:0.05, critDamage:1.5, dodgeChance: 0.03, lifesteal: 0,    unlocked: true,  image: "assets/images/characters/void-squad/oryn-gallery/oryn-original.jfif" },

  
};
// ----------------------END-----------------------------

// ---------------------ENEMIES/TIER LIST -------------------
const enemies = {
// --------------------TIER 1-------------------------------
  weak : [
  { name: "Void Fragment", hp:65,  atk:12, def:6,  mag: 10, image: "assets/images/characters/enemy/void-fragment-mob-original.jfif" },
  { name: "Grim Warden",   hp:85, atk:16, def:10, mag: 6,  image: "assets/images/characters/enemy/grim-warden.jfif" },
  { name: "Abyss Wisp",    hp:50,  atk:14, def:4,  mag: 12, image: "assets/images/characters/enemy/abyss-wisp.jfif" },
  { name: "Rift Crawler",  hp:75,  atk:15, def:7,  mag: 4,  image: "assets/images/characters/enemy/rift-crawler.jfif" }
],
// --------------------TIER 2-------------------------------
 elite: [
  { name: "Echo Knight",    hp:150,  atk:28, def:18,  mag: 12,  image: "assets/images/characters/enemy/void-elite.jfif" },
  { name: "Null Priestess",  hp:130,  atk:18, def:12,  mag: 32, image: "assets/images/characters/enemy/null-priestess.jfif" }
 ],
// --------------------TIER 3-------------------------------
 commander: [
  { name: "Dread Overseer",  hp:200,  atk:25, def:18,  mag: 20, image: "assets/images/characters/enemy/dread-overseer.jfif" }
 ],
// --------------------TIER 4-------------------------------
 boss: [
  { name: "Oblivion Herald",  hp:300,  atk:48, def:30,  mag: 45, image: "assets/images/characters/enemy/oblivion-herald.jfif" }
 ]
};
// ----------------------------END----------------------------

let player;
let enemy;


// -----------------




let currentQuizStageQuestions = [];
let currentQuestionIndex = 0;
let currentQuestion = null;

// testing
// let btnBonus = document.getElementById("bonus");


// ----

const gameState = {
    mode: "quiz",
    lives: 3,
    lumiPoints: 1000,
    correctStreak: 0,
    correctAnswer: 0,
    questionsLeft: 10
    
};




// ----------------UI FUNCTION ------------------//

function updateHUD() {
  console.log("HUD Running");
    document.getElementById("lives").textContent = gameState.lives;
    document.getElementById("lumiPoints").textContent = gameState.lumiPoints;
    document.getElementById("streak-points").textContent = gameState.correctStreak;
    document.getElementById("correct-answers").textContent = gameState.correctAnswer;
    // document.getElementById("question-number").textContent = gameState.questionNumber;
    // document.getElementById("difficulty-mode").textContent = gameState.difficulty;
    // document.getElementById("stage-number").textContent = showQuizStageIntro[quizStage];





    // in progress
    document.getElementById("collect-clicks").textContent = gameState.count;
   //------------------------------ 
}
// ------------------END OF UI---------------------//


//  const showQuizStageIntro = {
//     1: "Stage 1 Foundations of Light🌇",
//     2: "Stage 2 Shadows Rising🌑",
//     3: "Stage 3 Echoes of the Void🌌" 
//   };


  
//------------------ work under progress ------------//







// ---------------------------------------------------

const maxLives = 6;




// -----------START QUIZ BUTTON------------------//

document.getElementById("start-quiz").addEventListener("click", () => {
      quizStage = 1;
      gameState.lives = 3;
      gameState.correctAnswer = 0; 
      gameState.correctStreak = 0; 
      gameState.questionsLeft = 10;
      // gameState.count = 0;
      

      updateHUD();
      document.getElementById("quiz").style.display= "block";
  document.getElementById("hero-selection").style.display= "none";
  document.getElementById("battle").style.display= "none";
      startStage();
    });

document.getElementById("start-battle").addEventListener("click", () => {
  battleStage = 1;
  gameState.lives = 3;
  gameState.correctAnswer = 0; 
  gameState.correctStreak = 0; 
  gameState.questionsLeft = 10;
  gameState.lumiPoints = 1000;

  updateHUD();
  document.getElementById("quiz").style.display= "none";
  document.getElementById("hero-selection").style.display= "block";
  document.getElementById("battle").style.display= "none";

  renderHeroSelection();
  
});

// document.getElementById("start-quiz-nav").addEventListener("click", ()=> {
//   startStage("stage1");
// });

// -------------START GAME BUTTON----------------

// document.getElementById("start-game").addEventListener("click", () => {
//   gameState.lives = 3;
//   gameState.correctAnswer = 0; 
//   gameState.correctStreak = 0; 
//   gameState.questionsLeft = 10;
//   gameState.count = 0;

//   document.getElementById("quiz").style.display= "none";
//   document.getElementById("hero-selection").style.display= "block";
//   document.getElementById("battle").style.display= "none";

//   updateHUD();
//   renderHeroSelection();
// });







// ---------------QUIZ QUESTIONS POOL---------------- //

let quizData = {
    quizStage1: [
        {
      id: 1,
      question: "What is the Light-aligned hero team called?",
      answers: ["The Dawn Guard", "The LumiSquad", "The Starbound"],
      correct: 1
    },
    {
      id: 2,
      question: "Kyaazer belongs to which team?",
      answers: ["The GrimLight", "The Void Choir", "The LumiSquad"],
      correct: 2
    },
    {
      id: 3,
      question: "What is Kyaazer’s title?",
      answers: ["The Burning Titan", "The Fallen Star", "The First Silence"],
      correct: 1
    },
    {
      id: 4,
      question: "Who is known as The Moon Sentinel?",
      answers: ["Noooyer", "Inachu", "Velmira"],
      correct: 1
    },
    {
      id: 5,
      question: "What rarity is Inachu?",
      answers: ["Legendary", "Rare", "Epic"],
      correct: 2
    },
    {
      id: 6,
      question: "Who is called The Sparkbearer?",
      answers: ["Noooyer", "Jynxie", "Pyrakon"],
      correct: 0
    },
    {
      id: 7,
      question: "Jynxie is known as?",
      answers: ["The Dreamkeeper", "The Glitch in Reality", "The Velvet Shadow"],
      correct: 1
    },
    {
      id: 8,
      question: "Which LumiSquad hero is Rare?",
      answers: ["Kyaazer", "Velmira", "Inachu"],
      correct: 1
    },
    {
      id: 9,
      question: "What is the Dark-aligned team called?",
      answers: ["The Night Choir", "The GrimLight", "The Shadow Pact"],
      correct: 1
    },
    {
      id: 10,
      question: "Nyxara belongs to which team?",
      answers: ["The LumiSquad", "The GrimLight", "The Void Choir"],
      correct: 1
    },
     {
      id: 11,
      question: "Nyxara’s title is?",
      answers: ["The Velvet Shadow", "The Silent Wing", "The Beautiful Lie"],
      correct: 0
    },
    {
      id: 12,
      question: "What rarity is Nyxara?",
      answers: ["Epic", "Rare", "Legendary"],
      correct: 2
    },
    {
      id: 13,
      question: "Which hero is known as -The Time Breaker-?",
      answers: ["Morrix", "Seraphyne", "Lucerith"],
      correct: 0
    },
    {
      id: 14,
      question: "Pyrakon’s title suggests control over?",
      answers: ["Ice", "Fire", "Wind"],
      correct: 1
    },
    {
      id: 15,
      question: "Vael is known as?",
      answers: ["The Silent Wing", "The War Apostole", "The Abyss Archivist"],
      correct: 0
    },
    {
      id: 16,
      question: "Which team represents the Void?",
      answers: ["The GrimLight", "The Void Choir", "The Lumisquad"],
      correct: 1
    },
    {
      id: 17,
      question: "Who is -The First Silence-?",
      answers: ["Virelle", "Lucerith", "Erezia"],
      correct: 1
    },
    {
      id: 18,
      question: "What rarity is Lucerith?",
      answers: ["Rare", "Epic", "Legendary"],
      correct: 2
    },
    {
      id: 19,
      question: "Which hero is called -The Mirror Saint-?",
      answers: ["Khalvex", "Virelle", "Oryn"],
      correct: 1
    },
    {
      id: 20,
      question: "Erezia is known as?",
      answers: ["The Thought Keeper", "The Dreamkeeper", "The Beautiful Lie"],
      correct: 0
    },
     {
      id: 21,
      question: "Khalvex’s title suggests?",
      answers: ["Peace", "War", "Knowledge"],
      correct: 1
    },
    {
      id: 22,
      question: "Oryn is called?",
      answers: ["The Silent Wing", "The Abyss Archivist", "The Sparkbearer"],
      correct: 1
    },
    {
      id: 23,
      question: "How many heroes are in each team?",
      answers: ["3", "5", "7"],
      correct: 1
    },
    {
      id: 24,
      question: "What is the name of the universe?",
      answers: ["AstraVerse", "LumiVerse", "Voidfall"],
      correct: 1
    },
    {
      id: 25,
      question: "Which world belongs to the LumiSquad?",
      answers: ["GrimLight Zones", "Halcyon City", "The Void Realm"],
      correct: 1
    },
    {
      id: 26,
      question: "Halcyon City's main mood is?",
      answers: ["Unsettling", "Hopeful", "Hostile"],
      correct: 1
    },
    {
      id: 27,
      question: "GrimLight Zones are best described as?",
      answers: ["Warm and welcoming", "Colorful and chaotic", "Cold and tactical"],
      correct: 2
    },
    {
      id: 28,
      question: "Which realm feels endless and abstract?",
      answers: ["Halcyon City", "Ancient Sanctums", "The Void Realm "],
      correct: 2
    },
    {
      id: 29,
      question: "The Liminal Fracture represents?",
      answers: ["Perfect balance", "Reality breaking down", "A safe haven"],
      correct: 1
    },
    {
      id: 30,
      question: "Ancient Sanctums are mainly used for?",
      answers: ["Warfare", "Lore and Prophecy", "Commerce"],
      correct: 1
    },
    ],

    quizStage2: [
    {
       id: 31, 
       question: "Which LumiSquad hero is most tied to dreams?",
       answers: ["Velmira", "Jynxie", "Noooyer"] ,
       correct: 0

    },
    {
       id: 32, 
       question: "Why is Kyaazer considered Legendary?",
       answers: ["Age", "Power and symbolic fall", "Popularity"] ,
       correct: 1

    },
    {
       id: 33, 
       question: "Which GrimLight hero manipulates time?",
       answers: ["Vael", "Morrix", "Pyrakon"] ,
       correct: 1

    },
    {
       id: 34, 
       question: "“The Beautiful Lie” implies?",
       answers: ["Strength", "Deception", "Chaos"] ,
       correct: 1

    },
    {
       id: 35, 
       question: "Which Void hero focuses on memory and records?",
       answers: ["Khalvex", "Oryn", "Virelle"] ,
       correct: 1

    },
    {
       id: 36, 
       question: "Why is Jynxie classified as Rare?",
       answers: ["Weakness", "Unstable abilities", "Inexperience"] ,
       correct: 1

    },
    {
       id: 37, 
       question: "Which team relies on ethical sacrifice?",
       answers: ["LumiSquad", "Void Choir", "GrimLight"] ,
       correct: 2

    },
    {
       id: 38, 
       question: "“The First Silence” suggests Lucerith is?",
       answers: ["Loud and destructive", "Ancient and foundational ", "Fast and aggressive"] ,
       correct: 1

    },
    {
       id: 39, 
       question: "Which GrimLight hero embodies raw elemental force?",
       answers: ["Morrix", "Pyrakon", "Vael"] ,
       correct: 1

    },
    {
       id: 40, 
       question: "Which Void hero likely reflects opponents?",
       answers: ["Erezia", "Virelle", "Oryn"] ,
       correct: 1

    },
    {
       id: 41, 
       question: "What separates Legendary heroes from Epic ones?",
       answers: ["Visual design", "Narrative importance", "Team size"] ,
       correct: 1

    },
    {
       id: 42, 
       question: "Why is the Void Choir neither Light nor Dark?",
       answers: ["Neutral politics", "Existential purpose", "Lack of emotion"] ,
       correct: 1

    },
    {
       id: 43, 
       question: "Which hero title suggests manipulation of truth?",
       answers: ["The Beautiful Lie", "The Silent Wing", "The War Apostle"] ,
       correct: 0

    },
    {
       id: 44, 
       question: "Which team would study reality fractures?",
       answers: ["LumiSquad", "GrimLight", "Void Choir"] ,
       correct: 2

    },
    {
       id: 45, 
       question: "Why does each team have one Legendary hero?",
       answers: ["Balance and hierarchy", "Random chance", "Design limitation"] ,
       correct: 0

    },
    {
       id: 46, 
       question: "Which hero best fits a battlefield commander?",
       answers: ["Oryn", "Khalvex", "Jynxie"] ,
       correct: 1

    },
    {
       id: 47, 
       question: "Why are hero titles important?",
       answers: ["Cosmetic only", "Indicate role and theme", "Marketing"] ,
       correct: 1

    },
    {
       id: 48, 
       question: "What does Halcyon City symbolize?",
       answers: ["Control", "Hope under threat", "Corruption"] ,
       correct: 1

    },
    {
       id: 49, 
       question: "Why is GrimLight hidden underground?",
       answers: ["Fear", "Secrecy and necessity ", "Weakness"] ,
       correct: 1

    },
    {
       id: 50, 
       question: "What makes the Void Realm unsettling?",
       answers: ["Enemies", "Broken reality rules", "Darkness alone"] ,
       correct: 1

    },  
    ],

    quizStage3: [   
    {
       id: 51, 
       question: "Why does LumiVerse avoid “good vs evil”?",
       answers: ["Simplicity", "Moral complexity", "Player confusion"] ,
       correct: 1

    },
    {
       id: 52, 
       question: "How does “The Beautiful Lie” reflect GrimLight philosophy?",
       answers: ["Power at any cost", "Truth shaped for survival", "Chaos worship"] ,
       correct: 1

    },
    {
       id: 53, 
       question: "Why is Lucerith defined by silence, not power?",
       answers: ["Weakness", "Void’s nature is absence", "Mystery only"] ,
       correct: 1

    },
    {
       id: 54, 
       question: "How can Void heroes counter Light and Dark?",
       answers: ["Stronger stats", "Ignoring conventional rules", "Numbers"] ,
       correct: 1

    },
    {
       id: 55, 
       question: "What narrative role does Jynxie serve?",
       answers: ["Comic relief", "Reality instability warning", "Villain"] ,
       correct: 1

    },
    {
       id: 56, 
       question: "Why is time manipulation dangerous?",
       answers: ["Energy cost", "Paradox creation", "Visibility"] ,
       correct: 1

    },
    {
       id: 57, 
       question: "How do hero titles hint combat roles?",
       answers: ["Direct descriptions", "Symbolic language", "Random naming"] ,
       correct: 1

    },
    {
       id: 58, 
       question: "Why does the Void Choir focus on knowledge?",
       answers: ["Curiosity", "Survival through understanding", "Lack of strength"] ,
       correct: 1

    },
    {
       id: 59, 
       question: "What makes the Liminal Fracture terrifying?",
       answers: ["Enemies", "Loss of reality certainty", "Darkness"] ,
       correct: 1

    },
    {
       id: 60, 
       question: "What defines LumiVerse’s anime identity?",
       answers: ["Power scaling", "Emotional symbolism + worldbuilding", "Visual effects only"] ,
       correct: 1

    }   
    ]
}


// ---------------QUIZ STAGE FUNCTIONS --------------- //



function shuffleQuestions(array) {
  console.log("shuffle Questions running");
    return array.sort(() => Math.random() - 0.5);
}


function getStageQuestions(quizStageKey, count) {
  return shuffleQuestions([...quizData[quizStageKey]]).slice(0, count);
}
 

function startStage() {
  const quizStageKey = `quizStage${quizStage}`;

  if (!quizData[quizStageKey]) {
    console.log("All Stages Complete");
    // create function
    endQuiz();
    // reminder
    return;
  }

  currentQuizStage = quizStage;
  currentQuizStageQuestions = getStageQuestions(quizStageKey, 10);
  currentQuestionIndex = 0;
  showQuestion();
}

// function completeStage() {
//   alert(`Stage ${currentStage} Complete!`);

//   gameState.lumiPoints += 100 * currentStage;
//   gameState.lives = Math.min(gameState.lives + 3, maxLives);

//   updateHUD();

//   startStage(currentStage + 1);
// }

function endQuiz() {
  alert("You've Mastered The LumiVerse.");

  document.getElementById("quiz").style.display= "none";
  document.getElementById("hero-selection").style.display= "block";
  document.getElementById("battle").style.display= "none";

  renderHeroSelection();

}
// -----------------BATTLE FUNCTIONS-------------------------
function renderHeroSelection() {
  const heroList = document.getElementById("hero-list");
  heroList.innerHTML = "";
  

  Object.keys(heroes).forEach(heroName => {
    const hero = heroes[heroName];

    const btn = document.createElement("button");
    btn.classList.add("hero-btn");

    btn.innerHTML = `
    <strong>${heroName}</strong><br>
    Team: ${hero.team}<br>
    Rarity: ${hero.rarity}<br>
    HP: ${hero.hp} | ATK:${hero.atk}| DEF:${hero.def} | MAG:${hero.mag}
    <img src="${hero.image}" class="hero-img"> 
    `;

    if (!hero.unlocked) {
      btn.disabled = true;
      btn.innerHTML += `<br><span style="color:red;">🔒 Locked</span>`;
    } else {
      btn.onclick = () => selectHero(heroName);
    }


    heroList.appendChild(btn);

  });
}

function checkHeroUnlocks() {

  Object.keys(heroes).forEach(heroName => {
    const hero = heroes[heroName];

    if (hero.rarity === "Epic" && gameState.correctAnswer >= 15){
      hero.unlocked = true;
  
    }

    if (hero.rarity === "Legendary" && gameState.correctAnswer >= 30) {
      hero.unlocked = true;
      
    }
    });
}


function selectHero(heroName) {
  player = { ...heroes[heroName] };
  player.name = heroName;
  player.maxHp = player.hp;

  document.getElementById("hero-selection").style.display = "none";
  document.getElementById("battle").style.display = "block";

  startBattle();
}


    // ---------QUESTION FUNCTIONS----------//
function showQuestion() {
  console.log("show questiong running");
    currentQuestion = currentQuizStageQuestions[currentQuestionIndex];


    if (!currentQuestion) {
      console.error("Question undefined at index", currentQuestionIndex);
      return;
    }

    document.getElementById("questionText").textContent = currentQuestion.question;

    const buttons = document.querySelectorAll(".answerBtn");
    
    buttons.forEach((btn,index) => {
        btn.textContent = currentQuestion.answers[index];
        btn.disabled = false;
    });
}

function nextQuestion() {
  console.log("Stage:", quizStage);
  currentQuestionIndex++;
  
  if (currentQuestionIndex >= currentQuizStageQuestions.length) {
    alert("Stage Completed!");
    quizStage++;

    if (quizStage > 3) {
      endQuiz();
      return;
    }

    document.getElementById("questionText").textContent = `quizStage ${quizStage} begins...`;

    setTimeout(() => {
      startStage();
    }, 1000);

    
  }

  showQuestion();
}


function RedQuestionsLeft() {
    console.log("questions left running");
    gameState.questionNumber --;

    updateHUD();
    

  }



// ------------------Battle functions-----------------

function startBattle() {
  document.getElementById("attack-btn").disabled = false;
  document.getElementById("magic-btn").disabled = false;
 
  document.getElementById("battle-log").innerHTML = "";

  const enemyTemplate = getEnemyByStage(battleStage);

  if (!enemyTemplate) {
    console.error("Enemy not found on stage", battleStage);
    return;
  }

  const scale = 1 + (battleStage * 0.05);

  enemy = { 
     ...enemyTemplate,
     hp: Math.floor(enemyTemplate.hp * scale),
     atk: Math.floor(enemyTemplate.atk * scale),
     def: Math.floor(enemyTemplate.def * scale),
     mag: Math.floor(enemyTemplate.mag * scale)
  };

  enemy.maxHp = enemy.hp;

  
  document.getElementById("player-name").textContent = player.name;
  document.getElementById("enemy-name").textContent = enemy.name;
  document.getElementById("player-image").src = player.image;
  document.getElementById("enemy-image").src = enemy.image;
  
  updateBattleUI();

}





function updateBattleUI() {
  document.getElementById("player-hp").textContent = player.hp;
  document.getElementById("enemy-hp").textContent = enemy.hp;

  document.getElementById("player-hp-bar").style.width = 
  (player.hp / player.maxHp) * 100 + "%";

  document.getElementById("enemy-hp-bar").style.width = 
  (enemy.hp / enemy.maxHp) * 100 + "%";
  
  document.getElementById("player-atk").textContent = player.atk;
  document.getElementById("player-mag").textContent = player.mag;
  document.getElementById("player-def").textContent = player.def;


  document.getElementById("enemy-atk").textContent = enemy.atk;
  document.getElementById("enemy-def").textContent = enemy.def;
  document.getElementById("enemy-mag").textContent = enemy.mag;

  

  const nameEl = document.getElementById("player-name");
  nameEl.textContent = player.name

  if (player.rarity === "Legendary") nameEl.style.color = "gold";
  if (player.rarity === "Epic") nameEl.style.color = "purple";
  if (player.rarity === "Rare") nameEl.style.color = "deepskyblue";


  document.getElementById("enemy-name").style.color =
    battleStage >= 9 ? "red" :
    battleStage >= 7 ? "orange" :
    battleStage >= 5 ? "purple" :
    "white";
}





function calculateDamage(attacker, defender, isMagic = false) {
  if (!attacker || !defender) {
    console.error("Damage error", attacker, defender);
    return 0;
  }
  let base = isMagic ? attacker.mag : attacker.atk;
  let defence = defender.def;
  
  let damage = base * (100 / (100 + defence));
  
  damage += Math.floor(Math.random() * 5);
  


  if (Math.random() < (attacker.critChance || 0.05)) {
    damage *= (attacker.critDamage || 1.5);
    damage = Math.floor(damage);
    addBattleLog("CRITICAL HIT");
  }



  return Math.max(1, Math.floor(damage));
}





document.getElementById("attack-btn").onclick = function () {
  playerTurn(false);
};
document.getElementById("magic-btn").onclick = function () {
  playerTurn(true);
};





function addBattleLog(message) {
  const log = document.getElementById("battle-log");
  if (!log) return;

  const entry = document.createElement("div");
  entry.textContent = message;
  log.prepend(entry);

  // player.hp = Math.min(player.hp + 20, player.maxHp); --healing----
}






function playerTurn(isMagic) {

  const damage = calculateDamage(player, enemy, isMagic);
  enemy.hp -= damage;

  if (enemy.hp <0) enemy.hp = 0;

  addBattleLog(`${player.name} dealt ${damage} damage to ${enemy.name}`);

  if (player.lifesteal > 0) {
    const heal = Math.floor(damage * player.lifesteal);
    player.hp = Math.min(player.hp + heal, player.maxHp);
    addBattleLog(`${player.name} healed ${heal} HP`);
  }
  

  if (enemy.hp <= 0) {
    addBattleLog(`${enemy.name} was defeated!`);

    player.hp += Math.floor(player.maxHp * 0.15);
    player.hp = Math.min(player.hp, player.maxHp);

    gameState.lumiPoints +=50;
    updateHUD();

    battleStage++;
    setTimeout(openStore, 1000);

    // setTimeout(() => {
    //   startBattle();
    // }, 1000);

    return;
  }

  updateBattleUI();

  setTimeout(enemyTurn, 600);
}








function enemyTurn() {

  if (Math.random() < player.dodgeChance) {
    addBattleLog(`${player.name} dodged the attack!`);
    return;
  }

  const damage = calculateDamage(enemy, player, false);
  player.hp -= damage;

  if (player.hp < 0) player.hp = 0;

  
  addBattleLog(`${enemy.name} dealt ${damage} damage to ${player.name}`);

  updateBattleUI();

  if (player.hp <= 0 ) {
    addBattleLog("You were defeated...");
    document.getElementById("attack-btn").disabled = true;
    document.getElementById("magic-btn").disabled = true;
    setTimeout(gameOverBattle, 1000);
    return;
  }
}

function backToBattle() {
  document.getElementById("store").style.display = "none";
  document.getElementById("battle").style.display = "block";

  startBattle();
  
}









function attack() {
  playerTurn(false);
}






function getEnemyByStage(stageNumber) {

  if (stageNumber % 10 === 0)
     return randomFrom(enemies.boss);

  if (stageNumber % 5 === 0)
     return randomFrom(enemies.commander);

  if (stageNumber > 5)
    return randomFrom([...enemies.weak, ...enemies.elite]);

     return randomFrom(enemies.weak);
}

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}





function gameOverBattle() {
  alert("Defetead... Return to Hero Selection");

  battleStage = 1;

  document.getElementById("battle").style.display = "none";
  document.getElementById("hero-selection").style.display = "block";
}
//----------------------- game store----------------------
function openStore() {
  document.getElementById("battle").style.display = "none";
  document.getElementById("store").style.display = "block";

  document.getElementById("store-lp").textContent = gameState.lumiPoints;

  document.getElementById("store-hp").textContent = player.hp + " / " + player.maxHp;
  document.getElementById("store-atk").textContent = player.atk;
  document.getElementById("store-mag").textContent = player.mag;
  document.getElementById("store-def").textContent = player.def;

}






function buyItem(item) {

  const costs = {
    hpPotion: 50,
    maxHp: 100,
    atk: 100,
    mag: 100,
    def: 100,
    crit: 100,
    dodge: 100,
    lifesteal: 100
  };

  const cost = costs[item];

  if (gameState.lumiPoints < cost) {
    alert("Not Enough Lumi Points");
    return;
  }

  gameState.lumiPoints -= cost;

  switch(item) {
    case "hpPotion":
      player.hp = Math.min(player.hp + 30, player.maxHp);
      break;

    case "maxHp":
      player.maxHp += 20;
      player.hp += 20;
      break;

    case "atk" :
      player.atk += 5;
      break;

    case "mag" :
      player.mag += 5;
      break;

    case "def" :
      player.def += 5;
      break;

    case "crit" :
      player.critChance += 0.02;
      break;

    case "dodge" :
      player.dodgeChance += 0.02;
      break;

    case "lifesteal" :
      player.lifesteal += 0.02;
      break;
    
    

  }

  updateHUD();
  document.getElementById("store-lp").textContent = gameState.lumiPoints;
  openStore();


}

// ----------------------end--------------------
 


// ------------GAME OVER FUNCTIONS--------------//
function gameOver() {
  console.log("game over running");
  if (gameState.lives === 0) {
    alert("Game Over Better Luck Next Time!")
    
  };
}
// -----------ANSWER FUNCTIONS--------------//




function addCorrectAnswer() {
  console.log("add correct answer running");
  gameState.correctAnswer++;
  addExtraLP();
  updateHUD();
}

function correctAnswer() {
  console.log("correct answer ruuninng");
    gameState.correctStreak++;
    addCorrectAnswer();
    addLP(10);
    extraLife();
    checkHeroUnlocks();
    updateHUD();
}

function wrongAnswer() {
  console.log("wrong answer running");
    // gameState.correctStreak--;
    if (gameState.correctStreak === 0)
      gameState.correctStreak = 0;
    else (gameState.correctStreak--)
    loseLife();
    updateHUD();
}




function selectAnswer(selectedIndex, buttonEl) {
  const isCorrect = selectedIndex === currentQuestion.correct;

  if (isCorrect) {
    correctAnswer();
  
  } else {
    wrongAnswer();
    
  }

  disableAllButtons();

  setTimeout(nextQuestion, 800);
}


function disableAllButtons() {
  document.querySelectorAll(".answerBtn").forEach(btn => {
    btn.disabled = true;
  })
}

const answerButtons = document.querySelectorAll(".answerBtn");

answerButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => selectAnswer(index, btn));
});


 





// QUIZ HUD LIVES LUMIPOINTS STREAK FUNCTIONS //



// ----------LP FUNCTIONS---------//
function setLP(amount) {
    gameState.lumiPoints = amount;
    updateHUD();
}

function addLP (amount) {
    gameState.lumiPoints += amount;
    updateHUD();
}

function addExtraLP() {
  if (gameState.correctAnswer === 10)
    addLP(300);
  else if (gameState.correctAnswer === 20)
    addLP (600);
  else if (gameState.correctAnswer === 30)
    addLP (1000);
}

function addLPwhenMaxLives() {
    if (gameState.lives > maxLives) 
      addLP(50);
    
}




// -------------LIFES FUNCTIONS------------//


function setLives(amount) {
    gameState.lives = amount;
    updateHUD();
}

function addLife () {
    gameState.lives++;
    if (gameState.lives >= maxLives)
      addLPwhenMaxLives();
      updateHUD();
    
}

function loseLife () {
    gameState.lives--;
    if (gameState.lives < 0) gameState.lives = 0;
    gameOver();
    updateHUD();
}

function extraLife() {
    if (gameState.correctStreak === 3)
        addLife();
    else if (gameState.correctStreak === 6)
        addLife();
    else if (gameState.correctStreak === 9)
        addLife();
    else if (gameState.correctStreak === 12)
        addLife();
    else if (gameState.correctStreak === 15)
        addLife();
    else if (gameState.correctStreak === 18)
        addLife();
    else if (gameState.correctStreak === 21)
        addLife();
    else if (gameState.correctStreak === 24)
        addLife();
    else if (gameState.correctStreak === 27)
        addLife();
    else if (gameState.correctStreak === 30)
        addLife();       
}




//------------ STREAK FUNCTIONS -----------//
function streakCounter() {
    gameState.streakCounter = 0;
    
}

function setStreak(amount) {
    gameState.correctStreak = amount;
    updateHUD();
}

function addStreakPts() {
    gameState.correctStreak++;
    extraLife ();
    addExtraLP();
    updateHUD();
}

function loseStreakPts() {
    gameState.correctStreak--;
    updateHUD();
}


// ------------in progresss-----------

// function setClicks() {
//   gameState.count = 0;
//   updateHUD();

// }

// function addClicks() {
//   console.log("clicked runs")
//   btnBonus.addEventListener("click", ()=> {
//   count++;
// });
//   updateHUD();
// }

// function mysteryBox() {
//   console.log("mystery box running");
// addClicks();
// updateHUD();
// }

// ---------------------------------------





