module.exports = function (prefix) {
  var dic = new Set("abcdefghijklmnopqrstuvwxyz1234567890");
  id = `${prefix}_`;
  for (let i = 0; i < 5; i++) {
    index = Math.floor(Math.random() * dic.size);
    value = [...dic][index];
    id = `${id}${value}`;
  }
  return id;
};
