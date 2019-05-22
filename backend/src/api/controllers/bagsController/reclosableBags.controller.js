import ReclosableBags from "../../models/bagsModel/reclosableBags.model";

export default {
  findAll(req, res) {
    ReclosableBags.find()
      .then(bagDatabase => {
        res.status(200).json({
          reclosableBags: bagDatabase
        });
      })
      .catch(error => {
        res.status(500).json({
          message: "Could not get the product!!",
          error: error
        });
      });
  },
  create(req, res) {
    const reclosableBags = new ReclosableBags({
      productNumber: req.body.productNumber,
      durability: req.body.durability,
      size: req.body.size,
      weight: req.body.weight,
      bagPercase: req.body.bagPercase
    });
    reclosableBags
      .save()
      .then(result => {
        res.status(201).json({
          message: "Product added successfully",
          bag: result
        });
      })
      .catch(error => {
        res.status(500).json({
          message: "Couldn't save product!!"
        });
      });
  },
  delete(req, res) {
    ReclosableBags.deleteOne({ _id: req.params.id })
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
    ReclosableBags.findOne(req.params.id).then(bag => {
      if (bag) {
        res.status(200).json(bag);
      } else {
        res.status(404).json({ message: "Product not found!" });
      }
    });
  },
  update(req, res) {
    const editBag = {
      productNumber: req.body.productNumber,
      durability: req.body.durability,
      size: req.body.size,
      weight: req.body.weight,
      bagPercase: req.body.bagPercase
    };
    ReclosableBags.updateMany({ _id: req.params.id }, editBag)
      .then(result => {
        res.status(200).json({
          message: "Update Successful",
          result: result
        });
      })
      .catch(error => {
        res.status(200).json({
          message: "Could not update Product!!",
          error: error
        });
      });
  }
};
