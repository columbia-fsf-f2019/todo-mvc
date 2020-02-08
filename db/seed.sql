use todos_db;

insert into users (email, password) values 
  ('russomp@github.com', '1234'),
  ('therooster@gmail.com', '5678');

insert into lists (name) values
  ('class'),
  ('work'),
  ('personal');

insert into todos (text, list) values
  ('learn REST', 1),
  ('build our own ORM', 1),
  ('discuss MVC for structuring our apps', 1),
  ('deploy our app to heroku', 1),
  ('clean out desk', 2),
  ('say bye', 2),
  ('work out', 3);