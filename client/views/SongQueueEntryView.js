// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': 'handleClick'
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },

  handleClick: function() {
    if (this.model.get('playing')) {
      this.model.ended();
    } else {
      this.model.dequeue();
    }
  }

});
