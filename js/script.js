$(document).ready(function() {
  $('.login-form').submit(function(e) {
    e.preventDefault();

    $.get(this.action + '/' + this.username.value).then(res => {
      console.log(res);

      const lifeTimeMatches = parseInt(res.lifeTimeStats[7].value);
      const lifeTimeWins = parseInt(res.lifeTimeStats[8].value);
      const lifeTimeWinP = Math.round(lifeTimeWins / lifeTimeMatches * 1000) / 10;

      // Lifetime Matches
      $('#lifetime-matches .key').text(res.lifeTimeStats[7].key);
      $('#lifetime-matches .value').text(res.lifeTimeStats[7].value);

      // Lifetime Wins
      $('#lifetime-wins .key').text(res.lifeTimeStats[8].key);
      $('#lifetime-wins .value').text(res.lifeTimeStats[8].value);

      // Lifetime Wins %
      $('#lifetime-wins-p .key').text(res.lifeTimeStats[9].key);
      $('#lifetime-wins-p .value').text(lifeTimeWinP);

      // Lifetime K/D
      $('#lifetime-k-d .key').text(res.lifeTimeStats[11].key);
      $('#lifetime-k-d .value').text(res.lifeTimeStats[11].value);

      // Lifetime Kills
      $('#lifetime-kills .key').text(res.lifeTimeStats[10].key);
      $('#lifetime-kills .value').text(res.lifeTimeStats[10].value);

      // Solo Matches
      $('#solo-matches .key').text(res.stats.p2.matches.label);
      $('#solo-matches .value').text(res.stats.p2.matches.value);

      // Solo Wins
      $('#solo-wins .key').text(res.stats.p2.top1.label);
      $('#solo-wins .value').text(res.stats.p2.top1.value);

      // Solo Kills
      $('#solo-kills .key').text(res.stats.p2.kills.label);
      $('#solo-kills .value').text(res.stats.p2.kills.value);

      // Solo Wins %
      $('#solo-wins-p .key').text(res.stats.p2.winRatio.label);
      $('#solo-wins-p .value').text(res.stats.p2.winRatio.value);

      // Solo K/D
      $('#solo-k-d .key').text(res.stats.p2.kd.label);
      $('#solo-k-d .value').text(res.stats.p2.kd.value);

      // Solo Top 10
      $('#solo-top-10 .key').text(res.stats.p2.top10.label);
      $('#solo-top-10 .value').text(res.stats.p2.top10.value);

      // Solo Kills per match
      $('#solo-kills-per-match .key').text(res.stats.p2.kpg.label);
      $('#solo-kills-per-match .value').text(res.stats.p2.kpg.value);

      // Solo Top 25
      $('#solo-top-25 .key').text(res.stats.p2.top25.label);
      $('#solo-top-25 .value').text(res.stats.p2.top25.value);

      // Solo Score
      $('#solo-score .key').text(res.stats.p2.score.label);
      $('#solo-score .value').text(res.stats.p2.score.value);

      // Duo Matches
      $('#duo-matches .key').text(res.stats.p10.matches.label);
      $('#duo-matches .value').text(res.stats.p10.matches.value);

      // Duo Wins
      $('#duo-wins .key').text(res.stats.p10.top1.label);
      $('#duo-wins .value').text(res.stats.p10.top1.value);

      // Duo Kills
      $('#duo-kills .key').text(res.stats.p10.kills.label);
      $('#duo-kills .value').text(res.stats.p10.kills.value);

      // Duo Wins %
      $('#duo-wins-p .key').text(res.stats.p10.winRatio.label);
      $('#duo-wins-p .value').text(res.stats.p10.winRatio.value);

      // Duo K/D
      $('#duo-k-d .key').text(res.stats.p10.kd.label);
      $('#duo-k-d .value').text(res.stats.p10.kd.value);

      // Duo Top 5
      $('#duo-top-5 .key').text(res.stats.p10.top5.label);
      $('#duo-top-5 .value').text(res.stats.p10.top5.value);

      // Duo Kills per match
      $('#duo-kills-per-match .key').text(res.stats.p10.kpg.label);
      $('#duo-kills-per-match .value').text(res.stats.p10.kpg.value);

      // Duo Top 12
      $('#duo-top-12 .key').text(res.stats.p10.top12.label);
      $('#duo-top-12 .value').text(res.stats.p10.top12.value);

      // Duo Score
      $('#duo-score .key').text(res.stats.p10.score.label);
      $('#duo-score .value').text(res.stats.p10.score.value);

      // Squad Matches
      $('#squad-matches .key').text(res.stats.p9.matches.label);
      $('#squad-matches .value').text(res.stats.p9.matches.value);

      // Squad Wins
      $('#squad-wins .key').text(res.stats.p9.top1.label);
      $('#squad-wins .value').text(res.stats.p9.top1.value);

      // Squad Kills
      $('#squad-kills .key').text(res.stats.p9.kills.label);
      $('#squad-kills .value').text(res.stats.p9.kills.value);

      // Squad Wins %
      $('#squad-wins-p .key').text(res.stats.p9.winRatio.label);
      $('#squad-wins-p .value').text(res.stats.p9.winRatio.value);

      // Squad K/D
      $('#squad-k-d .key').text(res.stats.p9.kd.label);
      $('#squad-k-d .value').text(res.stats.p9.kd.value);

      // Squad Top 3
      $('#squad-top-3 .key').text(res.stats.p9.top3.label);
      $('#squad-top-3 .value').text(res.stats.p9.top3.value);

      // Squad Kills per match
      $('#squad-kills-per-match .key').text(res.stats.p9.kpg.label);
      $('#squad-kills-per-match .value').text(res.stats.p9.kpg.value);

      // Squad Top 6
      $('#squad-top-6 .key').text(res.stats.p9.top6.label);
      $('#squad-top-6 .value').text(res.stats.p9.top6.value);

      // Squad Score
      $('#squad-score .key').text(res.stats.p9.score.label);
      $('#squad-score .value').text(res.stats.p9.score.value);

      $('.login-form').fadeOut(function() {
        $('.stats')
          .addClass('flex')
          .fadeIn();
      });
    });
  });
});
