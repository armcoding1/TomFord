FROM maven:latest AS build

WORKDIR /app/admin_service

COPY pom.xml .
COPY src ./src

RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-alpine

WORKDIR /app/admin_service

COPY --from=build /app/admin_service/target/admin_service-0.0.1-SNAPSHOT.jar admin_service.jar

ENTRYPOINT ["java", "-jar", "admin_service.jar"]