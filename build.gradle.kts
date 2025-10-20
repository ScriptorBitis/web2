import org.gradle.internal.declarativedsl.parsing.main

plugins {
    id("java")
    id("war")
}

group = "alfarius.goida"
version = ""

repositories {
    mavenCentral()

}

dependencies {
    testImplementation(platform("org.junit:junit-bom:5.10.0"))
    testImplementation("org.junit.jupiter:junit-jupiter")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")


    // https://mvnrepository.com/artifact/jakarta.servlet/jakarta.servlet-api
    compileOnly("jakarta.servlet:jakarta.servlet-api:6.0.0")
    // https://mvnrepository.com/artifact/javax.servlet/jstl
    implementation("jakarta.servlet.jsp.jstl:jakarta.servlet.jsp.jstl-api:3.0.0")

}

tasks{

}
