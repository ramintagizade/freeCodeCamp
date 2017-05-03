
function checkCashRegister(price, cash, cid) {
  var change  = cash-price;
  // Here is your change, ma'am.
  var temp = [];
  var res = [];
  var total = cid[8][1] + cid[7][1]+cid[6][1]+cid[5][1]+cid[4][1]+cid[3][1]+cid[2][1]+cid[1][1]+cid[0][1];
  var save = change;
  var hun = false;
  var twen = false;
  var ten = false;
  var five = false;
  var one = false;
  var quart = false;
  var dime = false;
  var nick = false;
  var pen = false;
  temp["HUNDRED"] = 0.0;
  temp["TWENTY"] = 0.0;
  temp["TEN"] = 0.0;
  temp["FIVE"] = 0.0;
  temp["ONE"] = 0.0;
  temp["QUARTER"] = 0.0;
  temp["DIME"] = 0.0;
  temp["NICKEL"] = 0.0;
  temp["PENNY"] = 0.0;
  while(change>0.0){
    console.log(change);
    var check = false;
    if(change>=100.00 && cid[8][1].toFixed(2)>=100.00){
      change-=100.00;
      cid[8][1]-=100.00;
      temp["HUNDRED"]+=100.00;
      hun = true;
      check = true;
      change = change.toFixed(2);
    }
    else if(change>=20.00 && cid[7][1].toFixed(2)>=20.00){
      change-=20.00;
      cid[7][1]-=20.00;
      temp["TWENTY"]+=20.00;
      twen = true;
      check = true;
      console.log("Minus 20 ");
      change = change.toFixed(2);
    }
    else if(change>=10.00 && cid[6][1].toFixed(2)>=10.00){
      change-=10.00;
      cid[6][1]-=10.00;
      temp["TEN"]+=10.00;
      ten = true;
      check = true;
      change = change.toFixed(2);
    }
    else if(change>=5.00 && cid[5][1].toFixed(2)>=5.00){
      change-=5.00;
      cid[5][1]-=5.00;
      temp["FIVE"]+=5.00;
      five = true;
      check = true;
      change = change.toFixed(2);
    }
    else if(change>=1.00 && cid[4][1].toFixed(2)>=1.00){
      change-=1.00;
      cid[4][1]-=1.00;
      temp["ONE"]+=1.00;
      one = true;
      check = true;
      change = change.toFixed(2);
    }
    else if(change>=0.25 && cid[3][1].toFixed(2)>=0.25){
      change-=0.25;
      cid[3][1]-=0.25;
      temp["QUARTER"]+=0.25;
      quart = true;
      check = true;
      change = change.toFixed(2);
    }
    else if(change>=0.10 && cid[2][1].toFixed(2)>=0.10){
      change-=0.10;
      cid[2][1]-=0.10;
      temp["DIME"]+=0.10;
      dime = true;
      check = true;
      change = change.toFixed(2);
    }
    else if(change>=0.05 && cid[1][1].toFixed(2)>=0.05){
      change-=0.05;
      cid[1][1]-=0.05;
      temp["NICKEL"]+=0.05;
      nick = true;
      check = true;
      console.log("Minus 0.05");
      change = change.toFixed(2);
    }
    else if(change>=0.01 && cid[0][1].toFixed(2)>=0.01){
      change-=0.01;
      cid[0][1]-=0.01;
      temp["PENNY"]+=0.01;
      pen = true;
      check = true;
      change = change.toFixed(2);
    }
    if(check==false){
      if(change==0.0){
        console.log("Closed");
        return "Closed";
      }
      else {
        console.log("Insufficient Funds");
        return "Insufficient Funds";
      }
    }

  }
  if(total==save && change==0){
    console.log("Closed");
    return "Closed";
  }
  if(hun){
    res.push(["HUNDRED",temp["HUNDRED"]]);
  }
  if(twen){
    res.push(["TWENTY",temp["TWENTY"]]);
  }
  if(ten){
    res.push(["TEN",temp["TEN"]]);
  }
  if(five){
    res.push(["FIVE",temp["FIVE"]]);
  }
  if(one){
    res.push(["ONE",temp["ONE"]]);
  }
  if(quart){
    res.push(["QUARTER",temp["QUARTER"]]);
  }
  if(dime){
    res.push(["DIME",temp["DIME"]]);
  }
  if(nick){
    res.push(["NICKEL",temp["NICKEL"]]);
  }
  if(pen){
    res.push(["PENNY",temp["PENNY"]]);
  }
  console.log(res + " " + change);
  return res;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) ;
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
