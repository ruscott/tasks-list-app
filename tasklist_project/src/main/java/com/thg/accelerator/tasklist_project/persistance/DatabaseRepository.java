package com.thg.accelerator.tasklist_project.persistance;

import com.thg.accelerator.tasklist_project.model.Task;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DatabaseRepository extends CrudRepository<Task, Long> {
    List<Task> findAll();
}
