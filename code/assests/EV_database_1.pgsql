CREATE DATABASE Ev_vehciles; 

CREATE TABLE Addresses(
    address varchar(150) UNIQUE,
    postcode varchar(8)

);

CREATE TABLE Batteries(
    battery_name VARCHAR(50) PRIMARY KEY,
    battery_height INTEGER,
    battery_width INTEGER,
    battery_length INTEGER,
    battery_voltage INTEGER 

);

CREATE TABLE People(
    license_number CHAR(16) PRIMARY KEY CHECK (license_number ~ '^[0-9]+$'),
    first_name VARCHAR(32), 
    surname VARCHAR(32),
    DOB DATE CHECK(DOB >= '1907-04-11' AND DOB<='2007-08-11'),
    FOREIGN KEY(address) REFERENCES Addresses(address)
);

CREATE TABLE Cars(
    registration VARCHAR(10) PRIMARY KEY,
    model VARCHAR(50),
    make VARCHAR(50),
    FOREIGN KEY(battery) REFERENCES Batteries(battery_name),
    theoretical_range INTEGER
);

CREATE TABLE JourneyData(
    id JourneyID SERIAL PRIMARY KEY,
    distance INTEGER,
    number_of_stops INTEGER,
    percentage_charged INTEGER CHECK(percentage_charged >= 0 AND percentage_charged <= 100),
    battery_percentage_before_journey INTEGER CHECK(percentage_charged >= 0 AND percentage_charged <= 100),
    battery_percentage_after_journey INTEGER CHECK(percentage_charged >= 0 AND percentage_charged <= 100)


);

CREATE TABLE Journeys(
    FOREIGN KEY(Journey) REFERENCES JourneyData(JourneyID),
    date DATE CHECK(date >= '1801-01-01' AND date <= '2023-08-11'),
    time TIME,
    FOREIGN KEY(license_number) REFERENCES People(license_number),
    FOREIGN KEY(registration) REFERENCES Cars(registration)
);