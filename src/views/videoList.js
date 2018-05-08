var VideoListView = Backbone.View.extend({

  initialize: function() {
    // TODO: add comments about 'this'
    this.collection.on('sync', this.render, this);
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
