package com.server_application.ssd.Service;

import com.server_application.ssd.DTO.AuthUser;
import com.server_application.ssd.Models.User;
import org.apache.commons.codec.binary.Hex;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

import java.sql.ResultSet;
import java.sql.SQLException;

@Service
public class UserService {

    private final JdbcTemplate jdbcTemplate;

    public UserService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void createUser(User user) {
        String insertUserSql = "INSERT INTO user (name, email, password, userRole, phoneNumber, address) VALUES (?, ?, ?, ?, ?, ?)";

        String password = User.encrypt(user.getPassword());

        jdbcTemplate.update(
                insertUserSql,
                user.getName(),
                user.getEmail(),
                password,
                "USER",
                null,
                null
        );
    }

    public User auth(AuthUser authUser) {

        User user = getUserByEmail(authUser.getEmail());
        if (user != null && User.verify(authUser.getPassword(), user.getPassword())) {
            return user;
        }

        return null;

    }

    public User getUserById(int userId) {
        String selectUserSql = "SELECT * FROM user WHERE id = ?";
        return jdbcTemplate.queryForObject(selectUserSql, new UserRowMapper(), userId);
    }

    public User getUserByEmail(String email) {
        String selectUserSql = "SELECT * FROM user WHERE email = ?";
        return jdbcTemplate.queryForObject(selectUserSql, new UserRowMapper(), email);
    }

    public void updateUser(User user) {
        String updateUserSql = "UPDATE user SET name = ?, phoneNumber = ? , address = ? WHERE id = ?";
        jdbcTemplate.update(
                updateUserSql,
                user.getName(),
                user.getPhoneNumber(),
                user.getAddress(),
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
            user.setPhoneNumber(rs.getString("phoneNumber"));
            user.setAddress(rs.getString("address"));
            return user;
        }

    }

}
