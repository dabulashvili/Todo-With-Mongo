const queryStringParser = (str) => {
  return JSON.parse(
    str.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)
  );
};

module.exports = queryStringParser;
