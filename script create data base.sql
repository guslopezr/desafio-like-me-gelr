
CREATE DATABASE likeme; 
\c likeme;

CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR (1000), descripcion VARCHAR (255), likes INT );

//database connection:

psql -h hostname -p port -U username dbname

psql -h postgresql-guslopezr.alwaysdata.net -p 5432 -U guslopezr guslopezr_likeme

// http://localhost:3000/


