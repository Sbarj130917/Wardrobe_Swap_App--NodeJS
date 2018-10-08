var item = require('./item.js');
var categories = ['Women','Men'];
var items=[
  {
    itemCode:1,
    itemName:"GLITZY AND GLITTERY SPECIAL OCCASION DRESS",
    catalogCategory:"Women",
    subCategory : "Dresses",
    description:"Sheath Style with black bottom, back zipper. Fall just below knee. Matching jacket has 3/4” sleeves, hook and eye closure. Both dress and jacket have some glitter in material. Polyester.",
    rating:"2",
    imageUrl:"../resources/image/dress.jpeg"
  },
  {
    itemCode:2,
    itemName:"Peter Pan Collared Abbey Bouquet Floral Print Blouse",
    catalogCategory:"Women",
    subCategory : "Tops",
    description:"Collared neckline, Short puffed sleeves, Center back keyhole closure,Polyester",
    rating: "5",
    imageUrl:"../resources/image/top.jpg"
  },
  {
    itemCode:3,
    itemName:"POLO SHIRT",
    catalogCategory:"Men",
    subCategory : "Shirts",
    description:"Brand new white (with large logo) Ralph Lauren number polo shirt",
    rating:"3",
    imageUrl:"../resources/image/shirt.png"
  },
  {
    itemCode:4,
    itemName:"ORIGINAL LEVIS JEANS 712 SLIM - SIZE 26 NEW",
    catalogCategory:"Women",
    subCategory : "Bottoms",
    description:"Bought in May, wore only couple of times - absolutely no wear and tear, they are same as brand new. Size 26 *was bit long for me - I'm 165cm/5.4 Mid-rise slim jeans, blue denim, model 712 slim",
    rating:"3",
    imageUrl:"../resources/image/bottoms.jpg"
  },
  {
    itemCode:5,
    itemName:"Lauren Ralph Lauren:Suit Separates",
    catalogCategory:"Men",
    subCategory : "Suits",
    description:"Designed in fine, luxe wool with timeless details, this classic black suit from Lauren Ralph Lauren features exceptional fit.",
    rating:"5",
    imageUrl:"../resources/image/suit.jpeg"
  },
  {
    itemCode:6,
    itemName:"UO Easton Skinny Stretch Chino Pant",
    catalogCategory:"Men",
    subCategory : "Bottoms",
    description:"Perfectly modern skinny-fit chino pants from Urban Outfitters. Soft + stretchy cotton twill is cut in a classic skinny fit with a slightly tapered leg and a low rise lined waistband complete with a zip fly.",
    rating:"3",
    imageUrl:"../resources/image/bottom_men.jpeg"
  }];

  function getItems(){
    return items;
  };

  function getItem(itemId){
    var selectedItem;
    getItems().forEach(function(item){
      if(item.itemCode=== parseInt(itemId)){
        selectedItem = item;
      };
    });
    return selectedItem;
  };

  function getCategories(){
    return categories;
  };
  function getCategory(catalogCategory){
    var items=[];
    getItems().forEach(function(item){
      if(item.catalogCategory=== catalogCategory){
        items.push(item);
      };
    });
    return items;
  };

  module.exports = {
    getItems:getItems,
    getItem:getItem,
    getCategories:getCategories,
    getCategory:getCategory
  }
