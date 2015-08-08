import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deletePost: function(post){
      var store = this.store;
      store.find('post', post.id)
        .then(function(post){
          post.destroyRecord();
        })
        .catch(function(err){
          console.error(err);
        });
    }
  }
});

