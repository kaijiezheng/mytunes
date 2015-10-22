// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    playing: false,
    count: 0,
    like: true
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.set('playing', true);
    this.set('count', this.get('count') + 1);
    this.trigger('play', this);
  },

  enqueue: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('dequeue', this);
  },

  ended: function() {
    // Triggering an event here will also trigger the event on the collection
    this.set('playing', false);
    this.trigger('ended', this);
  },

  toggleLike: function() {
    this.set('like', !this.get('like'));
  }

});
