package com.thg.accelerator.tasklist_project.controller;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.thg.accelerator.tasklist_project.model.TaskFilter;
import com.thg.accelerator.tasklist_project.model.TaskSort;
import com.thg.accelerator.tasklist_project.service.DatabaseService;
import com.thg.accelerator.tasklist_project.model.Task;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/tasks")
@CrossOrigin
public class TaskController {
    DatabaseService databaseService;

    public TaskController(final DatabaseService databaseService) {
        this.databaseService = databaseService;
    }

    @GetMapping("/all")
    public ResponseEntity<Iterable<Task>> getTasks() {
        try {
            Iterable<Task> tasks = databaseService.findAll();
            return ResponseEntity.ok().body(tasks);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/sort-filter/{filter}/{sort}")
    public ResponseEntity<List<Task>> getTasksAll(@PathVariable String filter, @PathVariable String sort) {
        try {
            List<Task> tasks = databaseService.findAllFilteredSort(TaskFilter.valueOf(filter), TaskSort.valueOf(sort));
            return ResponseEntity.ok().body(tasks);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    @PostMapping("/add")
    public ResponseEntity<Task> newTask(@RequestBody Task task) {
        try {
            databaseService.createTask(task);
            return ResponseEntity.status(HttpStatus.CREATED).body(task);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable long id) {
        try {
            databaseService.deleteTask(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/completed/{id}")
    public ResponseEntity<Optional<Task>> updateTaskCompleted(@PathVariable long id, @RequestBody boolean isCompleted) {
        try {
            Optional<Task> updatedTask = databaseService.updateTaskCompleted(isCompleted, id);
            return ResponseEntity.ok().body(updatedTask);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/progress/{id}")
    public ResponseEntity<Optional<Task>> updateTaskProgress(@PathVariable long id, @RequestBody boolean inProgress) {
        try {
            Optional<Task> updatedTask = databaseService.updateTaskProgress(inProgress, id);
            return ResponseEntity.ok().body(updatedTask);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}

