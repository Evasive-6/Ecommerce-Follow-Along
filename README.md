# Ecommerce-Follow-Along
E-Commerce Application, a fully functional online shopping platform built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). This project showcases the integration of modern web technologies to deliver a seamless online shopping experience.

## Key Features:
-User Authentication: Secure login and registration system.
-Product Browsing: A user-friendly interface for exploring a wide range of products.
-Cart Management: Add, update, or remove items from the shopping cart.
-Secure Checkout: Complete purchases with a seamless and secure process.
-Order Tracking: Track the status and history of orders in real-time.

## Summmary:
The E-Commerce Application is a full-stack web application designed to facilitate smooth and secure online shopping. This project demonstrates a comprehensive understanding of modern software development, focusing on scalability, performance optimization, and best practices in web and database design.


### Milestone 1 Update:
Created repository for the project 
Added readme file

### Milestone 2 Update:
Set up React app for Frontend and Node js for backend
Created a login page and styled using tailwind css

### Milestone 3 Update:
Configured the server
Integrated MongoDB
Configured the connection between server and mongoBD

### Milestone 4 Update:
Created user Model
Created user Controller
Set up Multer for file uploads

### Milestone 5 Update:
Created a sign-up page where users can enter their details to create an account
Added Form Validation to ensure a valid email and password is entered
Styled using Tailwind css

### Milestone 6 Update:
Added Encryption to user password 
Verified that the password is encrypted in mongoDb

### Milestone 7 Update:
Created Login endpoint
Validated Password

### Milestone 8 Update:
Created Cart Component
Set a grid layout to display products

### Milestone 9 Update:
Created a form for products
The form will take multiple inputs like name, description, price and images.

### Milestone 10 Update:
Created Endpoint for post request.
Validated and saced Product details to mongoDB.

### Milestone 11 Update:
Created endpoint that will send all products data to frontend
Display these data dynamically passing to product card component

### Milestone 12 Update:
Added authentication using jwt tokens

### Milestone 13 Update:
Updated existing data in mongoDB
Auto fill the form with previous data
Adding edit option

### Milestone 14 Update:
Added Delete product functionality

### Milestone 15 Update:
Added Navbar component
Added navigation through Navbar

### Milestone 16 Update:
Added new page to display each product.
Added quantity and add to card button.
- 
### Milestone 17 Update:
Edited the user schema to store cart products .
Added an end point to receive the product details and store in database.

### Milestone 18 Update:
Created an endpoint to receive request from cart page.
Created a backend endpoint to fetch all the products inside cart with user mail.

### Milestone 19 Update:
Created a cart page that display the products inside cart 
For each product added an option to increase and decrease quantity
Added an endpoint to increase and decrease the quantity
  
### Milestone 20 Update:
Created a backend endpoint that will send all the user data using mail.
Created a frontend profile page that will display all the user data
Displayed profile photo, name, mail and addresses.
  
### Milestone 21 Update:
Created address form frontend page
Created a state that will store input address
When clicked on add address in profile it navigates to form page.
  
### Milestone 22 Update:
Created a backend endpoint that will store the address inside user profile in database.

### Milestone 23 Update:
Added a button inside cart called "Place order"
Created a select address page where all the address are displayed and asked to select delivery address.
Created mongoose schema for storing orders details.

### Milestone 24 Update:
Created an order confirmation page that
  - Displayed all products that are being ordered
  - Displayed the address user selected to deliver
  - Displayed the total value of the cart

### Milestone 25 Update:
Created an endpoint that will receive the products, user, address details
Got the mail of the user and using that retrieved the _id of the user
Used order schema created earlier to store order details in mongodb order collection

### Milestone 26 Update:
Created an endpoint that will receive the user mail
Using the user _id got all the orders of that user
Sent all the users orders in the response.

### Milestone 27 Update:
Create a my-orders page
Created a get request to my-orders endpoint.
Displayed all the user orders
Added my-orders page in navbar for better navigation.

### Milestone 28 Update:
Added a cancel order button in my-orders page
Created an endpoint that will receive the order-id
Got the order using user id and marked the status cancelled and saved

## Milestone 29: Payment Method Selection and Razorpay Integration

- *Payment Options*: Added radio buttons on the order confirmation page to allow users to select between "Cash on Delivery (COD)" and "Online Payment."
- *Razorpay Integration*: When the "Online Payment" option is selected, Razorpay payment buttons are displayed.
- *Razorpay Setup*:
  - Created a Razorpay account and obtained the necessary API keys.
  - Saved the Razorpay Client ID.
- *Testing*: Verified that the Razorpay payment buttons are displayed correctly when the "Online Payment" option is selected.
- *GitHub Updates*: Committed the payment method selection and Razorpay button display logic to the repository.

---

## Milestone 30: Razorpay Payment Integration

- *Razorpay Integration*: Implemented online payment using Razorpay API using the client key you created earlier.
- *NPM Package*: Downloaded NPM package to provide an component which will display online payment methods.
- *Payment Processing*: Handled the payment processing logic when a user chooses to pay via Razorpay.
- *Testing*: Verified that the Razorpay payment is processing correctly.
- *GitHub Updates*: Committed the Razorpay payment integration and related components.

---

## Milestone 31: Global State Management with Redux

- *NPM Package Installation*: Installed react-redux to manage global state.
- *Store Setup*:
  - Created a store folder with store.js and userActions.js.
  - Configured a Redux store in store.js with a userReducer function to handle the global email state.
- *State Management*:
  - Created a setEmail function inside userActions.js to update the global email state.
- *Provider Setup*:
  - Wrapped the App component inside the Provider component in index.js and passed the store as a prop.

---

## Milestone 32: Using Redux for Authentication State

- *Dispatch in Login Page*:
  - Implemented the dispatch method in the login page to store the user's email in the global state.
- *Accessing Global State*:
  - Used useSelector to access the stored email on all relevant pages.
- *Testing*:
  - Verified that the email is correctly stored and accessed across different pages.

---

## Milestone 33: JWT Token Generation and Cookie Storage

- *JWT Package Installation*: Installed jsonwebtoken using NPM.
- *Token Creation*:
  - Used the sign method to create a JWT token containing the user's email and ID.
  - Set maxAge to define an expiration time for the token.
- *Cookie Storage*:
  - Added the JWT token inside the response as a cookie to store it in the browser.

---

## Milestone 34: JWT Validation and Authentication Middleware

- *Token Retrieval*:
  - Extracted the JWT token from the browser cookies and sent it to the backend.
- *Middleware Implementation*:
  - Created a middleware function in the backend to validate the received JWT token.
- *Authentication Enforcement*:
  - Ensured that users cannot access protected pages without a valid login.
- *Testing*:
  - Verified that unauthorized users are blocked from accessing restricted pages.

---

## Milestone 35: Deployment of Frontend and Backend

- *Backend Deployment*:
  - Deployed the backend using a deployment service.
  - Replaced localhost with the backend deployment URL in the frontend.
- *Frontend Deployment*:
  - Deployed the frontend using a deployment service.
- *Final Testing*:
  - Ensured that both the frontend and backend were correctly deployed and working as expected.
- *GitHub Updates*:
  - Committed all final deployment-related changes to the repository.
