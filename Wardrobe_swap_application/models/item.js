function item(obj) {
  this.itemCode = obj.itemCode;
  this.itemName = obj.itemName;
  this.catalogCategory = obj.catalogCategory;
  this.description = obj.description;
  this.rating = obj.rating;
  this.imageUrl = obj.imageUrl;
  return item ;
};
module.exports = item;
