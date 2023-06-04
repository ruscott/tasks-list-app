package com.thg.accelerator.tasklist_project.model;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.function.Predicate;

public enum TaskSort {
    PRIORITY(Comparator.comparing(task -> Arrays.asList("High", "Medium", "Low").indexOf(task.getPriority()))),
    DATE(Comparator.comparing(Task::getDate)),
    DEFAULT(Comparator.comparing(Task::getDate));

    Comparator<Task> comparator;

    TaskSort(Comparator<Task> comparator) {
        this.comparator = comparator;
    }

    public Comparator<Task> getComparator() {
        return comparator;
    }
}
