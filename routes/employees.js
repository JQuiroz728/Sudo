const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Employee = require('../models/Employee');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get employees list
router.get('/', (req, res) => 
    Employee.findAll()
    .then(employees => res.render('employees', {
            employees
        }))
    .catch(err => console.log(err)));


// Display add employee form
router.get('/add', (req, res) => res.render('add'));

// Add an employee
router.post('/add', (req, res) => {
    let { fullName, birthDate, gender, salary } = req.body;
    let errors = [];

    // Validate fields
    if (!fullName) {
        errors.push({ text: "Please add an employee's name" });
    }
    if (!gender) {
        errors.push({ text: "Please add the employee's gender" });
    }
    if (!birthDate) {
        errors.push({ text: "Please add the employee's date of birth" });
    }
    if (!salary) {
        errors.push({ text: "Please add an employee's salary" });
    }

    // Check for errors
    if (errors.length > 0) {
        res.render('add', {
            errors,
            fullName, 
            birthDate, 
            gender, 
            salary
        });
    } else {
        // Insert into table
        Employee.create({
            fullName,
            birthDate,
            gender,
            salary
        })
            .then(employee => res.redirect('/employees'))
            .catch(err => console.log(err));
    }
});

// Search for employees
router.get('/search', (req, res) => {
    const { term } = req.query;

    Employee.findAll({ where: { fullName: { [Op.like]: '%' + term + '%' } } })
        .then(employees => res.render('employees', { employees }))
        .catch(err => console.log(err));
})



module.exports = router;