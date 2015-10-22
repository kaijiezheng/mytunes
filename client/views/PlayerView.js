// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
  },

  setSong: function(song) {
    this.model = song;
    var myContext = this;
    this.model.on('dequeue', function(){
      console.log("my song is gone!");
      myContext.$el.trigger('ended');
      console.log(myContext.$el);
      myContext.$el[0].pause();
      myContext.$el.removeAttr('src');
    });
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
