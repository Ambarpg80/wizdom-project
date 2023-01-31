For my Phase 2 project I dedcided to create a Harry Potter trivia app. I chose this particular project because I like games that are socially interactive and multiplayer. I'm also a fan of the franchise. 

I created the app using Reacts create-react-app command. Once I had my github connected and was able to commit changes successfully I was ready to work on planning. Since React works in components, the first thing I had to do was create a diagram of the hierarchy or structure of the app. I find that that is the best frist step because it ceates an overview of the app. I am able to have a rough idea of if and where I need to implement useState, useEffect, hooks as well as any basic client-side routing I may need. One of the instructors had shown me I could create a diagram with a web absed app named excalidraw. However, since I take notes in Microsoft One Note I tend to use that instead so I can keep it with my digital notebook.

src/photos/Phase 2 Project Diagram.png

With my diagram in place, the first thing to work on was the database and basic component files. I installed json-server to act as a mock server and react-router-dom. The first focus is getting the app to has functionality. 

    1. Create a db.json file along with the basic trivia questions.I decided to keep things simple and create a question for each book (7 questions).
    2. Create the fetch request to add all questions and answers to the page. 
    3. Create basic form inputs and create a succesful POST request that adds a new question to the db and page.
    4. Add client-side-Routing routes and Navlinks. 