import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createPost: function(){
      var store = this.store;
      var post = store.createRecord('post', {
        title: this.get('title'),
        body: this.get('body')
      });
      var controller = this;
      post.save()
        .then(function(p){
          debugger;
          controller.set('title', "");
          controller.set('body', "");
          controller.transitionTo('posts')
          console.log(p);
        })
        .catch(function(err){
          console.log("Error: " + err);
        });
    }
  }
});