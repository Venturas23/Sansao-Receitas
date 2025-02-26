document.getElementById('recipeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;
    
    if (name && ingredients && instructions) {
        const recipeList = document.getElementById('recipeList');
        
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${name}</strong><br>
                              <strong>Ingredientes:</strong> ${ingredients}<br>
                              <strong>Instruções:</strong> ${instructions}`;
        
        recipeList.appendChild(listItem);
        
        document.getElementById('recipeForm').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});