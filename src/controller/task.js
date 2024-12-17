import mysql from "mysql2"

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Bala9688*',
    database: 'company_db'
})

db.connect(err => {
    if (err) {
        console.log("Error in Connection to DB")
        throw err;
    }
    console.log("Connected to Mysql database")
})

export const createCompany = (req, res) => {
    const { name } = req.body
    const command = 'INSERT INTO Company (name) VALUES (?)';
    db.query(command, [name], (err, result) => {
        if (err) {
            console.log("Error in creating Company : ", err)
            throw err
        }
        res.send("company added successfully")
    })
}

export const addEmployees = (req, res) => {
    const { name, company_id } = req.body;
    const command = 'INSERT INTO Employees (name, company_id) VALUES (?, ?)';
    db.query(command, [name, company_id], (err, result) => {
        if (err) {
            console.log("Error in inserting employees : ", err)
            throw err
        }
        res.send("Employee added successfully")
    })
}

export const createTask = (req, res) => {
    const { description, company_id } = req.body;
    if (!description) {

    }
    const command = "INSERT INTO Task (description, company_id) VAALUES (?, ?)";
    db.query(command, [description, company_id], (err, result) => {
        if (err) {
            console.log("Error in inserting Task : ", err)
            throw err
        }
        res.send("Task added successfully")
    })
    res.send("Task created successfully")
}

export const getTasks = (req, res) => {
    const command = `SELECT c.id AS company_id, c.name AS company_name, 
   e.id AS employee_id, e.name AS employee_name, 
   t.id AS task_id, t.description AS tas_description
   FROM Company c
   LEFT JOIN Employees e ON c.id = e.company_id
   LEFT JOIN Task t ON c.id = t.company_id`
    db.query(command, (err, results) => {
        if (err) {
            console.log("Error in getting list : ", err)
        }
        res.json(results)
    })
}