import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  username: attr('string'),
  blocked: attr('boolean'),
  created: attr('date'),
  modified: attr('date')
});
