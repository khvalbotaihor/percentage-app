#Percentage application

Create a simple web application 

Requirements:
- The UI should contain 4 inputs with two buttons on the sides for each one. 
- Each input field must contain a number value, which is a percentage.
- When the user presses "-" or "+", the value should decreased or increased respectively (let's say the step = 5)
- Also, the user should be able to change the value in the input directly
The sum of these fields must always remain 100




Example

![example](http://prntscr.com/wty8y0)

function distribute(arr, index, val) {
  // ....
}

distribute([25, 25, 25, 25], 0, 60) // [85,0,0,15] <br/>
distribute([25, 25, 25, 25], 2, -20) // [45,25,5,25] <br />
distribute([25, 25, 25, 25], 1, 120) // [0,100,0,0]
