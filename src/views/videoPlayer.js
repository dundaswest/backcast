var VideoPlayerView = Backbone.View.extend({
  el: '.player',
  select: function() {
    this.model.select();
  },  

  // initialize: function() {
  //  this.model.on('select', this.render, this)
  // },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');

    return this.$el;
  },


  template: templateURL('src/templates/videoPlayer.html')

});
