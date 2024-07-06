const mongoose = require 'mongoose';

const companySchema = new mongoose.Schema(
{
    "companies": [
      {
        "_id": ObjectId,
        "name": String,
        "description": String,
        "industry": String,
        "location": String,
        "website": String,
        "email": String,
        "phone": String,
        "jobs": [
          {
            "_id": ObjectId,
            "title": String,
            "description": String,
            "requirements": [String],
            "responsibilities": [String],
            "salary": {
              "min": Number,
              "max": Number,
              "currency": String
            },
            "employment_type": String, // full-time, part-time, contract, etc.
            "experience_level": String, // entry-level, mid-level, senior, etc.
            "education_level": String, // high school, bachelor's, master's, etc.
            "remote": Boolean,
            "location": String,
            "posted_date": Date,
            "expiry_date": Date,
            "applicants": [
              {
                "user_id": ObjectId,
                "status": String // applied, shortlisted, rejected, hired, etc.
              }
            ]
          }
        ]
      }
    ]
  }
)


const Company = mongoose.model('Company',companySchema);

module.exports = Company;

           