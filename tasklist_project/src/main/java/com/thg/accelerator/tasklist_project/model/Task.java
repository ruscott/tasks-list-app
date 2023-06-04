package com.thg.accelerator.tasklist_project.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Date;

@Entity
public class Task {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;

    private String name;
    private String priority;
    private boolean completed=false;

    private boolean inProgress=false;

    private Date date = setDate();

    public Task(String name, String priority) {
        this.name = name;
        this.priority = priority;
    }

    public Task() {}

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getPriority() {
        return priority;
    }

    public Date getDate() {
        return date;
    }

    public boolean isCompleted() {
        return completed;
    }

    public boolean isInProgress() {
        return inProgress;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
    public void setInProgress(boolean inProgress) {
        this.inProgress = inProgress;
    }

    private Date setDate() {
        return new Date();
    }

    public void setId(long id) {
        this.id = id;
    }
}
