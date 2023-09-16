package com.server_application.ssd.Service;

import com.server_application.ssd.Models.Cart;
import com.server_application.ssd.Models.Items;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;
import org.springframework.jdbc.core.JdbcTemplate;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

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

    public List<Items> getAllItems() {
        String sql = "SELECT id, name, price, description, count, imageUrl FROM items";
        
        List<Items> itemsList = jdbcTemplate.query(sql, new ItemsRowMapper());
        return itemsList;
    }

    public Map<String, Object> getItemById(int id) {
        String sql = "SELECT * FROM items WHERE id = ?";
        Map<String, Object> item = jdbcTemplate.queryForMap(sql, id);
        return item;
    }

    public void insertData(Cart cart) {

        String sql = "INSERT INTO carts (itemId, userId) VALUES (?, ?)";
        jdbcTemplate.update(sql, cart.getItemId(), cart.getUserId());
    }

    public class ItemsRowMapper implements RowMapper<Items> {
        @Override
        public Items mapRow(ResultSet rs, int rowNum) throws SQLException {
            Items items = new Items();
            items.setId(rs.getInt("id"));
            items.setName(rs.getString("name"));
            items.setPrice(rs.getString("price"));
            items.setDescription(rs.getString("description"));
            items.setCount(rs.getInt("count"));
            items.setImageUrl(rs.getString("imageUrl"));
            return items;
        }

    }
}
