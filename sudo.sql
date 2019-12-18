/* 
SQL code used on our local database setup
*/

/* PostgreSQL */
-- Table: public.employees

-- DROP TABLE public.employees;

CREATE TABLE public.employees
(
    id integer NOT NULL DEFAULT nextval('employees_id_seq'::regclass),
    "fullName" character varying(32) COLLATE pg_catalog."default",
    "birthDate" date,
    gender character varying COLLATE pg_catalog."default",
    "createdAt" date,
    "updatedAt" date,
    salary integer,
    CONSTRAINT employees_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.employees
    OWNER to postgres;

/* MariaDB */

DROP DATABASE IF EXISTS sudo_project;
CREATE DATABASE sudo_project;
USE sudo_project;

DROP TABLE IF EXISTS department;
CREATE TABLE department(
	dept_no INT,
	dept_name CHAR(20)
);
DROP TABLE IF EXISTS dept_emp;
CREATE TABLE dept_emp(
	emp_id INT,
	dept_no INT,
	from_date DATE,
	to_date DATE
);
DROP TABLE IF EXISTS empt_manager;
CREATE TABLE empt_manger(
	emp_id INT,
	from_date DATE,
	to_date DATE
);
DROP TABLE IF EXISTS employees;
CREATE TABLE employees(
	emp_id INT,
	name CHAR(30),
	dob DATE,
	dept_no INT,
	gender CHAR(8),
	hire_date DATE
);
DROP TABLE IF EXISTS salaries;
CREATE TABLE salaries(
	emp_id INT,
	salary money INT,
	from_date DATE,
	to_date DATE
);
DROP TABLE IF EXISTS title;
CREATE TABLE title(
	emp_id INT,
	title CHAR(10),
	from_date DATE,
	to_date DATE
);