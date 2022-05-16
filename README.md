# Docker-Assignment
Take a MongoDb Container (This is not supposed to be exposed to outside like host machine)

Take a MongoExpress container (You can expose this to external world like host machine and user interface can be used to insert data and create collections)

Build a custom image by taking Node image as a base image and run node api server reading data from above MongoDB container. (Dont copy the code to image but use volumes to make use of code in container from host machine)

Write a simple angular page (Take help of someone who is good at angular) copy this to an intermediate image in dockerfile and build it and finally copy the built code from the intermediate image to an nginx final stage image and this should be exposed to external host machine ( Note: From this angular code you should be able to call api exposed in step3)

Do all this using Docker compose and with a single command I should be able to up and run all containers

Before starting to implement this find send me an email( include Bala in mail thread) on your approach and your understanding of problem statement


![image](https://user-images.githubusercontent.com/34710942/168528950-ff449fd0-e951-4938-8bb6-acbc3cc783c2.png)


![image](https://user-images.githubusercontent.com/34710942/168530150-e7253a3f-2a21-411a-b91c-f96020f9596a.png)


![image](https://user-images.githubusercontent.com/34710942/168530080-1ed2f47b-ccb9-4d3f-bad1-702c63c0dbe3.png)


![image](https://user-images.githubusercontent.com/34710942/168530030-8a83a1a0-e30d-4700-9399-0056125dc96b.png)

