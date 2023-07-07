CREATE DATABASE elearning;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE instructors(
    instructor_uid uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    field VARCHAR(64) NOT NULL,
    image VARCHAR(512) NOT NULL
);

CREATE TABLE comments(
    comment_uid uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    client_name VARCHAR(64) NOT NULL,
    profession VARCHAR(64) NOT NULL,
    image TEXT NOT NULL,
    text TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contacts(
    contact_uid uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(128) NOT NULL,
    title VARCHAR(128) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP    
);

CREATE TABLE categories(
    category_uid uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    number_of_courses INT,
    image VARCHAR(512) NOT NULL
);

CREATE TABLE courses(
    course_uid uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    price INT NOT NULL,
    reviews INT,
    duration VARCHAR(32) NOT NULL,
    students_number INT,
    image VARCHAR(512) NOT NULL,
    instructor_uid uuid,
    category_uid uuid,
    FOREIGN KEY(instructor_uid)
        REFERENCES instructors(instructor_uid),
    FOREIGN KEY(category_uid)
        REFERENCES categories(category_uid),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE admins(
    admin_uid uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    username VARCHAR(64) NOT NULL,
    password TEXT NOT NULL
);

INSERT INTO admins(username, password)

SELECT course.name,
    course.image,
    course.price,
    course.reviews,
    course.duration,
    course.students_number,
    i.name
FROM courses course
INNER JOIN instructors i
USING(instructor_uid)
INNER JOIN categories
USING(category_uid);
