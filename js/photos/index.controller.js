(function(){

  angular
  .module( "wdinstagram" )
  .controller( "EntryIndexController", [
    "EntryFactory",
    EntryIndexControllerFunction
  ]);

  //when .insta is called on the viewmodel, it returns the response from .query
  function EntryIndexControllerFunction( EntryFactory ){
    this.insta = InstaFactory.query();
  }

}());
