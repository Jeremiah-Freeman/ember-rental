import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnnouncement1() {
      var params = {
        note: this.get('note')
      };
      this.sendAction('saveAnnouncement2', params);
    }
  }
});
