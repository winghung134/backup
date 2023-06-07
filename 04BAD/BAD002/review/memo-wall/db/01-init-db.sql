\c memo_wall

DROP TABLE IF EXISTS users;
CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR NOT NULL,
	password VARCHAR NOT NULL,
	created_at TIMESTAMP DEFAULT NOW(),
	updated_at TIMESTAMP DEFAULT NOW()
);

DROP TABLE IF EXISTS memos;
CREATE TABLE memos (
	id SERIAL PRIMARY KEY,
	content TEXT,
	image VARCHAR,
	created_at TIMESTAMP DEFAULT NOW(),
	updated_at TIMESTAMP DEFAULT NOW()
);

-- INSERT INTO users (username, password) VALUES ('jason', 'jason');
-- INSERT INTO users (username, password) VALUES ('jason', 'jason'), ('peter', 'peter');

