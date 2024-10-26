FROM maven:latest AS build

WORKDIR /app/basket_service

COPY pom.xml .
COPY src ./src

RUN mvn clean install -DskipTests

FROM openjdk:17-jdk-alpine

WORKDIR /app/basket_service

COPY --from=build /app/basket_service/target/basket_service-0.0.1-SNAPSHOT.jar basket_service.jar

ENTRYPOINT ["java", "-jar", "basket_service.jar"]