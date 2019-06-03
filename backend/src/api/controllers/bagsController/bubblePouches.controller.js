const BubblePouches = require("../../models/bagsModel/bags.model");

module.exports = {
  findAll(req, res) {
    BubblePouches.find()
      .then(bagDatabase => {
        res.status(200).json({
          message: "products fetched successfully!",
          bags: bagDatabase
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
    const bubblePouches = new BubblePouches({
      regularNumber: req.body.regularNumber,
      antiStaticNumber: req.body.antiStaticNumber,
      size: req.body.size,
      bagPercase: req.body.bagPercase
    });
    bubblePouches
      .save()
      .then(result => {
        res.status(201).json({
          message: "Product added successfully",
          bags: result
        });
      })
      .catch(error => {
        res.status(500).json({
          message: "Couldn't save Product!!",
          error: error
        });
      });
  },
  delete(req, res) {
    BubblePouches.deleteOne({ _id: req.params.id })
      .then(result => {
        console.log(result);
        res.status(200).json({ message: "Product deleted!" });
      })
      .catch(error => {
        res.status(500).json({
          message: "Could not delete Product!!"
        });
      });
  },
  findOne(req, res) {
    BubblePouches.findById(req.params.id)
      .then(bag => {
        if (bag) {
          res.status(200).json(bag);
        } else {
          res.status(404).json({ message: "Product not found!" });
        }
      })
      .catch(error => {
        res.status(500).json({
          message: "Could not get Product!!",
          error: error
        });
      });
  },
  update(req, res, next) {
    const editBag = {
      regularNumber: req.body.regularNumber,
      antiStaticNumber: req.body.antiStaticNumber,
      size: req.body.size,
      bagPercase: req.body.bagPercase
    };
    BubblePouches.updateMany({ _id: req.params.id }, editBag)
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
