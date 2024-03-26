# AI Model Explorer provides an integrated platform to browse through various AI models created by its users, allowing them to develop ModelCards for their own models as well. The Explorer is engrained with login/ logout facility which enables them to visit their own profile, where one can view the models they posted and queries from the discussion forum. The web app also accredits the user to like the available models, which in turn are shown in the ‘Spotlight’ section of the homepage. The homepage also features a ‘Try it Out’ section where the users can get hands-on experience of an AI Model- ‘Text-to-Speech’ generator. 

# Framework:
Used React.js in the frontend development along with bootstrap for better styling of certain components. The database used to store users, models and queries is mongodb(a nosql database as no complex querying and cross table joins are required in the application). Used Node.js as the backend engine with express framework(easily integrates with react and mongodb).

# Screens available:
1. Login/Register,
2. HomePage,
3. Profile,
4. Create Model,
5. Model Explorer,
6. Model Description,
7. Post Query,
8. Discussion Forum.

# 1. Login/Register
The register section also the user to create a new account using email address, and the user can use login facility to enter through the registered account again.

# 2. HomePage
The homepage includes three sections- the side container, allows various features like login/logout, create model/post query, visit profile, which one can access after they have logged in with a registered account. The ‘Try it Out’ section features a ‘Text-to-Speech Converter’ which converts the text entered into speech. The third section contains ‘featured AI models’ which are present in Spotlight section based on the likes they have gathered(more than 0 likes).

# 3. Profile
The profile page displays the accounts details alongwith various models they have created and queries posted with that same account.

# 4. Create Model
User can create a new model while selecting the category and library, adding a model description, which is then displayed in the Model Explorer section. 

# 5. Model Explorer
This page features all the various models available to explore. The model card displays the details entered by the user alongwith their username. On clicking a certain model, one can visit the model description page where the description/code is available alongwith metadata.

# 6. Model Description
This feature opens, whenever a user clicks on any modelcard. It features a description section and a code section where the user can perform valuations regarding their models. The metadata contains information about the model, insights and general overview of how the model is performing on the social media. The users can also use this section to rate and like the respective models.

# 7. Post Query
I have created a feature where the users can post any query they have and can get it mentored by experienced professionals available on the platform. The personal queries can be seen in the profile section, whilst the lot is displayed in the discussion forum.

# 8. Discussion Forum
This page provides a platform for users to engage with each other’s projects- post queries, ask doubt, or have a basic knowledge transfer session.



### Response times:
Page load time of application = 1.13 seconds(including looking for IP/DNS/resources + downloading and displaying content i.e js and css files from the remote build and deployed folder).
This can be seen from the network tab in chrome dev tools, where the each req-res block shows the time taken for execution.




