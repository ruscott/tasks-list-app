package com.thg.accelerator.tasklist_project.model;

import java.util.function.Predicate;

public enum TaskFilter {
    COMPLETED(Task::isCompleted),
    INPROGRESS(task -> task.isInProgress() && !task.isCompleted()),
    ALL(task -> task.getName()!=null);

    Predicate<Task> predicate;

    TaskFilter(Predicate<Task> predicate) {
        this.predicate = predicate;
    }

    public Predicate<Task> getPredicate() {
        return predicate;
    }
}
