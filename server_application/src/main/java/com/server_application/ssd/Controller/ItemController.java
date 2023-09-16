package com.server_application.ssd.Controller;

import com.server_application.ssd.Models.Items;
import com.server_application.ssd.Service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("items")
public class ItemController {

    @Autowired
    public ItemService itemService;
    @GetMapping("/test")
    public ResponseEntity<List<String>> getAllBlogs() {

        System.out.println("______________________________________");

        List<String> data = itemService.getItemsAll();


        return new ResponseEntity<>(data, HttpStatus.OK);

    }
    @GetMapping("/")
    public String home(){
        System.out.println("======================");
        return "Hello World!";
    }
}
