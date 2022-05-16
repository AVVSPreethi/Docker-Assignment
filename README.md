# Docker-Assignment
Take a MongoDb Container (This is not supposed to be exposed to outside like host machine)

Take a MongoExpress container (You can expose this to external world like host machine and user interface can be used to insert data and create collections)

Build a custom image by taking Node image as a base image and run node api server reading data from above MongoDB container. (Dont copy the code to image but use volumes to make use of code in container from host machine)

Write a simple angular page (Take help of someone who is good at angular) copy this to an intermediate image in dockerfile and build it and finally copy the built code from the intermediate image to an nginx final stage image and this should be exposed to external host machine ( Note: From this angular code you should be able to call api exposed in step3)

Do all this using Docker compose and with a single command I should be able to up and run all containers

Before starting to implement this find send me an email( include Bala in mail thread) on your approach and your understanding of problem statement


![image](https://user-images.githubusercontent.com/34710942/168528950-ff449fd0-e951-4938-8bb6-acbc3cc783c2.png)


![image](https://user-images.githubusercontent.com/34710942/168529024-067035e2-6aaa-4e86-9e06-3633aaee44f2.png)


![image](https://user-images.githubusercontent.com/34710942/168529067-d4646952-cb66-44c7-8d4c-acc1beca91ef.png)
