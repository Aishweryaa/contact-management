# Step 1: Use an official Maven image with JDK 21 to build the project
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app
COPY . .
# Move into the subfolder where pom.xml actually lives
WORKDIR /app/contactmanagement
RUN mvn clean package -DskipTests

# Step 2: Use a lightweight JRE image to run the built application
FROM eclipse-temurin:21-jre
WORKDIR /app
# Copy the built jar file from the correct target location
COPY --from=build /app/contactmanagement/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
