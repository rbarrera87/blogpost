  import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createComment: function(post){
      debugger;
      var store = this.store;
      var comment = store.createRecord('comment', {
        body: this.get('body'),
        post: post
      });
      comment.save()
        .then(function(comment){
          console.log(comment);
        })
        .catch(function(err){
          console.log(err);
        });
    }
  }
});