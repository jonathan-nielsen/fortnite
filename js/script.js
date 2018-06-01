$(document).ready(function() {
  const players = ['ninja', 'tsm_myth', 'twitch_svennoss']

  for (let player of players) {
    $.get('https://johannes-fortnite-api.herokuapp.com/user/' + player).then(res => {
      console.log(res);

      const soloMatches = parseInt(res.stats.p2.matches.value);
      const soloWins = parseInt(res.stats.p2.top1.value);
      const soloWinP = Math.round(soloWins / soloMatches * 1000) / 10;

      const $player = $('#' + player);

      console.log($player)
      console.log($player.find('#solo-wins .key'))
      console.log(res.stats.p2.top1.key)

      $player.find('#solo-wins .number').prop('Counter', 0).animate({ Counter: res.stats.p2.top1.value }, {
        duration: 2000,
        easing: 'swing',
        step(now) {
          $(this).text(Math.ceil(now));
        }
      });

      $player.find('#solo-kills .number').prop('Counter', 0).animate({ Counter: res.stats.p2.kills.value }, {
        duration: 2000,
        easing: 'swing',
        step(now) {
          $(this).text(Math.ceil(now));
        }
      });

      $player.find('#solo-k-d .number').prop('Counter', 0).animate({ Counter: res.stats.p2.kd.value }, {
        duration: 2000,
        easing: 'swing',
        step(now) {
          $(this).text(Math.ceil(now));
        }
      });

      $player.find('#solo-wins-p .number').prop('Counter', 0).animate({ Counter: res.stats.p2.winRatio.value }, {
        duration: 2000,
        easing: 'swing',
        step(now) {
          $(this).text(Math.ceil(now));
        }
      });

      $player.find('#solo-wins .key').text(res.stats.p2.top1.key);
      $player.find('#solo-wins .percentile .inner').css('width', (100 - parseFloat(res.stats.p2.top1.percentile)) + '%');

      $player.find('#solo-kills .key').text(res.stats.p2.kills.key);
      $player.find('#solo-kills .percentile .inner').css('width', (100 - parseFloat(res.stats.p2.kills.percentile)) + '%');

      $player.find('#solo-k-d .key').text(res.stats.p2.kd.key);
      $player.find('#solo-k-d .percentile .inner').css('width', (100 - parseFloat(res.stats.p2.kd.percentile)) + '%');

      $player.find('#solo-wins-p .key').text(res.stats.p2.winRatio.key);
      $player.find('#solo-wins-p .percentile .inner').css('width', (100 - parseFloat(res.stats.p2.winRatio.percentile)) + '%');
    });
  }
});