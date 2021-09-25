create database news;

create table users (
    user_id serial primary key,
    first_name varchar(20) not null,
    last_name varchar(20) not null,
    password varchar(20) not null,
    email varchar(20) not null,
    specialist varchar(20) not null
);

create table languages (
    lang_id serial primary key,
    lang_name varchar(20) not null
);

create table categories (
    category_id int generated always as identity primary key,
    category_name varchar(30) not null,
    lang_id int not null references languages (lang_id) on delete cascade
);

create table news (
    news_id int generated always as identity primary key,
    news_title varchar(30) not null,
    news_body text not null,
    news_time timestamptz default current_timestamp,
    news_views int default 1,
    author_id int not null references users (user_id) on delete cascade,
    category_id int not null references categories (category_id) on delete cascade,
    lang_id int not null references languages (lang_id) on delete cascade
);