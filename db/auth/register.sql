insert into users (username, password, balance, user_img)
values (${username}, ${password}, 0, 'https://tinyurl.com/y57z9jbs')
returning username, balance, user_img, id 