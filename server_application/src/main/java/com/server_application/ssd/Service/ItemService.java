package com.server_application.ssd.Service;

import com.server_application.ssd.Models.Items;
import org.springframework.stereotype.Service;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;
@Service
public class ItemService {

    private final JdbcTemplate jdbcTemplate;

    public ItemService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    public List<String> getItemsAll() {
        String sql = "SELECT name FROM test1";
        return jdbcTemplate.queryForList(sql, String.class);
    }
}
