import { moduleForModel, test } from 'ember-qunit';

moduleForModel('new-platform-test-new-gen-x2-book', 'Unit | Model | new-platform-test-new-gen-x2-book', {
  // Specify the other units that are required for this test.
  needs: [
    'model:new-platform-test-new-gen-x2-author',
    'model:new-platform-test-new-gen-x2-book',
    'model:new-platform-test-new-gen-x2-country',
    'model:new-platform-test-new-gen-x2-language',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
