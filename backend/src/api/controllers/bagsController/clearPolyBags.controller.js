const ClearPolyBags = require("../../models/bagsModel/bags.model");

module.exports = {
  findAll(req, res) {
    ClearPolyBags.find()
      .then(bagDatabase => {
        res.status(200).json({
          clearPolyBags: bagDatabase
        });
      })
      .catch(error => {
        res.status(500).json({
          message: "Could not get the products!!",
          error: error
        });
      });
  },
  create(req, res) {
    const clearPolyBags = new ClearPolyBags({
      productNumber: req.body.productNumber,
      durability: req.body.durability,
      size: req.body.size,
      weight: req.body.weight,
      bagPercase: req.body.bagPercase
    });
    clearPolyBags
      .save()
      .then(result => {
        res.status(201).json({
          message: "Product added successfully",
          bag: clearPolyBags
        });
      })
      .catch(error => {
        res.status(500).json({
          message: "Couldn't save Product!!"
        });
      });
  },
  delete(req, res) {
    ClearPolyBags.deleteOne({ _id: req.params.id })
      .then(result => {
        res.status(200).json({ message: "Product deleted!" });
      })
      .catch(error => {
        res.status(500).json({
          message: "Could not delete Product!!"
        });
      });
  },
  findOne(req, res) {
    ClearPolyBags.findById(req.params.id)
      .then(bag => {
        if (bag) {
          res.status(200).json(bag);
        } else {
          res.status(404).json({ message: "Product not found!" });
        }
      })
      .catch(error => {
        res.status(500).json({
          message: "Could not get Product!!"
        });
      });
  },
  update(req, res, next) {
    const editBag = {
      productNumber: req.body.productNumber,
      durability: req.body.durability,
      size: req.body.size,
      weight: req.body.weight,
      bagPercase: req.body.bagPercase
    };
    ClearPolyBags.updateMany({ _id: req.params.id }, editBag)
      .then(result => {
        res.status(200).json({
          message: "Update Successful",
          result: result
        });
      })
      .catch(error => {
        res.status(500).json({
          message: "Could not update Product!!",
          error: error
        });
      });
  }
};
