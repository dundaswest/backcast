var VideoPlayerView = Backbone.View.extend({
  el: '.player',
  
  select: function() {
    this.model.select();
  },  
  sync : function(){
    this.render();
  },
   
  events: {
    'click .video-player-details': 'sync',
   
  },
  

 
  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');

    return this.$el;
  },


  template: templateURL('src/templates/videoPlayer.html')

});
