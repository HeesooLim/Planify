const express = require("express");
const router = express.Router();
const planController = require("../controllers/planController");
const { auth } = require("./auth");

// GET - All plans
router.get("/", auth.required, planController.getData);
// POST - Add a new plan
router.post("/", auth.required, planController.addPlan);

// GET - Get all plans belong to the user
router.get("/:id", auth.required, planController.getDataByUserId);
// PUT - Update the plan using the plan ID
router.put("/:planId", auth.required, planController.updatePlan);
// DELETE - Remove the plan using the plan ID
router.delete("/:planId", auth.required, planController.deleteDataByPlanId);

// GET - Get a plan by plan ID
router.get("/edit/:planId", auth.required, planController.getDataByPlanId);

// GET - Get all plans in the month using the month and user ID
router.get("/:year/:month", auth.required, planController.getDataByMonth);
// GET - Get all plans in the date using the date and user ID
router.get("/:year/:month/:date", auth.required, planController.getDataByDate);
// GET - Get all plans between two dates
router.get("/:year/:month/:date/:day", auth.required, planController.getDataByDateandDays);

module.exports = router;
