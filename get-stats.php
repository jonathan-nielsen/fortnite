<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Fortnite Stats</title>
        <link rel="stylesheet" href="./css/get-stats.css">
        <link rel="stylesheet" href="./css/navbar.css">
        <link href="https://fonts.googleapis.com/css?family=Sunflower:300" rel="stylesheet">
        <meta name="viewport" content="user-scalable=no,initial-scale=1,maximum-scale=1,width=device-width">
    </head>
    <body>
        <div class="navbar">
            <a href="/">Home</a>
            <a href="/get-stats">Get Stats</a>
        </div>
        <div class="container">
            <h1 class="header">Fortnite Stats</h1>
            <form class="login-form" action="https://johannes-fortnite-api.herokuapp.com/user" method="post"> 
                <div class="input-group">
                    <label for="username">Username:</label>
                    <input type="text" name="username" class="form-item">
                </div>
                <button type="submit" class="form-item">Get Your Stats!</button>
            </form>
            <div class="stats">
                <div id="lifetime-matches" class="lifetime game-stat-header">
                    <div class="key"></div>
                    <div class="value"></div>
                </div>
                <div class="lifetime-stats">
                    <div id="lifetime-wins" class="wins stat-block">
                        <h4 class="key"></h4>
                        <h1 class="value"></h1>
                    </div>
                    <div id="lifetime-wins-p" class="wins-p stat-block">
                        <h4 class="key"></h4>
                        <h1 class="value"></h1>
                    </div>
                    <div id="lifetime-k-d" class="k-d stat-block">
                        <h4 class="key"></h4>
                        <h1 class="value"></h1>
                    </div>
                    <div id="lifetime-kills" class="kills stat-block">
                        <h4 class="key"></h4>
                        <h1 class="value"></h1>
                    </div>
                </div>
                <div class="game-stats">
                    <div class="solo-stats">
                        <div id="solo-matches" class="game-stat-header">
                            <div class="key"></div>
                            <div class="value"></div> 
                        </div>
                        <div class="inner">
                            <div id="solo-wins" class="stat-block">
                                <div class="key"></div>
                                <div class="value"></div>
                            </div>
                            <div id="solo-kills" class="stat-block">
                                <div class="key"></div>
                                <div class="value"></div>
                            </div>
                            <div id="solo-wins-p" class="stat-block">
                                <div class="key"></div>
                                <div class="value"></div>
                            </div>
                            <div id="solo-k-d" class="stat-block">
                                <div class="key"></div>
                                <div class="value"></div>
                            </div>
                            <div id="solo-top-10" class="stat-block">
                                <div class="key"></div>
                                <div class="value"></div>
                            </div>
                            <div id="solo-kills-per-match" class="stat-block">
                                <div class="key"></div>
                                <div class="value"></div>
                            </div>
                            <div id="solo-top-25" class="stat-block">
                                <div class="key"></div>
                                <div class="value"></div>
                            </div>
                            <div id="solo-score" class="stat-block">
                                <div class="key"></div>
                                <div class="value"></div>
                            </div>
                        </div>
                    </div>
                    <div class="duo-stats">
                        <div id="duo-matches" class="game-stat-header">
                            <div class="key"></div>
                            <div class="value"></div> 
                        </div>
                        <div class="inner">
                            <div id="duo-wins" class="stat-block">
                                <div class="key"></div>
                                <div class="value"></div>
                            </div>
                            <div id="duo-kills" class="stat-block">
                                <div class="key"></div>
                                <div class="value"></div>
                            </div>
                            <div id="duo-wins-p" class="stat-block">
                                <div class="key"></div>
                                <div class="value"></div>
                            </div>
                            <div id="duo-k-d" class="stat-block">
                                <div class="key"></div>
                                <div class="value"></div>
                            </div>
                            <div id="duo-top-5" class="stat-block">
                                <div class="key"></div>
                                <div class="value"></div>
                            </div>
                            <div id="duo-kills-per-match" class="stat-block">
                                <div class="key"></div>
                                <div class="value"></div>
                            </div>
                            <div id="duo-top-12" class="stat-block">
                                <div class="key"></div>
                                <div class="value"></div>
                            </div>
                            <div id="duo-score" class="stat-block">
                                <div class="key"></div>
                                <div class="value"></div>
                            </div>
                        </div>
                    </div>
                    <div class="squad-stats">
                        <div id="squad-matches" class="game-stat-header">
                            <div class="key"></div>
                            <div class="value"></div> 
                        </div>
                        <div class="inner">
                            <div id="squad-wins" class="stat-block">
                                <div class="key"></div>
                                <div class="value"></div>
                            </div>
                            <div id="squad-kills" class="stat-block">
                                <div class="key"></div>
                                <div class="value"></div>
                            </div>
                            <div id="squad-wins-p" class="stat-block">
                                <div class="key"></div>
                                <div class="value"></div>
                            </div>
                            <div id="squad-k-d" class="stat-block">
                                <div class="key"></div>
                                <div class="value"></div>
                            </div>
                            <div id="squad-top-3" class="stat-block">
                                <div class="key"></div>
                                <div class="value"></div>
                            </div>
                            <div id="squad-kills-per-match" class="stat-block">
                                <div class="key"></div>
                                <div class="value"></div>
                            </div>
                            <div id="squad-top-6" class="stat-block">
                                <div class="key"></div>
                                <div class="value"></div>
                            </div>
                            <div id="squad-score" class="stat-block">
                                <div class="key"></div>
                                <div class="value"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script type="text/javascript" src="./js/jquery.min.js"></script>
        <script type="text/javascript" src="./js/get-stats.js"></script>
    </body>
</html>


