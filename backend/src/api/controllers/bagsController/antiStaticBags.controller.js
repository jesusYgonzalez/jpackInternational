import AntiStaticBags from '../../models/bagsModel/antiStaticBags.model';

export default {
  findAll(req, res, next) {
    AntiStaticBags.find()
      .then(bagDatabase => {
        res.status(200).json({
          message: "products fetched successfully!",
          antiStaticBags: bagDatabase
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
    const antiStaticBags = new AntiStaticBags({
      productNumber: req.body.productNumber,
      durability: req.body.durability,
      size: req.body.size,
      weight: req.body.weight,
      bagPercase: req.body.bagPercase
    });
    antiStaticBags
      .save()
      .then(result => {
        res.status(201).json({
          message: "Product added successfully",
          bag: antiStaticBags
        });
      })
      .catch(error => {
        res.status(500).json({
          message: "Couldn't save Product!!"
        });
      });
  },
  delete(req, res) {
    AntiStaticBags.deleteOne({_id: req.params.id})
      .then(result => {
        console.log(result);
        res.status(200).json({message: "Product deleted!"});
      })
      .catch(error => {
        res.status(500).json({
          message: "Could not delete Product!!"
        });
      });
  },
  findOne(req, res) {
    AntiStaticBags.findById(req.params.id)
      .then(bag => {
        if (bag) {
          res.status(200).json(bag);
        } else {
          res.status(404).json({message: "Product not found!"});
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
    AntiStaticBags.updateMany({ _id: req.params.id }, editBag)
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
}
