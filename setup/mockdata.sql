insert into users (first_name, last_name,  password, email, specialist) values
('Ismail', 'Ozodov', 'ismail1234', 'ismail707@gmail.com', 'Bosh direktor'),
('Shaxboz', 'Teshayev', 'shaxboz1234', 'shaxboz@gmail.com', 'Bosh muxarrir');

insert into languages (lang_name) values
('en'),
('ru'),
('uz');

insert into categories (category_name, lang_id) values
('Jahon', 1),
('Sport', 1),
('Ozbekistan', 1),
('Мир', 2),
('Спорт', 2),
('Узбекистан', 2),
('World', 1),
('Sport', 1),
('Uzbekistan', 1);

insert into news (news_title, news_body, author_id, category_id, lang_id) values
('Songi Yangilikar', 'Bir guruh o‘zbekistonliklar AQShning Toshkentdagi elchixonasi DV-2021 
dasturi g‘oliblariga viza berishda sustkashlik qilayotganidan shikoyat qilishdi. 
16 sentyabrdan buyon atigi 41 kishi suhbatga chaqirilgan. Elchixona tahririyatning 
bu boradagi so‘roviga javoban dastur g‘oliblariga viza berish eng oxirgi o‘rindagi 
masala ekanini malum qildi.', 2, 3, 3),

('Мир', 'Известно, что развитие каждого бизнеса зависит от эффективной рекламы. Законопроект 
«О рекламе», одобренный в Законодательной палате в первом чтении вызывает большое беспокойство 
у предпринимателей. Молчание ведомств, ответственных за поддержку предпринимательства ещё больше 
увеличивает эту тревогу..', 1, 4, 2),

('Sport', 'One day someone comes to the central park to walking with his dog, and raining goes
hard then come back to home with his dog, but he catch cold and go to the doctor.', 
2, 8, 1);

