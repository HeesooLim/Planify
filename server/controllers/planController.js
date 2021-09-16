const Plan = require("../models/plan");
const passport = require("passport");
const Utils = require("../utils/utils");
const { auth, isTokenValid } = require("../routes/auth");

exports.isUserLoggedIn = function(req, res) {

}

// Get all data
exports.getData = function (req, res) {
  // Find all the plans
  Plan.find((err, data) => {
    if (err) return Utils.resStatusMsg(res, 500, "Cannot fetch the data");
    else return res.send(data);
  });
};

// Get data using the user's _id
exports.getDataByUserId = function (req, res) {
  // Get plans belong to the user
  Plan.find({ userId: req.params.id }, (err, data) => {
    if (err) return Utils.resStatusMsg(res, 500, "Cannot fetch the data");
    else return res.send(data);
  });
};

// Get data using the plan's _id
exports.getDataByPlanId = (req, res) => {
  // Get a plan using the plan's _id
  Plan.find({ _id: req.params.planId }, (err, data) => {
    if (err) return Utils.resStatusMsg(res, 500, "Cannot fetch the data");
    else return res.send(data);
  });
};

exports.deleteDataByPlanId = (req, res) => {
  // Find the plan by id and delete
  Plan.findByIdAndDelete(req.params.planId, (err, data) => {
    if (err) return Utils.resStatusMsg(res, 500, "Cannot fetch the data");
    else return res.send(data);
  });
};

// TODO: handle the tokenExpired error (when cookie not expired but jwt expired)
exports.getDataByMonth = function (req, res) {
  // Validate the token and get the decoded value
  let decodedToken = isTokenValid(req);
  console.log(decodedToken);
  
  // Get the year and month from the parameter
  let year = parseInt(req.params.year);
  let month = parseInt(req.params.month - 1);
  let numOfDays = new Date(year, month + 1, 0).getDate();

  // Create startDate and endDate
  let startDate = new Date(year, month, 1, 0, 0, 0);
  let endDate = new Date(year, month, numOfDays, 23, 59, 59);

  console.log(startDate, " - ", endDate);

  // Find the plan that belongs to the user and between start and end date
  Plan.find(
    {
      userId: decodedToken.id,
      dueDate: {
        $gte: startDate,
        $lt: endDate,
      },
    },
    (err, data) => {
      if (err) return Utils.resStatusMsg(res, 500, "Cannot fetch the data");
      else return res.send(data);
    }
  );
};

// Get the plan belongs to the user and on the date
exports.getDataByDate = function (req, res) {
  // Validate the token and get the decoded value
  let decodedToken = isTokenValid(req);
  // Get the year, month and date from the parameter
  let year = parseInt(req.params.year);
  let month = parseInt(req.params.month - 1);
  let date = parseInt(req.params.date);

  // Create startDate and endDate
  let startDate = new Date(year, month, date, 0, 0, 0);
  let endDate = new Date(year, month, date, 23, 59, 59);

  console.log(`${startDate} - ${endDate}`);

  Plan.find(
    {
      userId: decodedToken.id,
      dueDate: {
        $gte: startDate,
        $lt: endDate,
      },
    },
    (err, data) => {
      if (err) return Utils.resStatusMsg(res, 500, "Cannot fetch the data");
      else return res.send(data);
    }
  );
};

exports.getDataByDateandDays = function (req, res) {
  // Validate the token and get the decoded value
  let decodedToken = isTokenValid(req);
  
  // Get the year and month from the parameter
  let year = parseInt(req.params.year);
  let month = parseInt(req.params.month - 1);
  let date = parseInt(req.params.date);
  let numOfDays = parseInt(req.params.day);

  console.log('year: ', year);
  console.log('month: ', month);
  console.log('date: ', date);
  console.log('days: ', numOfDays);
  // Create startDate and endDate
  let startDate = new Date(year, month, date, 0, 0, 0);
  let endDate = new Date(year, month, date + numOfDays, 23, 59, 59);

  console.log(startDate, " - ", endDate);

  // Find the plan that belongs to the user and between start and end date
  Plan.find(
    {
      userId: decodedToken.id,
      dueDate: {
        $gte: startDate,
        $lt: endDate,
      },
    },
    (err, data) => {
      if (err) return Utils.resStatusMsg(res, 500, "Cannot fetch the data");
      else return res.send(data);
    }
  );
};

exports.updatePlan = function (req, res) {
  // Validate the token and get the decoded value
  let decodedToken = isTokenValid(req);
  console.log("subPlans: ", req.body.subPlans);

  // Create a plan using the body
  let plan = {
    userId: decodedToken.id,
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
    dueDate: req.body.dueDate,
    progress: req.body.progress,
    subPlans: req.body.subPlans,
  };

  // Find the plan usign the id and update it
  Plan.findByIdAndUpdate(
    req.params.planId,
    { $set: plan },
    { new: true },
    (err, data) => {
      if (err) return Utils.resStatusMsg(res, 500, "Cannot update the data");
      else return res.send(data);
    }
  );
};

exports.addPlan = function (req, res) {
  // Validate the token and get the decoded value
  let decodedToken = isTokenValid(req);
  // Create a plan using the body
  let plan = {
    userId: decodedToken.id,
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
    dueDate: new Date(req.body.dueDate),
    progress: 0,
    subPlans: req.body.subPlans,
  };

  console.log("plan to add: ", plan);

  // Insert the plan into the database
  Plan.create(plan, (err, data) => {
    if (err) return Utils.resStatusMsg(res, 500, "Cannot insert the data");
    else return res.send(data);
  });
};
