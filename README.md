![image](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# WDI-32 Group Project - Poober

You're stuck in the middle of London, it's Nottinghill Carnival and you need to use a restroom. All the pubs are full and there's no where to go. That's where Poober comes in. A web app designed for people to be able to register, login and request a bathroom that someone has kindly offered on the site.

Poober is a mobile-responsive MEAN stack single-page application, styled using the Bulma CSS framework, as well has using jsonwebtoken and satellizer. We also used Google Map's API to help locate the bathrooms. It is tested using Mocha, Chai and supertest.

##### [Visit website](https://poober.herokuapp.com/)

*Please be aware that Heroku apps go to sleep after 30 mins of inactivity and may take a little time to load*

---

###### The planning phase of the project began with the creation of a Trello board, specifying our MVP requirements and desired features. Tasks were assigned to members of the group throughout the project using this system.

<p align="center"><img src="https://i.imgur.com/FswHhb1.png" width="700"></p>

######  Once logged in the user is sent to a page which displays all the bathrooms in your surrounding area, pinpointing your location. The user can filter them by rating and what they wish to use the restroom for. However, if the user wishes to view the bathrooms in a list they are able to do so.

<p align="center"><img src="https://i.imgur.com/AtWWecN.png" width="700"></p>

<p align="center"><img src="https://i.imgur.com/uceRhLN.png" width="700"></p>

###### Once logged in and the user has found a suitable bathroom that suits their needs they are able to send a request to the user provided that it's available.

<p align="center"><img src="https://i.imgur.com/77dfgCR.png" width="700"></p>

###### Next, the owner of the bathroom can see all the requests on their profile page and can accept or decline them. Once the owner has accepted or declined it shows on the requestee's user page.

<p align="center"><img src="https://i.imgur.com/PJFMP9Z.png" width="700"></p>

<p align="center"><img src="https://i.imgur.com/Bg3ncd2.png" width="700"></p>

###### Finally, the requestee can rate the bathroom which will calculate the average rating of the bathroom. Also, the owner can rate the requestee.

<p align="center"><img src="https://i.imgur.com/ual7gvF.png" width="700"></p>

<p align="center"><img src="https://i.imgur.com/9R3GBhS.png" width="700"></p>

###### Our application is thoroughly tested using Mocha and Chai.

<p align="center"><img src="https://i.imgur.com/UaOvh9t.png" width="700"></p>

---

We are very pleased with the outcome of the project, having got to grips with new technologies and produced a fully authenticated, functional and genuinely useful application. It also provided a great learning experience of coding in a team and managing version control.

We have a number of ideas to further develop the application, including:
- The app knowing where you are at all times once the request is made so the owner can see your location.
- Sending the user and owner a notifcation via text message once a request has been sent, accepted or declined
