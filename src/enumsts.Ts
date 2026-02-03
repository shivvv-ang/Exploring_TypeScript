//numeric enums

enum Staus {
  Pending, //0
  Success, //1
  Failed, //2
}

Staus.Pending === 0; // no's auto increment

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}


//using enums

function checkRole(role:Role){
    if(role === Role.Admin){
        console.log("all access go nuke everything beach");
    }
}


// const enums

const enum Direction {
    Up,
    Down
}

const move = Direction.Up;