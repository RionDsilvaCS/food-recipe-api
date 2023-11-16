const router = require("express").Router();
const Recipe = require('../../models/Recipe');
const jwt = require("jsonwebtoken");
const verify = require("../auth/authVerify")

router.get('/get-recipe/:name',verify, async (req, res) => {

    const recipe = {recipe_name: req.params.name}

    const recipe_info = await Recipe.findOne(recipe).exec();
    if (!recipe_info){
        res.status(400).send("Recipe dosen't exists");
        return;
    }

    res.status(200).send(recipe_info)
});


router.get('/get-recipe-list',verify, async (req, res) => {

    try{
        const recipe_list = await Recipe.find().exec();
        res.send(recipe_list)
    } catch (error){
        res.status(500).send(error);
    }

});


router.post('/create-recipe',verify, async (req, res) => {

    const recipe = new Recipe({
        recipe_name: req.body.recipe_name,
        calorie: req.body.calorie,
        image: req.body.image,
        items: req.body.items,
    });

    try{
        const saveRecipe = await recipe.save();
        res.status(200).send(saveRecipe);
    }catch(error){
        res.status(500).send(error);
    }
    
});


router.put('/update-recipe',verify, async (req, res) => {

    const filter = {recipe_name: req.body.recipe_name}

    try{
        const updateRecipe = await Recipe.findOneAndUpdate(filter, req.body);
        res.status(200).send(updateRecipe);
    }catch(error){
        res.status(500).send(error);
    }

});


router.delete('/delete-recipe',verify, async (req, res) => {

    const recipe = {recipe_name: req.body.recipe_name}

    try{
        const deleteRecipe = await Recipe.deleteOne(recipe);
        res.status(200).send(deleteRecipe);
    }catch(error){
        res.status(500).send(error);
    }

});

module.exports = router;
