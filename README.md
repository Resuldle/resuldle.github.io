<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ScoreHub</title>

<style>
body{
  margin:0;
  font-family:Arial, sans-serif;
  background:#f5f5f5;
}

header{
  background:#111;
  color:white;
  padding:20px;
  text-align:center;
}

nav{
  display:flex;
  justify-content:center;
  gap:20px;
  padding:15px;
  background:white;
  box-shadow:0 2px 5px rgba(0,0,0,0.1);
}

nav a{
  text-decoration:none;
  color:#111;
  font-weight:bold;
}

.container{
  max-width:1100px;
  margin:auto;
  padding:30px;
}

.hero{
  background:white;
  padding:40px;
  border-radius:16px;
  text-align:center;
  margin-bottom:30px;
}

.cards{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:20px;
}

.card{
  background:white;
  padding:20px;
  border-radius:16px;
  box-shadow:0 4px 10px rgba(0,0,0,0.08);
}

.btn{
  display:inline-block;
  margin-top:15px;
  background:#111;
  color:white;
  padding:10px 18px;
  border:none;
  border-radius:10px;
  cursor:pointer;
}

footer{
  text-align:center;
  padding:30px;
  color:#777;
}
</style>
</head>

<body>

<header>
  <h1>ScoreHub</h1>
  <p>Daily Games • Scores • Leaderboards</p>
</header>

<nav>
  <a href="#">Home</a>
  <a href="#">Games</a>
  <a href="#">Leaderboard</a>
  <a href="#">About</a>
</nav>

<div class="container">

  <section class="hero">
    <h2>Play Daily Games</h2>
    <p>Track your scores and compete with others.</p>
    <button class="btn">Start Playing</button>
  </section>

  <section class="cards">

    <div class="card">
      <h3>Word Puzzle</h3>
      <p>Today's challenge is live.</p>
      <button class="btn">Play</button>
    </div>

    <div class="card">
      <h3>Number Game</h3>
      <p>Beat today's high score.</p>
      <button class="btn">Play</button>
    </div>

    <div class="card">
      <h3>Leaderboard</h3>
      <p>See the best players today.</p>
      <button class="btn">View</button>
    </div>

  </section>

</div>

<footer>
  © 2026 Resuldle
</footer>

</body>
</html>
