package com.thg.accelerator.tasklist_project.service;

import com.thg.accelerator.tasklist_project.model.Task;
import com.thg.accelerator.tasklist_project.model.TaskFilter;

import java.util.List;
import java.util.function.Predicate;

public class FilterStrategyFactory {
    public Predicate<Task> getFilteredStrategyFor(TaskFilter filter) {

        return filter.getPredicate();
    }
}