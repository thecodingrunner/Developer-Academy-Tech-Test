# The Developer Academy Games Development Tech Test

### Comments are also included in the code file to provide context/explanation for the solution. 

## Brief explanation of the solution

### Sequence of actions within the function
1. Locate the specified point from the points array using its Number value
2. Check the direction of the radar, so that the correct conditional checking can be applied (Switch statement)
3. For each point in the array, check whether it is within the area of the radar (if so adding the point to an array)
4. Return the final array of points within the radar area

### Conditions for checking if point is within radar area
1. Distance between point and radar origin must be shorter than the max radar distance
2. Point must be within the diagonal border of the radar horizontally
3. Point must be within the diagonal border of the radar vertically
4. Point must be on the correct side of the radar origin depending on direction of the radar (checked as absolute values are used for checking the previous conditions)
