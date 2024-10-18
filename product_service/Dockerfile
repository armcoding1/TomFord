FROM maven:latest AS build

WORKDIR /app/product_service

COPY pom.xml .
COPY src ./src

RUN mvn clean install -DskipTests

FROM openjdk:17-jdk-alpine

WORKDIR /app/product_service

COPY --from=build /app/product_service/target/product_service-0.0.1-SNAPSHOT.jar product_service.jar

ENTRYPOINT ["java", "-jar", "product_service.jar"]