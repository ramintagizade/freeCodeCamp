
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {

  if(collection[id].hasOwnProperty(prop)){
    console.log("true" + collection[id][prop]);
    if(value!==""){
      collection[id][prop].push(value);
    }
    else {
      delete collection[id][prop];
    }
  }
  else {
    if(value==="")
      collection[id][prop] = [];
    else {
      if(prop=="tracks"){
        collection[id][prop] = [];
        collection[id][prop].push(value);
      }
      else
        collection[id][prop] = (value);
    }
  }
  return collection;
}

// Alter values below to test your code
//updateRecords(5439, "artist", "ABBA");
updateRecords(1245, "tracks", "Addicted to Love");
updateRecords(5439, "tracks", "Take a Chance on Me");
//updateRecords(2468, "tracks", "Free");
//updateRecords(5439, "tracks", "Take a Chance on Me");
//updateRecords(2548, "artist", "");
