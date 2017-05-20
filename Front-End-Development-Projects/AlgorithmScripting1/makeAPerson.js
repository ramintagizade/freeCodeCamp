
var Person = function(firstAndLast) {
    var temp = "";
    var firstName = "";
    var lastName = "";
    this.getFullName = function(){
      console.log(firstAndLast);
      return firstAndLast;
    };
    this.getFirstName = function (){
      firstName = "";
      for(var i=0;i<firstAndLast.length;i++){
        if(firstAndLast[i]!=' ') {
          firstName+=firstAndLast[i];
        }
        else {
          break;
        }
      }
      console.log(firstName);
      return firstName;
    };
    this.getLastName = function(){
      lastName = "";
      var ok = false;
      for(i=0;i<firstAndLast.length;i++){
        if(firstAndLast[i]==" "){
          ok = true;
        }
        else if(firstAndLast[i]!=" " && ok){
          lastName+=firstAndLast[i];
        }
      }
      console.log(lastName);
      return lastName;
    };
    this.setFirstName = function(first){
      firstName = first;
      firstAndLast = firstName+" "+this.getLastName();
    };
    this.setLastName = function (last){
      lastName = last;
      firstAndLast = this.getFirstName() + " "+ lastName;
    };
    this.setFullName = function(firstAndLast2){
      firstAndLast = firstAndLast2;
    };

};
var bob = new Person('Bob Ross');
bob.getFullName();
bob.getFullName();
bob.getFirstName();
