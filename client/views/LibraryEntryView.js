// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><%= count %></td><td><button><img src="./images/<%- like ? \'upvote\' : \'downvote\' %>.png"></button></td>'),

  events: {
    'click': 'handleClick'
  },


  handleClick: function(e){
    // enqueue all songs, allow song model and song queue to control playing
    if (e.target.tagName === 'IMG') {
      this.model.toggleLike();
    } else {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
