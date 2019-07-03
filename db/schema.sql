CREATE DATABASE IF NOT EXISTS rdstest_db;

USE rdstest_db;

CREATE TABLE tabletest (
  id INT AUTO_INCREMENT NOT NULL,
  test_name varchar(300) NOT NULL,
  testbool BOOLEAN DEFAULT false,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id) 
);

