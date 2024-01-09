Weather Forecast Web App

This is a simple weather forecast application developed using HTML, CSS, and JavaScript, leveraging the OpenWeatherMap API to retrieve meteorological data. It allows users to input the name of a city and view information such as temperature, weather description, humidity, and a graphical representation of the sky condition.

![image](https://github.com/mikaelelias/weather-now/assets/129218135/10ef9348-b26e-49c2-931d-6abe9cfc7026)

How to Use:

Clone or download the repository.
Open the index.html file in a web browser.
Enter the desired city name in the search field.
Click the search button or press "Enter" to obtain the weather forecast.

API Key Configuration

Before using the application, you need to obtain an API key from OpenWeatherMap.

Follow the steps below:

Visit OpenWeatherMap and log in or create an account.
After logging in, navigate to the "API keys" section and copy the generated key.
Replace the key variable in the main.js file with the key you just copied.
javascript
Copy code
const key = "your_api_key_here";

Code Structure
The code is divided into three main parts: HTML, CSS, and JavaScript.

HTML (index.html):
Basic page structure.
Input field for the city name.
Display of information such as city name, temperature, weather description, humidity, and a graphical representation of the sky.

CSS (style.css):
Basic styles to make the interface visually appealing and responsive.
Background image sourced from Unsplash to provide an attractive visual experience.

JavaScript (main.js):
Uses the fetch API to retrieve meteorological data from OpenWeatherMap.
Dynamically updates the page with information received from the API.
Allows city search by both clicking the button and pressing "Enter."

![image](https://github.com/mikaelelias/weather-now/assets/129218135/ee41f675-61eb-4d89-a49d-e6eb8e38cfa3)

Notes:
The application relies on the OpenWeatherMap API, and it's crucial to keep the API key updated for proper functionality.
The current design is simple and can be customized as needed.
The page background is dynamic and fetches random landscape images from Unsplash, providing a unique visual experience with each use.
Feel free to contribute, suggest improvements, or adapt the application to meet your specific requirements!
