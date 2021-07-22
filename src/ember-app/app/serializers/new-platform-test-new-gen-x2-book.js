import { Serializer as BookSerializer } from
  '../mixins/regenerated/serializers/new-platform-test-new-gen-x2-book';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(BookSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
