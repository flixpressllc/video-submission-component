import { nestedPropertyDetails } from 'happy-helpers';

export default function get(params: [string, object]) {
  const [path, obj] = params;
  const result = nestedPropertyDetails(obj, path);
  if (result.exists) { return result.finalValidProperty; }
  throw new Error(`The property path "${path}" led to nothing for the given object`);
}
