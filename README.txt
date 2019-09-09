-Run "node index" to Start

-Data is Extracted From Bring's API Using Axios
-Main Frameworks/Libraries Used: Express.js, Axios, Ejs
-After Submitting The Form, Both The Map And a Table With Every Marker is Shown
--User May Select a Table Row to Show More Information About The Correspoding Marker on The Map or Click Directly on a Marker on The Map
--The Markers Are Sorted Based on Proximity

Notes:
-Google Map's API Key is Stored in a .env file
-Based on The Example Given it is Assumed That, in Order to Execute a Search Successfully, The User Must Fill Both Fields.
--Therefore, Both Are Marked as Mandatory
-If No Data is Found After Submitting The Form, an Error is Shown
