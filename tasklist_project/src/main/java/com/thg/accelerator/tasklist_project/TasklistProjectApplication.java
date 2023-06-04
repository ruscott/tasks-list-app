package com.thg.accelerator.tasklist_project;

import com.thg.accelerator.tasklist_project.persistance.DatabaseRepository;
import com.thg.accelerator.tasklist_project.model.Task;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.slf4j.Logger;

@SpringBootApplication
@RestController //rest controller to send and recieve requests
public class TasklistProjectApplication {
    private static final Logger log = LoggerFactory.getLogger(TasklistProjectApplication.class);
    public static void main(String[] args) {
        SpringApplication.run(TasklistProjectApplication.class, args);
    }

    @Bean
    public CommandLineRunner demo(DatabaseRepository databaseRepository) {
        return (args) -> {
            databaseRepository.save(new Task ("Work", "HIGH"));
            databaseRepository.save(new Task ("Clean", "MEDIUM"));
            databaseRepository.save(new Task ("Cook", "LOW"));

            // fetch all customers
            log.info("Task found with findAll():");
            log.info("-------------------------------");
            for (Task task : databaseRepository.findAll()) {
                log.info(task.toString());
            }
            log.info("");}

        ;}

    @GetMapping("/helloWorld")
    public String helloWord(){
      return "Hello, Ru!";
    }

    @GetMapping("/hello")
    public String sayHello(@RequestParam(value = "myName") String name) {
        return String.format("Hello %s! You Smell!", name);
    }
}
