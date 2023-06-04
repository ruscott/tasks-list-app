package com.thg.accelerator.tasklist_project;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.thg.accelerator.tasklist_project.persistance.DatabaseRepository;
import com.thg.accelerator.tasklist_project.model.Task;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class TaskControllerTest {

    @MockBean
    DatabaseRepository databaseRepository;

    @Autowired
    MockMvc mockMvc;

    @BeforeEach
    void init() {
        databaseRepository.deleteAll();
    }

    private ObjectMapper objectMapper = new ObjectMapper();

    @Test
    public void getTasks() throws Exception {

        when(databaseRepository.findAll()).thenReturn(List.of(new Task("hello", "High")));
        MvcResult result = mockMvc.perform(get("/tasks/all"))
                .andExpect(status().isOk())
                .andReturn();

        String stringResult = result.getResponse().getContentAsString();
        List taskList = objectMapper.readValue(stringResult, List.class);
        Assertions.assertThat(taskList).hasSize(1);
    }

    @Test
    public void newTask() throws Exception {
        Task task1 = new Task("test_delete_1", "High");
        Task task2 = new Task("test_delete_2", "Medium");


        when(databaseRepository.findAll()).thenReturn(List.of(task1));

        String taskJson = objectMapper.writeValueAsString(task2);

        String url = "/tasks/add";
        mockMvc.perform(post(url).contentType(MediaType.APPLICATION_JSON)
                        .content(taskJson))
                .andExpect(status().isCreated());

        MvcResult resultPost = mockMvc.perform(get("/tasks/all")).andReturn();
        String stringResult = resultPost.getResponse().getContentAsString();
        List taskList = objectMapper.readValue(stringResult, List.class);
        Assertions.assertThat(taskList.size()).isEqualTo(1);

        ArgumentCaptor<Task> taskCaptor = ArgumentCaptor.forClass(Task.class);
        verify(databaseRepository, times(1)).save(taskCaptor.capture());

        Task capturedTask = taskCaptor.getValue();
        assertEquals(task2.getName(), capturedTask.getName());
        assertEquals(task2.getPriority(), capturedTask.getPriority());
    }

    @Test
    public void deleteTask() throws Exception {
        Task task1 = new Task("test_delete_1", "High");
        Task task2 = new Task("test_delete_2", "Medium");

        long task1Id = 2L;
        long task2Id = 3L;

        task1.setId(task1Id);
        task2.setId(task2Id);

        List<Task> tasks = Arrays.asList(task1, task2);
        when(databaseRepository.findAll()).thenReturn(tasks);

        String url = "/tasks/delete/" + task1Id;
        mockMvc.perform(delete(url))
                .andExpect(status().isOk());

        verify(databaseRepository).deleteById(task1Id);
    }

    @Test
    public void updateTaskCompleted() throws Exception {
        Task task = new Task("test_update", "High");
        long taskId = 2L;
        task.setId(taskId);

        when(databaseRepository.findAll()).thenReturn(List.of(task));
        when(databaseRepository.findById(taskId)).thenReturn(Optional.of(task));

        String taskJson = objectMapper.writeValueAsString("True");

        mockMvc.perform(put("/tasks/completed/" + taskId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(taskJson))
                .andExpect(status().isOk());

        ArgumentCaptor<Task> taskCaptor = ArgumentCaptor.forClass(Task.class);
        verify(databaseRepository).save(taskCaptor.capture());

        Task savedTask = taskCaptor.getValue();
        assertTrue(savedTask.isCompleted());
    }
    }

