create DATABASE company_db;

use company_db;

CERATE TABLE Company (
    id INT AUTO_INCREAMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
)

CERATE TABLE Employee (
    id INT AUTO_INCREAMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    company_id INT,
    FORIEGN KEY (company_id)
    REFERNCEs Company(id) ON DELETE CASCADE
)

CREATE TABLE TASK (
    id INT AUTO_INCREAMENTx`` PRIMARY KEY,
    description Text,
    company_id INT,
    FORIEGN KEY Company(id) ON DELETE CASCADE
)