package com.server_application.ssd.Controller;

import com.server_application.ssd.Models.Card;
import com.server_application.ssd.Models.Cart;
import com.server_application.ssd.Models.Items;
import com.server_application.ssd.Service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("items")
public class ItemController {

    @Autowired
    public ItemService itemService;
    @GetMapping("/test")
    public ResponseEntity<List<String>> getAllBlogs() {
        List<String> data = itemService.getItemsAll();
        return new ResponseEntity<>(data, HttpStatus.OK);
    }
    @GetMapping("/")
    public String home(){
        return "Hello World!";
    }
    @GetMapping("/items")
    public ResponseEntity<List<Items>> getAllItems() {
        List<Items> data = itemService.getAllItems();
        return new ResponseEntity<>(data, HttpStatus.OK);

    }
    @GetMapping("/items/{id}")
    public ResponseEntity<Map<String, Object>> getItemById(@PathVariable int id) {
        Map<String, Object> data = itemService.getItemById(id);
        return new ResponseEntity<>(data, HttpStatus.OK);

    }
    @PostMapping("/insert-cart")
    public void insertData(@RequestBody Cart cart) {
        System.out.println("Cart: "+cart.getItemId());
        itemService.insertData(cart);
    }

    @PostMapping("/insert-card")
    public void insertData(@RequestBody Card card) {
        System.out.println("Card: "+card.getCardNo());
        itemService.insertCardData(card);
    }
}
