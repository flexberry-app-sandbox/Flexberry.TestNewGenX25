import { Serializer as LanguageSerializer } from
  '../mixins/regenerated/serializers/new-platform-test-new-gen-x2-language';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(LanguageSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
