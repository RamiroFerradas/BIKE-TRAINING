const textTransformation = (value) => {
  try {
    const trans = value[0].toUpperCase() + value.slice(1);

    return trans;
  } catch (error) {
    return value;
  }
};

module.exports = {
  textTransformation,
};
