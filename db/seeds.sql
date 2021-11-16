INSERT INTO department (name)
VALUES
    ("Sample Processing"),
    ("Parasitology"),
    ("Chemisty"),
    ("Hematology");
INSERT INTO role (title, salary, department_id)
VALUES
    ("Lead", 100000, 1),
    ("Lab Technician 3", 90000, 2),
    ("Lab Technician 2", 80000, 2),
    ("Lab Technician 1", 70000, 2),
    ("Assistant", 60000, 1);
 INSERT INTO employee (first_name, last_name, role_id, manager_id)
 VALUES
    ("Alley", "Apples", 1, NULL),
    ("Bruce", "Barnes", 2, NULL),
    ("Cathy", "Cuach", 3, 2),
    ("Daniel", "DeSherpa", 5, NULL),
    ("Elliza", "Enririquez", 3, NULL);