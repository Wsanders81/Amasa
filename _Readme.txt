Question #1
What are some ways to make websites faster? (Name as many different techniques as you can)

Question #2
When would you use a NoSQL solution instead of SQL?

Question #3
What type of experience have you had working with e-commerce sites?


Task 1
Quickly Clone page
Explain how you would copy/clone/ripp this page and make it work on your local environment
1.a) Explain your method?

	I tried a couple methods here. First was HTTrack, however, the results weren't spectacular. I decided to go another route and use NodeJS
and a web scraper library called "Puppeteer". This allowed me to collect all of the HTML, CSS and JS files and easily launch them in VSCode. 

1.b) How you would minimize the errors?

	To minimize the errors I commented out all of the scripts that didn't pertain to the actual build of the site that I could identify such 
as the scripts for analytics like Hotjar and Klaviyo. To deal with the lazy image loading errors (well, the thrown errors) I removed all of the inline 
data-src attributes from the images and placed them below their respective img element and commented them out. Since all of the JS has been 
minified this seemed like the quickest solution.
  
1.c) If you would need to eliminate a scripts explain why?

	I didn't eliminate any of the scripts per se, since I figured it this was a real website edit they might be needed when the site was 
redeployed. Instead I commented out the scripts that were throwing errors such as Facebook Pixel, BlueShift and the other analytical items I mentioned
above. 

1.d) Please clone the following page:
	 https://www.beautystatcosmetics.com/en/pre-6.html
	 Time for this should be 15mins


Task 2
2) Basic HTML / CSS 
There are three different sizes of browser; desktop, tablet and mobile.
Please check out the images below which represent desktop, tablet and mobile respectively.
Please complete them in one single responsive HTML structure, note that you are freely to use any css framework.

Note: You DONT have to make the form do anything


Task 3
3) Simple Site/App
Here is a free API, build a simple site/app where a user can search an artist by using keywords. Then if the user clicks on the Artist, it will display It’s album list plus any other information you want to show.

https://www.theaudiodb.com/api_guide.php

You don’t have to implement all features available for this API project!
You are free to choose the ones that could show your skills.
Be creative!


Once you're done please send back your task projects and answers to the questions. We will review task projects locally


