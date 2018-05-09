var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    this.videoListView = new VideoListView({collection: this.videos,el: this.$('.list')});
    this.videoListView.render();
    this.videoPlayerView = new VideoPlayerView({model: this.videos.at(0), collection:this.videos, el: this.$('.player')});
    this.videoPlayerView.render();
     
   
    
    
  },
   
  render: function() {
    this.$el.html(this.template());
    return this;

 
  },

  template: templateURL('src/templates/app.html')

});
