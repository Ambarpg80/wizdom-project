For my Phase 2 project I dedcided to create a Harry Potter trivia app. I chose this particular project because I like games that are socially interactive and multiplayer. I'm also a fan of the franchise and love doing trivia. 

I created the app using Reacts create-react-app command. Once I had my github connected and was able to commit changes successfully I was ready to work on planning. Since React works in components, I created a diagram of the hierarchy of the components in the app. It's is a great way to get an overview of the app. It allows me to have a rough idea of where I may need to implement useState, useEffect, hooks as well as any basic client-side routing I may need. The diagram I'm including was done using Microsoft OneNote. 

 The first focus is getting the app to have functionality. The following was how I broke down my process of creating the app into tasks. 


    1. Created a diagram of the hierarchy or structure of the app
    2. Created a react app using the npx create-react-app <filename> command.
    3. Created the basic component modules making sure they return text to make sure they connect when I start the app.
    4. Installed json-server to act as a mock server and react-router-dom.
    5. Created a db.json file along with the basic trivia questions.I decided to keep things simple and create a question for each book (7 questions).
    6. Created the fetch request to add all questions and answers to the page. Since I run the server first the requests go to localhost: 3000
    7. Created basic form inputs and a succesful POST request that adds a new question to the db and page.
    8. Added client-side-Routing routes and Navlinks. 
    9. Added the functionality of getting points every time a user clicks on the correct answer and they get no points for answering incorrectly.
    10. separated the questions so they only show one at a time and only go to the next when an answer is selected.
    11. Added functionality to deduct points if the user uses the hint button.
    12. Added nicer background image for quiz and form pages.
    13. Added a Harry Potter Trivia background for the homepage and added animation so that the image fades in. 

Images:
Project diagram: src/images/Phase_2_Project_Diagram.png

Homepage Image: https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1240/MTkwNTc2MDQ0MzE0NDcwMjY4/harry-potter-trivia.webp

Quiz and Form Image: https://mcdn.wallpapersafari.com/medium/37/86/5SZ3AR.jpg

Hint button icons: Emojisense extension for VS Code. 