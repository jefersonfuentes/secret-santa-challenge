# Secret Santa

This project is a simple implementation of a "Secret Santa" game, where users can add names to a list, randomly draw a friend from the list, and remove that friend once they have been drawn. It is developed in JavaScript and HTML and can be run directly in a browser.

## Description

The project allows users to:
- Add friends to a list.
- View the list of added friends.
- Randomly draw a friend from the list.
- Remove the drawn friend from the list after they have been selected.

## Features

- Validation to avoid duplicate names.
- Alert messages when the list is empty or when there is only one friend in the list.
- The winner of the draw is displayed in the interface and removed from the friend list.

## Installation

1. Clone this repository or download the code to your local machine.
   
   ```bash
   git clone https://github.com/jefersonfuentes/secret-santa-challenge.git
   ```
2. Open the `index.html` file in a web browser to run the application.

**Note:** No external dependencies are required for this project. You only need a browser that supports JavaScript.

## Usage

1. **Add friends**: 
   - Enter a name in the text field and click "Add".
   - If the name already exists in the list, an error message will be displayed.

2. **Draw a friend**:
   - After adding at least two friends, click "Draw a friend".
   - A random friend will be selected and displayed in the results section.
   - The drawn friend will be removed from the friend list.

3. **View the friend list**: 
   - The friend list updates automatically after adding a new name or drawing a friend.

## Technologies Used

- **HTML**: Structure of the website.
- **CSS**: Web styling
- **JavaScript**: Logic of the application (managing the friend list, drawing friends, etc.).

## Common Issues

- **The list is empty**: If you try to draw a friend when there are no names in the list, an alert will show indicating the list is empty.
  
- **There is only one friend in the list**: If you try to draw a friend when there is only one, an alert will show that at least two friends are required to draw.

## Contributing

If you wish to contribute to this project, feel free to fork it and submit a pull request with your improvements.

## License

This project is open source and distributed under the MIT License.
