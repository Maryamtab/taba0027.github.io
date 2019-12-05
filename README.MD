## Interactive Gallery
In this project I created a webpage to include an interacitve image gallery of 12 pictures. 

## How I design it
I add all the pictures to the webpage from Javascript file using for loop technic. The challange here was that every picture has a string name and I couldn't use their origianl names to loop through. So I changed all the names to include "num" + number from 1 to 12. Then I use the number postfix to loop through all the pictures. 
The other challange was to change the image style when hovering over it. I fixed it by changign teh brighness and size attributes of the image and adding a rubric to the image, again through Javascript.
The last challange was to create an overlay page which contains a magnfied version of the image clicked. I used Javascript addEventListener function to call the image from the directory again and assign it in a bigger size than the one in which it appears in the gallery. Also I designed the overlay page in the css to throw a shadow over all elements on the page and makes it appear as if the magnified clicked image is on an elevated level. 

## Design pattern
I used my logo above the page in the middle, without using any header; because the logo already contains my name. 
I also set the decoration style of the navigatino to none, as I would rather have the text in black color to  match with my color pallette. Though to make it clear which item is hovered over, I made it in a way to chane to a different color. 
I also put an alt for every image so if it doesn't load, it shows a description of the image. 

## What I learned
I learned how to mix for loop with addEventListener in an effective way and how to change the elements sytles from Javascript. 
