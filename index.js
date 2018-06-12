var recipes = {rice: '1 cup', water: '2 cups', salt: 'to taste'}

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, {rice: '2 cups'})
  return recipes
}