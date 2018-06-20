export default function keyBy(params: [string, object[]]) {
  const [key, objects] = params;
  const newObject = {};
  objects.forEach((obj) => {
    newObject[obj[key]] = obj;
  });
  return newObject;
}
