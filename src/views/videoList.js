var VideoListView = Backbone.View.extend({

  initialize:function(){
    console.log(this.collection.trigger);
    this.collection.on('change',function(){
      this.collection.trigger('sync');
    });
  },
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.models.forEach(function(el) {
      var newView = new VideoListEntryView({model:el});
      newView.render();
    });
  },

  template: templateURL('src/templates/videoList.html')

});
