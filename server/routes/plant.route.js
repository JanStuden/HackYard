const express = require('express');
const app = express();
const gardenRoute = express.Router();
let PlantsModel = require('../model/Plant');
let GardenModel = require('../model/Garden');
let PlantsRecordModel = require('../model/PlantRecord');


gardenRoute.route('/').get((req, res) => {
  GardenModel.find((error, garden) => {
    if (error) {
      return next(error)
    } else {
      res.json(garden)
      console.log('Gardens retrieved!')
    }
  })
})


gardenRoute.route('/create-garden').post((req, res, next) => {

  GardenModel.create(req.body, (err, garden) => {
    if (err) {
      return next(err)
    } else {
      res.json(garden)
      console.log('Garden created!')
    }
  })
});

gardenRoute.route('/create-plant/:id').post((req, res, next) => {
  PlantsModel.create(req.body, (err, plant) => {
    if (err) {
      return next(err)
    } else {
      console.log('Plant created!')
      console.log(req.params.id)
      GardenModel.updateOne(
      { "_id": req.params.id },
      { $addToSet: { plantArray: [plant] } },
      (err, plant) => {
          if (err) {
            return next(err);
          } else {
            res.json(plant)
            console.log('Garden updated!')
          }
        })
    }
  })
});


gardenRoute.route('/fetch-garden-by-id/:id').get((req, res) => {
  GardenModel.findById(req.params.id, (err, garden) => {
    if (err) {
      return next(err)
    } else {
      res.json(garden)
      console.log('Garden retrieved!')
    }
  })
})

gardenRoute.route('/fetch-plant-by-name/:name').get((req, res) => {
   PlantsRecordModel.findOne({"name": req.params.name}, (err, plantRecord) =>
    {
      if(err){
        return next(err)
      }else {
        console.log(plantRecord)
        res.json(plantRecord)
      }

    })
  })

  gardenRoute.route('/plantRecords').get((req, res) => {
    PlantsRecordModel.find((error, records) => {
      if (error) {
        return next(error)
      } else {
        res.json(records)
        console.log('Records retrieved!')
      }
    })
  })

gardenRoute.route('/fetch-plants-by-id/:id').get((req, res) => {
  PlantsModel.findOne({'email': req.params.email, 'password': req.params.password}, (err, user) =>
  {
    if(err){
      return next(err)
    }else {
      res.json(user)
    }

  })
})

gardenRoute.route('/update-plant/:id').put((req, res, next) => {
  PlantsModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, plant) => {
    if (err) {
      return next(err);
    } else {
      res.json(plant)
      console.log('Plant updated!')
    }
  })
})

gardenRoute.route('/delete-plant/:id').delete((req, res, next) => {
  PlantsModel.findByIdAndRemove(req.params.id, (error, plant) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: plant
      })
      console.log('Plant deleted!')
    }
  })
})

gardenRoute.route('/bee-friendly-plants/:id').get((req, res) => {

  GardenModel.findOne({"_id": req.params.id},{plantArray: {$elemMatch: {name:'Pussy willow'}}}, (error, plant) => {
      if (error) {
        return next(error)
      } else {
        res.json(plant)
      }
    })
    /*
    GardenModel.find((error, garden) => {
      if (error) {
        return next(error)
      } else {  
        res.json(garden)
        console.log('Gardens retrieved!')
      }
    })
  })*/
})

module.exports = gardenRoute;
