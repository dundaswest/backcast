var VideoListView = Backbone.View.extend({
  el: '.list',

  initialize: function() {

    this.collection.on('sync', this.render, this); 
  }, 

  render: function() {
    var el = this.el;
  
    this.$el.children().detach(); 
    this.$el.html(this.template()); 
    this.$el.html('');
    this.collection.forEach(function(item) {
      var newView = new VideoListEntryView({ model: item });
      newView.render().$el.appendTo(el);
    });
  },
  
 

  template: templateURL('src/templates/videoList.html')
});
