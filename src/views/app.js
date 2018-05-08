var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
  //this.listeTo(this.model, 'sync', this.render)
  //new VideoPlayerView({el: this.$('.loading'), collection: this.collection}).render() 
    // }).render()
     
     // this.videoListView = new VideoListView()
   // }).render()
  // model:this.videos});
    console.log(this.collection)
    this.render();
    this.videoListView = new VideoListView({collection: this.videos});

    this.videoListView.render(); 
    //this.videos()
   // console.log(VideoPlayerView.prototype.render())
    //console.log(VideoListView.prototype.render.call(this));
    
    
  },
   
  render: function() {
    this.$el.html(this.template());
    // this.$('.loading').html(this.videoPlayerView.render());
    //this.$el.append(this.videoPlayerView.render().el);
    //this.VideoPlayerView.setElement(this.$('.loading')).render();
        // console.log(this.$el)
    return this;

 
  },

  template: templateURL('src/templates/app.html')

});
