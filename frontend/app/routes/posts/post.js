import Ember from 'ember';

export default Ember.Route.extend({
  model: function(post){
    return this.store.peekRecord('post', post.id);
  }
});
