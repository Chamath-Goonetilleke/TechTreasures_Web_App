package com.server_application.ssd.Service;

import com.server_application.ssd.Models.User;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.sql.SQLException;

@Service
public class UserService {

    private final JdbcTemplate jdbcTemplate;

    public UserService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void createUser(User user) {
        String insertUserSql = "INSERT INTO user (name, email, password, userRole) VALUES (?, ?, ?, ?)";
        jdbcTemplate.update(
                insertUserSql,
                user.getName(),
                user.getEmail(),
                user.getPassword(),
                User.UserRole.USER.toString()
        );
    }

    public User getUserById(int userId) {
        String selectUserSql = "SELECT * FROM user WHERE id = ?";
        return jdbcTemplate.queryForObject(selectUserSql, new UserRowMapper(), userId);
    }

    public void updateUser(User user) {
        String updateUserSql = "UPDATE user SET name = ?, email = ?, password = ?, userRole = ? WHERE id = ?";
        jdbcTemplate.update(
                updateUserSql,
                user.getName(),
                user.getEmail(),
                user.getPassword(),
                user.getUserRole(),
                user.getId()
        );
    }

    public void deleteUser(int userId) {
        String deleteUserSql = "DELETE FROM user WHERE id = ?";
        jdbcTemplate.update(deleteUserSql, userId);
    }


    public static class UserRowMapper implements RowMapper<User> {
        @Override
        public User mapRow(ResultSet rs, int rowNum) throws SQLException {
            User user = new User();
            user.setId(rs.getInt("id"));
            user.setName(rs.getString("name"));
            user.setEmail(rs.getString("email"));
            user.setPassword(rs.getString("password"));
            user.setUserRole(rs.getString("userRole"));
            return user;
        }

    }

}
