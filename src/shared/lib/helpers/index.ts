/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/indent */
import _ from 'lodash';

const mapKeysDeep =
  (customizer: typeof _.snakeCase) =>
  (obj: any): any => {
    if (_.isArray(obj)) return obj.map(mapKeysDeep(customizer));
    if (_.isPlainObject(obj)) {
      return _(obj)
        .mapKeys((v, k) => customizer(k as unknown as string))
        .mapValues(mapKeysDeep(customizer))
        .value();
    }
    return obj;
  };

export const represent = mapKeysDeep(_.snakeCase);
export const toInternal = mapKeysDeep(_.camelCase);
