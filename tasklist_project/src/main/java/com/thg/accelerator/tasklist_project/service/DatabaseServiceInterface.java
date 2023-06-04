package com.thg.accelerator.tasklist_project.service;
import com.thg.accelerator.tasklist_project.model.Task;
import com.thg.accelerator.tasklist_project.model.TaskFilter;
import com.thg.accelerator.tasklist_project.model.TaskSort;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface DatabaseServiceInterface {

    Task createTask(Task task);

    Optional<Task> updateTaskCompleted(boolean isCompleted, long id);

    Optional<Task> updateTaskProgress(boolean isCompleted, long id);

    List<Task> findAll();
    List<Task> findAllFilteredSort(TaskFilter filter, TaskSort sort);

    List<Task> getFilteredTask(TaskFilter filter);

    void deleteTask(long id);

}