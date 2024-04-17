# trailscout.github.io
Webint project by Shyni Meagana HETTIARACHCHI, Khushalini RAVI, Fakhrul Afiq BIN ABD AZIZ

**Introduction**
We created a hiking website focused on providing users with comprehensive trail information and event notifications in the region using React JS, CSS, and HTML5.
Work was divided among team members as follows:
Khusha: Responsible for crafting the HomePage with css, along with the graph page and events section.
Shyni: Focused on implementing functionalities and building pages for Login, Signup, TopTrails, and Forgot Password features. As well as the router logic and consolidation of styles.
Fakhrul Afiq: Tasked with developing the Explore (Map) page and integrating all pages seamlessly into a cohesive application.

**App content**

-navbar (react router tech) applied to all pages defined - not allow access to navbar from * paths); navbar contains a logout button that redirects to the login page.
-react router (react-router-dom) is used to move between pages, for links and buttons. 
-data input validation was applied using react-hook-form to the signup and login pages.
-standardized CSS classes were used to minimize repetition and to standardize styles were possible.
-lists were rendered dynamically -reduce repetition and data modification [TopTrails, HomePage]
-iframe used in the Explore page to view 3D maps. [Explore]
-highcharts were used to plot the elevation-distance graph [GraphEle]
-@mediascreen respond to different screen sizes and orientations

**Conclusion**
For lessons learned or what didn’t workout

-Attempted to implement private routes using router elements and useAuth from 'react-auth-kit'.
-Initially used standard JavaScript for the navbar but transitioned to integrate router logic for improved functionality. window.location and href was used to track the current path, then, later replaced with React Router logic for consistency and better performance.
