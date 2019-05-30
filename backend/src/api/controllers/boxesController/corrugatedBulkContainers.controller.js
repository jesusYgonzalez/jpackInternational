const CorrugatedBulkContainers = require("../../models/boxesModel/corrugatedPads.model");

module.exports = {
  findAll(req, res) {
    CorrugatedBulkContainers.find()
      .then(result => {
        res.status(200).json({
          message: "products fetched successfully!!",
          boxes: result
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
    const corrugatedBulkContainers = new CorrugatedBulkContainers({
      description: req.body.description,
      outsideDimensions: req.body.outsideDimensions,
      insideDimensions: req.body.insideDimensions,
      test: req.body.test,
      numberPerBundle: req.body.numberPerBundle,
      numberPerPallet: req.body.numberPerPallet
    });
    corrugatedBulkContainers
      .save()
      .then(result => {
        res.status(201).json({
          message: "Product added successfully",
          boxes: result
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
    CorrugatedBulkContainers.deleteOne({ _id: req.params.id })
      .then(result => {
        console.log(result);
        res.status(200).json({ message: "Product deleted!" });
      })
      .catch(error => {
        res.status(500).json({
          message: "Could not delete Product!!",
          error: error
        });
      });
  },
  findOne(req, res) {
    CorrugatedBulkContainers.findById(req.params.id)
      .then(box => {
        if (box) {
          res.status(200).json(box);
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
  update(req, res) {
    const editBox = {
      description: req.body.description,
      outsideDimensions: req.body.outsideDimensions,
      insideDimensions: req.body.insideDimensions,
      test: req.body.test,
      numberPerBundle: req.body.numberPerBundle,
      numberPerPallet: req.body.numberPerPallet
    };
    CorrugatedBulkContainers.updateMany({ _id: req.params.id }, editBox)
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
