import { moduleForModel, test } from 'ember-qunit';

moduleForModel('new-platform-test-new-gen-x2-language', 'Unit | Serializer | new-platform-test-new-gen-x2-language', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:new-platform-test-new-gen-x2-language',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
