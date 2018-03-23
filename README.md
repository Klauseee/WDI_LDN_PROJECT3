![image](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# WDI-32 Group Project - PooberApp

![image](src/assets/images/logo.png)

We've all been in that situation before... You're out and about in town, and you need to use the bathroom, badly. There aren't any public toilets nearby (that wouldn't give you diseases) and you're too British to go into a restaurant and ask if you can use theirs.
But there are literally thousands of nearby private toilets that could cater for your needs.

Enter Poober!

Poober brings together bathroom owners looking for some good karma and people stranded without the correct facilities.

The app allows users to search the area they are in to find privately owned bathrooms that are being offered and request to use it.

Our app is a mobile-first responsive MEAN stack application styled using BULMA CSS framework, featuring packages such as sattelizer, jsonwebtoken, filestack, ngMessages. We used Google Maps API and Google Places API.
We also wrote a testing suite using NYC and mocha.

##### [Visit Website](https://poober.herokuapp.com)

Throughout the project we used trello to organise and designate tasks and responsibilities. Initially we specified our MVP requirements before listing our desired features in order of importance.

trello image

Each morning our group met for a standup to discuss any problems and what we had done since our last meeting and to designate new tasks where necessary. Normally we would do this at least twice a day.

We knew from the start that this app was mainly intended for mobile users, so we set out to make the app as simple as possible for someone to use on a mobile device. Users can see all available bathrooms as markers on map, when they click a marker, it takes them to a show page for the bathroom which lists the available facilities, and provides directions from the user's current location.

The app works with a simple request and accept principle: the user decides which toilet they would like to use and hits the request button (only one request can be made per bathroom at a time). The owner of the bathroom can then either accept or reject the request and the bathroom again becomes available to other users.

The user can also filter the bathrooms for specific facilities that are offered and by the minimum average rating.

Once a request has been accepted, the user can leave a comment and a rating on the bathroom (one for each visit) and the owner of the bathroom can rate the user. The user ratings appear to the owner every time a request is made.

All users have the option of listing their own bathroom on the app.

We are extremely pleased with the final product. The app works as intended...
