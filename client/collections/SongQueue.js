// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    // this.collection.on('enqueue', function() {console.log("aaa");});
    this.on('add', function(){
      if (this.models.length === 1){
        this.playFirst();
      }
      this.trigger('songChange');
    });

    this.on('ended', function(){
      this.removeSong();
      this.trigger('songChange');
    });

    this.on('dequeue', function(song){
      this.remove(song);
      this.trigger('songChange');
    });
  },

  removeSong: function(){
    this.remove(this.models[0]);
    if (this.models.length > 0) {
      this.playFirst();
    }
  },

  playFirst: function() {
    this.models[0].play();
  }

});
