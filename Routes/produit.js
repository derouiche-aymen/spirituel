const router = require("express").Router();
const Produit = require("../Models/produitModel");
const isAuth = require("../Middlewares/isAuth");
const isAdmin = require("../Middlewares/isAdmin");

// @route : http://localhost:5000/api/produit
// post contact-us
// public
router.post("/addshop", async (req, res) => {
  const { price, name, img, description } = req.body;
  try {
    const newProduit = new Produit({
      price,
      name,
      img,
      description,
    });
    const produits = await newProduit.save();
    res.json({ msg: "produit added", produits });
  } catch (error) {
    console.log(error);
  }
});

// @route : http://localhost:5000/api/produit
// get all contact-us
// private
router.get("/shop", async (req, res) => {
  try {
    const allProduit = await Produit.find();
    res.json({ msg: "all Produit fetched", allProduit });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/deleteproduit/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const produitdeleted = await Produit.findOneAndDelete({ _id });
    res.json({ msg: "produit deleted", produitdeleted });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;