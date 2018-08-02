var rover = {
  direction: "N",
  position: [0,0],
  travelLog: [],
  obstacle1: [3,8],
  obstacle2: [2,2],
  obstacle3: [0,9],
}

var roverTwo = {
  direction: "N",
  position: [1,0],
  travelLog: [],
  obstacle1: [3,8],
  obstacle2: [2,2],
  obstacle3: [0,9],
}

// ======================

var board = [
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null]
];
for (var x = 0; x < board.length; x++){
  var row = board[x];
  for (var y = 0; y < row.length; y++){
    var column = row[y];
  }
}

// ======================

function turnLeft(rover){
  switch (rover.direction){
    case "N":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "N";
    break;
  }
  console.log("turnLeft was called! " + rover.direction);
}

// ======================

function turnRight(rover){
  switch (rover.direction){
    case "N":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "N";
    break;
  }
  console.log("turnRight was called! " + rover.direction);
}

// ======================

function moveForward(rover){
  switch (rover.direction){
    case "W":
    rover.position[0]--;
    if (rover.position[0]< 0){
      return rover.position[0]== 9;
    };
    break;
    case "E":
    rover.position[0]++;
    if (rover.position[0]> 0){
      return rover.position[0]== 0;
    };
    break;
    case "S":
    rover.position[1]--;
    if (rover.position[1]< 0){
      return rover.position[1]== 9;
    };
    break;
    case "N":
    rover.position[1]++;
    if (rover.position[1]> 0){
      return rover.position[1]== 0;
    };
    break;
  }
  console.log("moveForward was called " + rover.position);
}

// ======================

function moveBackward(rover){
  switch (rover.direction){
    case "W":
    rover.position[0]++;
    if (rover.position[0]> 9){
      return rover.position[0]== 0;
    };
    break;
    case "E":
    rover.position[0]--;
    if (rover.position[0]< 0){
      return rover.position[0]== 9;
    };
    break;
    case "S":
    rover.position[1]++;
    if (rover.position[1]> 9){
      return rover.position[1]== 0;
    };
    break;
    case "N":
    rover.position[1]--;
    if (rover.position[1]< 0){
      return rover.position[1]== 9;
    };
    break;
  }
  console.log("moveBackward was called " + rover.position);
}

// ======================

function commands(rover, mov){
    switch (rover, mov){
      case "F":
      moveForward(rover);
      obstacles(rover);
      edges(rover);
      collision(rover);
      rover.travelLog.push(rover.position);
      break;
      case "R":
      turnRight(rover);
      break;
      case "L":
      turnLeft(rover);
      break;
      case "B":
      moveBackward(rover);
      obstacles(rover);
      edges(rover);
      collision(rover);
      rover.travelLog.push(rover.position);
      break;
      default:
      console.log("Only can use F, R, L or B commands");
      break;
    }

  console.log("Position: " + rover.position);
}

// ======================

function obstacles(rover){
  if (rover.obstacle1[0] === rover.position[0] && rover.obstacle1[1] === rover.position[1]){
    moveBackward(rover);
    console.log("Obstacle!");
  } else if (rover.obstacle2[0] === rover.position[0] && rover.obstacle2[1] === rover.position[1]){
    moveBackward(rover);
    console.log("Obstacle!");
  } else if (rover.obstacle3[0] === rover.position[0] && rover.obstacle3[1] === rover.position[1]){
    moveBackward(rover);
    console.log("Obstacle!");
  }  
}

// ======================

function edges(rover){
  if (rover.position[0] < 0 || rover.position[1] < 0){
      moveBackward(rover);
      console.log("End of the Board!");
  } else if (rover.position[0] > 9 || rover.position[1] > 9){
    moveBackward(rover);
    console.log("End of the Board!");
  }
}

// ======================

function collision(roverInMovement){
  if( roverInMovement === roverTwo){
    if (roverInMovement.position[0] === rover.position[0] && roverInMovement.position[1] === rover.position[1]){
      moveBackward(roverInMovement);
      console.log("Collision Avoided");
    }
  } else if (roverInMovement === rover) {
    if (roverInMovement.position[0] === roverTwo.position[0] && roverInMovement.position[1] === roverTwo.position[1]){
      moveBackward(roverInMovement);
      console.log("Collision Avoided");
    } 
  }
}

// ======================