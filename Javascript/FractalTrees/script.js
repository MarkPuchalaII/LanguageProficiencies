var angle, slider;  // Just some variable initialization.
// We have an angle to rotate our branches by, and a slider to determine that angle with

function setup(){
 canvasWidth = windowWidth-16;                // This gives us a centerpoint to translate to
 createCanvas(canvasWidth, windowHeight-36);  // This makes our canvas look nice & big in the window
 slider = createSlider(0,TWO_PI, PI/4, 0.01); // And let's throw a slider in at the bottom,
}                                             // So we cacn watch our tree transform!

function draw() {
 background('#282C35');           // Our canvas uses the background color of Atom
 angle = slider.value();          // The angle our branches grow is determined by the slider
 translate(canvasWidth/2,height); // And we'r going to frew from the bottom-center of the canvas

 stroke(255);                     // Our tree will be white
 branch(100);                     // And our initial trunk will be 100 pixels long
}

function branch(len) { // This is a recursive function for the tree to grow all its branches
 line(0,0,0,-len);     // We draw out our branch
 translate(0,-len);    // We move to the tip of where that branch grew
 if (len > 1 ) {       // Then, as long as we can grow a branch no smaller than a pixel
  grow(angle, len);    // We grow a branch to the right
  grow(-angle, len);   // And then we grow a branch to the left
 }
}

function grow(angle, len){ // This is how any individual branch is grown
 push();                   // push() as a way to sort of bookmark the place we came from
 rotate(angle);            // We rotate the direction our new branch will go
 branch(len * 0.67);       // Then branch out 2/3 the length of the previous branch
 pop();                    // pop() back to where we came from so we can keep this uniform
}                          // Notice how grow() calls branch from within branch.
                           // This function will keep going until it can't grow any more branches smaller than 1
