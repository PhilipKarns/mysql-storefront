# mysql-storefront
an amazon-like storefront using MySQL and Node.JS

This image shows the prompts and user entering product ID 8 (MLB The Show 17) and quantity 1000. The order went through
successfully and the user was charged $60,000 (1000 * $60)
![node image 1](https://raw.githubusercontent.com/pakmania10/mysql-storefront/master/images/node_image_1.jpg)

This image shows the user selecting the same product ID, 8, and trying to buy 50000 copies. Because the available quantity was only 49000
the user was informed to try again.
![node image 2](https://raw.githubusercontent.com/pakmania10/mysql-storefront/master/images/node_image_2.jpg)

This image shows the DB displaying 50000 copies of MLB the show, prior to the initial transaction
![DB image 1](https://raw.githubusercontent.com/pakmania10/mysql-storefront/master/images/DB_image_1.jpg)

This image shows the DB displaying 49000 copies of the show, after the initial transaction updated the DB
![DB image 2](https://raw.githubusercontent.com/pakmania10/mysql-storefront/master/images/DB_image_2.jpg)