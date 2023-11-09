const router = require("express").Router();
const Recipe = require('../../models/Recipe');
const jwt = require("jsonwebtoken");
const verify = require("../auth/authVerify")

router.get('/get-recipe/:id',verify, async (req, res) => {

    const recipe = await User.findOne({_id: req.body.id});
    if (!recipe){
        res.status(400).send("Recipe dosen't exists");
        return;
    }

    res.status(200).send(recipe)
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

    // update a recipe

});


router.delete('/delete-recipe',verify, async (req, res) => {

    // delete a recipe

});

module.exports = router;
