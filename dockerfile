FROM maven:3.8.1-amazoncorretto-16 AS build

COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package


FROM amazoncorretto:16-alpine
COPY --from=build /home/app/target/medium-0.0.1-SNAPSHOT.jar /usr/local/lib/spring-app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/usr/local/lib/spring-app.jar"]