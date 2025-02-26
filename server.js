const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

// Endpoint to handle adding a recipe
app.post('/add-recipe', (req, res) => {
    const newRecipe = req.body;

    fs.readFile(path.join(__dirname, 'recipes.json'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Internal Server Error');
        }

        const recipes = JSON.parse(data);
        recipes.push(newRecipe);

        fs.writeFile(path.join(__dirname, 'recipes.json'), JSON.stringify(recipes, null, 2), (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return res.status(500).send('Internal Server Error');
            }

            res.status(200).send('Recipe added successfully');
        });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});