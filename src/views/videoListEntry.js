var VideoListEntryView = Backbone.View.extend({

 
  render: function() {
   
    this.$el.html(this.template(this.model.attributes)); 
    return this;
  },
  select: function() {
    this.model.select();
  },
  sync: function(){
    this.render();
  },
  events: {
    'click .video-list-entry-title': 'select',
   
  },
  
  template: templateURL('src/templates/videoListEntry.html')

});
