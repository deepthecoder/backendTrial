const books=require("../service");

console.log("What is module --->",module)

module.exports.resolvers = {
  Query: {
    books: function(){
      return books.books
    },
    name: function(){
        return "Shubharthi Dey"
    }
  },
};
console.log("What is module --->",module.exports)
//exports.module=resolvers
