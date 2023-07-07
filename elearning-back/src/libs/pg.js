const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "1207",
    database: "elearning"
});

const pg = async(SQL, ...values) => {
    const client = await pool.connect();
    try {
        const data = await client.query(SQL, values.length ? values : null);
        return data;
    } catch (error) {
        console.log(error);
    } finally{
        client.release();
    }
};

module.exports = pg;