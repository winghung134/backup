CREATE TABLE likes (
	id SERIAL PRIMARY KEY,
	user_id integer,
	FOREIGN KEY (user_id) REFERENCES users(id),
	memo_id integer,
	FOREIGN KEY (memo_id) REFERENCEs memos(id)
);

-- INSERT INTO likes (user_id, memo_id) VALUES (1, 2);