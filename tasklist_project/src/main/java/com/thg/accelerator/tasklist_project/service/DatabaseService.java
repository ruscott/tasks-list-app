package com.thg.accelerator.tasklist_project.service;

import com.thg.accelerator.tasklist_project.model.Task;
import com.thg.accelerator.tasklist_project.model.TaskFilter;
import com.thg.accelerator.tasklist_project.model.TaskSort;
import com.thg.accelerator.tasklist_project.persistance.DatabaseRepository;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class DatabaseService implements DatabaseServiceInterface {
    DatabaseRepository databaseRepository;

    public DatabaseService(DatabaseRepository databaseRepository) {
        this.databaseRepository = databaseRepository;
    }

    @Override
    public Task createTask(Task task) {
        return databaseRepository.save(task);
    }


    @Override
    public Optional<Task> updateTaskCompleted(boolean isCompleted, long id) {
        return databaseRepository.findById(id)
                .map(task -> {
                    task.setCompleted(isCompleted);
                    return databaseRepository.save(task);});
    }

    @Override
    public Optional<Task> updateTaskProgress(boolean inProgress, long id) {
        return databaseRepository.findById(id)
                .map(task -> {
                    task.setInProgress(inProgress);
                    return databaseRepository.save(task);});
    }

    @Override
    public List<Task> findAll() {
        return databaseRepository.findAll();
    }

    @Override
    public List<Task> findAllFilteredSort(TaskFilter filter, TaskSort sort) {
        System.out.println("a");
        List<Task> filteredList = getFilteredTask(filter);
        return sort(filteredList, sort.getComparator());    }

    @Override
    public List<Task> getFilteredTask(TaskFilter filter){
        FilterStrategyFactory filterStrategyFactory = new FilterStrategyFactory();
        Predicate<Task> taskFilter = filterStrategyFactory.getFilteredStrategyFor(filter);
        return StreamSupport.stream(databaseRepository.findAll().spliterator(), false).filter(taskFilter).collect(Collectors.toList());
    }

    private List<Task> sort(List<Task> tasks, Comparator<Task> comparator) {
        return tasks.stream().
                sorted(comparator)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteTask(long id) {
        databaseRepository.deleteById(id);
    }
}
