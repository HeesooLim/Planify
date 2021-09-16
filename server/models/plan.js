/*
 * server/models/User.js
 */
"use strict";

const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");

// Schema
const PlanSchema = new mongoose.Schema({
    id: {
      type: String
    },
    userId: {
      type: String,
      required: true
    },
    // date: {
    //   type: Date,
    //   required: true
    // },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    dueDate: {
      type: Date,
      required: true
    },
    progress: {
      type: Number,
      required: true
    },
    priority: {
      type: Number,
      required: true
    },
    subPlans: [
      {
        title: {
          type: String,
          required: true
        },
        description: {
          type: String,
          required: true
        },
        priority: {
          type: Number,
          required: true
        },
        isDone: {
          type: Boolean,
          required: true
        }
      }
    ]
  },
  { collection: "plans" }
);

// Plugins
PlanSchema.plugin(timestamps);

// Model
module.exports = exports = mongoose.model("plan", PlanSchema);
