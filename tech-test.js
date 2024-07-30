
// Initialise points array containing all of the point objects

const pointsArray = [
  {
    X: 28,
    Y: 42,
    Number: 1,
    Direction: "North",
  },
  {
    X: 27,
    Y: 46,
    Number: 2,
    Direction: "East",
  },
  {
    X: 16,
    Y: 22,
    Number: 3,
    Direction: "South",
  },
  {
    X: 40,
    Y: 50,
    Number: 4,
    Direction: "West",
  },
  {
    X: 8,
    Y: 6,
    Number: 5,
    Direction: "North",
  },
  {
    X: 6,
    Y: 19,
    Number: 6,
    Direction: "East",
  },
  {
    X: 28,
    Y: 5,
    Number: 7,
    Direction: "South",
  },
  {
    X: 39,
    Y: 36,
    Number: 8,
    Direction: "West",
  },
  {
    X: 12,
    Y: 34,
    Number: 9,
    Direction: "North",
  },
  {
    X: 36,
    Y: 20,
    Number: 10,
    Direction: "East",
  },
  {
    X: 22,
    Y: 47,
    Number: 11,
    Direction: "South",
  },
  {
    X: 33,
    Y: 19,
    Number: 12,
    Direction: "West",
  },
  {
    X: 41,
    Y: 18,
    Number: 13,
    Direction: "North",
  },
  {
    X: 41,
    Y: 34,
    Number: 14,
    Direction: "East",
  },
  {
    X: 14,
    Y: 29,
    Number: 15,
    Direction: "South",
  },
  {
    X: 6,
    Y: 49,
    Number: 16,
    Direction: "West",
  },
  {
    X: 46,
    Y: 50,
    Number: 17,
    Direction: "North",
  },
  {
    X: 17,
    Y: 40,
    Number: 18,
    Direction: "East",
  },
  {
    X: 28,
    Y: 26,
    Number: 19,
    Direction: "South",
  },
  {
    X: 2,
    Y: 12,
    Number: 20,
    Direction: "West",
  },
];

// Create function called VisiblePoints

function VisiblePoints(pointNum, angle, distance) {

  // initiate pointObject 
  let pointObject = {};

  // convert the angle from degrees to radians for using in trigonometry calculations
  let angleRadians = angle * (Math.PI / 180);

  // initialise insideRadarArray, for the points that are found to be within the range of the radar
  const insideRadarArray = [];

  // assign pointObject to the point object with Number value equal to pointNum (from points array)
  for (let point of pointsArray) {
    if (point.Number === pointNum) {
      pointObject = point;
    }
  }

  // check the pointObject is correct by console logging
  console.log(pointObject);

  // Set up switch statement, so that different checks can be performed depending on the radar direction of the inputted pointObject
  switch (pointObject.Direction) {
    case "North":
      // for each point in the array of points, check whether the point is contained within the radar area
      for (let point of pointsArray) {
        if (
          // the vertical distance between the points should be larger than the the minimum vertical distance in the radar, for its given horizontal distance (ie the point should be above the outer diagonal line)
          // using toa trigonometric relation
          Math.abs(point.Y - pointObject.Y) >
            Math.abs((point.X - pointObject.X) / Math.tan(angleRadians / 2)) &&
          // the distance between the points should be less than the maximum distance of the radar.
          // the distance between the points is calculated using pythagoras theorem (a^2 + b^2 = c^2)
          Math.sqrt(
            Math.pow(point.X - pointObject.X, 2) +
              Math.pow(point.Y - pointObject.Y, 2)
          ) < distance &&
          // the horizontal distance between the points should be shorter than the the maximum horizontal distance in the radar, for its given vertical distance (ie the point should be on the left of the right border, and on the right of the left border of the radar)
          // using toa trigonometric relation
          Math.abs(point.X - pointObject.X) <
            Math.abs((point.Y - pointObject.Y) * Math.tan(angleRadians / 2)) &&
          // the Y coordinate of the point must be greater than that of the radars origin point 
          point.Y > pointObject.Y
        ) {
          insideRadarArray.push(point);
        }
      }
      break;
    case "South":
      for (let point of pointsArray) {
        if (
          // same relations as the conditions for the North conditional statement, byt this time the Y coordinate of the point must be below that of the radars origin point
          Math.abs(point.Y - pointObject.Y) >
            Math.abs((point.X - pointObject.X) / Math.tan(angleRadians / 2)) &&
          Math.sqrt(
            Math.pow(point.X - pointObject.X, 2) +
              Math.pow(point.Y - pointObject.Y, 2)
          ) < distance &&
          Math.abs(point.X - pointObject.X) <
            Math.abs((point.Y - pointObject.Y) * Math.tan(angleRadians / 2)) &&
          point.Y < pointObject.Y
        ) {
          insideRadarArray.push(point);
        }
      }
      break;
    case "East":
      // similar relations as the conditions for the North and South conditional statements, but this time the X and Y coordinates must be swapped, as we are working at a 90 degree angle essentially
      for (let point of pointsArray) {
        if (
          Math.abs(point.X - pointObject.X) >
            Math.abs((point.Y - pointObject.Y) / Math.tan(angleRadians / 2)) &&
          Math.sqrt(
            Math.pow(point.X - pointObject.X, 2) +
              Math.pow(point.Y - pointObject.Y, 2)
          ) < distance &&
          Math.abs(point.Y - pointObject.Y) <
            Math.abs((point.X - pointObject.X) * Math.tan(angleRadians / 2)) &&
          point.X > pointObject.X
        ) {
          insideRadarArray.push(point);
        }
      }
      break;
    case "West":
      for (let point of pointsArray) {
        if (
          // same relations as the conditions for the East conditional statement, but this time the X coordinate of the point must be less than that of the radar origin point
          Math.abs(point.X - pointObject.X) >
            Math.abs((point.Y - pointObject.Y) / Math.tan(angleRadians / 2)) &&
          Math.sqrt(
            Math.pow(point.X - pointObject.X, 2) +
              Math.pow(point.Y - pointObject.Y, 2)
          ) < distance &&
          Math.abs(point.Y - pointObject.Y) <
            Math.abs((point.X - pointObject.X) * Math.tan(angleRadians / 2)) &&
          point.X < pointObject.X
        ) {
          insideRadarArray.push(point);
        }
      }
      break;
  }

  return insideRadarArray;
}

// run the function here, saving the value as insideRadarArray
const insideRadarArray = VisiblePoints(5, 170, 10);

// console log the insideRadarArray to see the results 
console.log(insideRadarArray)