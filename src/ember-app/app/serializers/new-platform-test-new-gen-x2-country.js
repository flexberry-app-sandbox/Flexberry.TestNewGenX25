import { Serializer as CountrySerializer } from
  '../mixins/regenerated/serializers/new-platform-test-new-gen-x2-country';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(CountrySerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
