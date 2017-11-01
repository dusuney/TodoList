Todo simple application

require node 6.0.0+
- npm i
- bower i
- gulp build

SQL:
CREATE TABLE taskss (
    name character varying,
    text character varying,
    id integer DEFAULT nextval('tasks_id_seq'::regclass) NOT NULL
);