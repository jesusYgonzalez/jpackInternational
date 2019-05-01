import AntiStaticBags from '../../models/bagsModel/antiStaticBags.model';


export default {
  findAll(req, res, next) {
    AntiStaticBags.find()
      .then(bagDatabase => {
        res.status(200).json({
          message: "product fetched successfully!",
          antiStaticBags: bagDatabase
        });
      })
      .catch(error => {
        res.status(500).json({
          message: "Couldn't get the product!!",
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
    antiStaticBags.save()
      .then(result => {
        res.status(201).json({
          message: "Employee added successfully",
          bag: antiStaticBags
        });
      })
      .catch(error => {
        res.status(500).json({
          message: "Couldn't save Product!!"
        });
      });
  }
}
