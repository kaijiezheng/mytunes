// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    // this.collection.on('enqueue', function() {console.log("aaa");});
    this.on('add', function(){
      if (this.models.length === 1){
        this.playFirst();
      }
      this.trigger('newSongInQueue');
    });

    this.on('ended', function(){
      this.remove(this.models[0]);
      if (this.models.length > 0) {
        this.playFirst();
      }
    });

    this.on('dequeue', function(song){
      console.log(song);
      this.remove(song);
      // if (this.models.length > 0) {
      //   this.playFirst();
      // }
    });
  },

  playFirst: function() {
    this.models[0].play();
  }

});