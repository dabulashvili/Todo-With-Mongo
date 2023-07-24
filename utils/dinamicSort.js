const dinamicSort = (array, sortProperty) => {
  array.sort((a, b) => {
    const propA = a[sortProperty];
    const propB = b[sortProperty];

    if (typeof propA === "string" && typeof propB === "string") {
      return propA.localeCompare(propB);
    } else {
      return propA - propB;
    }
  });

  return array;
};

module.exports = dinamicSort;
