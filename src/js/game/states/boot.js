(function() {
  var Stats = require('Stats');
  var properties = require('../properties');
  var Boot = function (game) {

  };

  Boot.prototype = {

    preload: function () {

      //  Here we load the assets required for our preloader (in this case a loading bar)
      this.load.image('preloaderBar', 'images/preloader-bar.png#grunt-cache-bust');

    },

    create: function () {

      //  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
      this.input.maxPointers = 1;

      //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
      // this.stage.disableVisibilityChange = true;

      if (this.game.device.desktop) {
        //  If you have any desktop specific settings, they can go in here
      } else {
        //  Same goes for mobile settings.
        //  In this case we're saying "scale the game, no lower than 480x260 and no higher than 1024x768"
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.setMinMax(480, 260, 1024, 768);
        this.scale.forceLandscape = true;
      }
      this.scale.pageAlignHorizontally = true;
      this.scale.pageAlignVertically = true;
      this.scale.setScreenSize(true);

      this.addStats();

      //  By this point the preloader assets have loaded to the cache, we've set the game settings
      //  So now let's start the real preloader going
      this.state.start('Preloader');
    },

    addStats: function() {
      var stats = new Stats();

      stats.setMode(0);

      stats.domElement.style.position = 'absolute';
      stats.domElement.style.left = '0px';
      stats.domElement.style.top = '0px';

      document.body.appendChild(stats.domElement);

      setInterval(function () {
        stats.begin();
        stats.end();
      }, 1000 / 60);
    }

  };

  module.exports = Boot;

}).call(this);