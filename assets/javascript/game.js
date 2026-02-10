
// --------------GLOBAL STATE -------------- //


let lives = 3;
let correctStreak = 0;
let stage = 1;

let lumiPoints = 50;

let currentStageQuestions = [];
let currentQuestionIndex = 0;
let currentQuestion = null;

const gameState = {
    mode: "quiz",
    lives: 3,
    lumiPoints: 50,
    correctStreak: 0,
    correctAnswer: 0
};

const maxLives = 6;


// ----------------UI FUNCTION ------------------//

function updateHUD() {
    document.getElementById("lives").textContent = gameState.lives;
    document.getElementById("lumiPoints").textContent = gameState.lumiPoints;
    document.getElementById("streak-points").textContent = gameState.correctStreak;
    document.getElementById("correct-answers").textContent = gameState.correctAnswer;
    document.getElementById("collect-clicks").textContent = gameState.count
    
}

// -----------START QUIZ BUTTON------------------//

document.getElementById("start-quiz").addEventListener("click", () => {
      startStage("stage1");
    });

// ---------------QUESTIONS POOL---------------- //

let quizData = {
    stage1: [
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

    stage2: [
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

    stage3: [   
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


// --------------- STAGE FUNCTIONS --------------- //



function shuffleQuestions(array) {
    return array.sort(() => Math.random() - 0.5);
}


function getStageQuestions(stageKey, count) {
  return shuffleQuestions([...quizData[stageKey]]).slice(0, count);
}

function startStage(stageKey) {

  console.log("stageKey:", stageKey);
  console.log("quizData[stageKey]:", quizData[stageKey]);
  
    currentStageQuestions = getStageQuestions(stageKey, 10);
    currentQuestionIndex = 0;
    showQuestion();
}


    const stage1Questions = getStageQuestions("stage1", 10);
    const stage2Questions = getStageQuestions("stage2", 10);
    const stage3Questions = getStageQuestions("stage3", 10);


    // ---------QUESTION FUNCTIONS----------//
function showQuestion() {
    currentQuestion = currentStageQuestions[currentQuestionIndex];


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
  currentQuestionIndex++;

  if (currentQuestionIndex >= currentStageQuestions.length) {
    alert("Stage Complete!");
    return;
  }

  showQuestion();
}


// ------------GAME OVER FUNCTIONS--------------//
function gameOver() {
  if (gameState.lives === 0) {
    alert("Game Over Better Luck Next Time!")
  };
}
// -----------ANSWER FUNCTIONS--------------//




function addCorrectAnswer() {
  gameState.correctAnswer++;
  addExtraLP();
  updateHUD();
}

function correctAnswer() {
    gameState.correctStreak++;
    addCorrectAnswer();
    addLP(10);
    updateHUD();
}

function wrongAnswer() {
    gameState.correctStreak--;
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
  if (gameState.correctAnswer === 15)
    addLP(300);
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


// let btnBonus = document.getElementById("bonus");

// let count = 0;

// function mysteryBox() {
//   btnBonus.addEventListener("click", ()=> {
//   gameState.count++;
//   if (gameState.count === 100)
//   addExtraLP(1000);
//   updateHUD();
// });
// }







