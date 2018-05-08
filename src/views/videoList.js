var VideoListView = Backbone.View.extend({
 el: '.list',

 initialize: function() {
// TODO: add comments abou this
  this.collection.on('sync', this.render, this); 
 }, 

 render: function() {
  this.$el.children().detach(); 
  this.$el.html(this.template()); 

  this.collection.models.forEach(function(el) {
  var newView = new VideoListEntryView({model:el}); 
   newView.render(); 
});

return this
}, 

template: templateURL('src/templates/videoList.html')
});
