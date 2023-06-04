package com.thg.accelerator.tasklist_project.model;

public enum TaskPriority {
    LOW("Low"),
    MEDIUM("Medium"),
    HIGH("High");

    String priorityString;

    TaskPriority(String priorityString) {
        this.priorityString = priorityString;
    }

    public String getPriorityString() {
        return priorityString;
    }
}
