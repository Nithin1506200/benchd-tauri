## user

| Name     | Type | Description |
| -------- | ---- | ----------- |
| id       | UUID |             |
| name     |      |             |
| pet_name |      |             |
| dob      |      |             |
| gender   |      |             |

## gaali

| Name        | Type            | Description |
| ----------- | --------------- | ----------- |
| id          | UUID            |             |
| user        | FK(user)        |             |
| created_at  | time / null     |             |
| gaali       | FK(gaali_token) |             |
| description | char(1024)      |             |

### indexes

- gaali
- user

## gaali_token

| Name | Type | Description |
| ---- | ---- | ----------- |
| id   |      |             |
| name |      |             |
