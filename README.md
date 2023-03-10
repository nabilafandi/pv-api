# PV API Documentation
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/25421984-e0274bd5-4f57-4dfa-9688-947707a5864f?action=collection%2Ffork&collection-url=entityId%3D25421984-e0274bd5-4f57-4dfa-9688-947707a5864f%26entityType%3Dcollection%26workspaceId%3Dc3e8b60f-2f03-4663-8945-0234e292482b)

<!--ts-->
   * [Authentication](#authentication)
   * [Auth](#auth)
      * [POST /register](#post-register)
      * [POST /login](#post-login)
      * [GET /refresh](#get-refresh)
      * [DELETE /logout](#delete-logout)
   * [User](#user)
      * [PUT /:id/change-password](#put-idchange-password)
      * [GET /user/:id](#get-userid)
      * [PUT /user/:id](#put-userid)
      * [DELETE /user/:id](#delete-userid)
      * [GET /](#get-)
   * [Plant](#plant)
     * [GET /](#get--1)
     * [POST /](#post-)
     * [GET /:id](#get-id)
     * [PUT /:id](#put-id)
     * [DELETE /:id](#delete-id)
   * [Payment](#payment)
     * [POST /](#post--1)
<!--te-->


Authentication
============

| Header        | Content |
| ------------- | ------- |
| authorization | accessToken   |

Auth
============


### POST /register

| End Point | Method | Body  |
|-|-|-|
| /auth/register | post | username*,  password*,  alamat,  no\_hp,  saldo |
#### Response:

```json
{
    "message": "User created succesfully",
    "newUser": {
        "username": "xirkatest",
        "password": "$2b$10$p3FExqwhYB8bOAvKluK.ReM6xVQVxLZHVxvb5KOUeS6mv.9emGxIK",
        "alamat": "Kompleks Puri Syailendra Jl. Lemah Neundeut No.Kav-30, Sukawarna, Setrasari, West Java",
        "no_hp": "08123456789",
        "saldo": 100,
        "pengeluaran": 200,
        "total_pengeluaran": 400,
        "estimasi_pengeluaran_harian": 50,
        "estimasi_pengeluaran_bulanan": 600,
        "estimasi_pengeluaran_tahunan": 400,
        "total_penghematan_harian": 100,
        "total_penghematan_bulanan": 900,
        "total_penghematan_tahunan": 8000,
        "_id": "63e1fafa3b72759439fc5ceb",
        "__v": 0
    }
}
```


---

### POST /login

| End Point | Method | Body  |
|-|-|-|
| /auth/login | post | username*,  password*  |

#### Response:
```json
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoieGlya2F0ZXN0In0sImlhdCI6MTY3NTc1NDk3MywiZXhwIjoxNjc1NzU1NTMzfQ.PTDA-5AID_BqUeOGp1FbfxdeUGcuENzvUyVHhRtTZ64"
}
```

#### Cookies
`jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoieGlya2F0ZXN0In0sImlhdCI6MTY3NTc1NDk3MywiZXhwIjoxNjc1NzYwMDkzfQ.WFW26UmVl0cWwg9x-i95CdPpj-PV0rmGgbo9fL4uWCw; Path=/; HttpOnly; Expires=Wed, 08 Feb 2023 07:29:33 GMT;`


---

### GET /refresh
| End Point | Method | Body  |
|-|-|-|
| /auth/refresh | get | set cookies, jwt=token|
#### Response:
```json
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7fSwiaWF0IjoxNjc1NzU1NDc5LCJleHAiOjE2NzU3NTYwMzl9.OpBvDArzyYa_k5ZRMTD1PYOt6OJ6YZUkY6pvrZlacgQ"
}
```


---

### DELETE /logout
| End Point | Method | Body  |
|-|-|-|
| /auth/logout | delete | set cookies,  jwt=token  |
#### Response:
```json
{
    "message": "Logged out successfully"
}
```

#### Cookies:
Cookies otomatis terhapus



---

User
============

### PUT /:id/change-password
| End Point | Method | Body  |
|-|-|-|
| /user/:id/change-password | put | username*,  currentPassword*,  newPassword*,  |

#### Response:
```json
{
    "message": "Password changed successfully"
}
```


---

### GET /user/:id
| End Point | Method | Body  |
|-|-|-|
| /user/:id/ | get | none  |
#### Response:
```json
{
    "_id": "63e1fafa3b72759439fc5ceb",
    "username": "xirkatest",
    "password": "$2b$10$p3FExqwhYB8bOAvKluK.ReM6xVQVxLZHVxvb5KOUeS6mv.9emGxIK",
    "alamat": "Kompleks Puri Syailendra Jl. Lemah Neundeut No.Kav-30, Sukawarna, Setrasari, West Java",
    "no_hp": "08123456789",
    "saldo": 100,
    "__v": 0
}
```


---

### PUT /user/:id
| End Point | Method | Body  |
|-|-|-|
| /user/:id/ | put | username,  alamat,  no\_hp,  saldo, |

#### Response:
```json
{
    "message": "User updated succesfully.",
    "updatedUser": {
        "_id": "63e1fafa3b72759439fc5ceb",
        "username": "xirkatest",
        "password": "$2b$10$p3FExqwhYB8bOAvKluK.ReM6xVQVxLZHVxvb5KOUeS6mv.9emGxIK",
        "alamat": "Kompleks Puri Syailendra Jl. Lemah Neundeut No.Kav-30, Sukawarna, Setrasari, West Java",
        "no_hp": "08123456789",
        "saldo": 300,
        "__v": 0
    }
}
```


---

### DELETE /user/:id
| End Point | Method | Body  |
|-|-|-|
| /user/:id/ | delete | none  |

#### Response:
```json
{
    "message": "User deleted succesfully.",
    "deletedUser": {
        "_id": "63e2010fd10e251dc2c1cab4",
        "username": "xirkatest2",
        "password": "$2b$10$6oHD2CTmNgCl74d9bRrkmuEVbAnt5CDuoCgNKPKP53kU7hK93ceH2",
        "alamat": "Kompleks Puri Syailendra Jl. Lemah Neundeut No.Kav-30, Sukawarna, Setrasari, West Java",
        "no_hp": "08123456789",
        "saldo": 100,
        "__v": 0
    }
}
```



---

### GET /
| End Point | Method | Body  |
|-|-|-|
| /user | get | none  |

#### Response:
```json
[
    {
        "_id": "63e1fafa3b72759439fc5ceb",
        "username": "xirkatest",
        "password": "$2b$10$p3FExqwhYB8bOAvKluK.ReM6xVQVxLZHVxvb5KOUeS6mv.9emGxIK",
        "alamat": "Kompleks Puri Syailendra Jl. Lemah Neundeut No.Kav-30, Sukawarna, Setrasari, West Java",
        "no_hp": "08123456789",
        "saldo": 300,
        "__v": 0
    },
    {
        "_id": "63e2010fd10e251dc2c1cab4",
        "username": "xirkatest2",
        "password": "$2b$10$6oHD2CTmNgCl74d9bRrkmuEVbAnt5CDuoCgNKPKP53kU7hK93ceH2",
        "alamat": "Kompleks Puri Syailendra Jl. Lemah Neundeut No.Kav-30, Sukawarna, Setrasari, West Java",
        "no_hp": "08123456789",
        "saldo": 100,
        "__v": 0
    }
]
```




---


Plant
============

### GET /

| End Point | Method | Body |
| --------- | ------ | ---- |
| /plant    | get    | none |
#### Response
```json
[
    {
        "_id": "63e2027dd10e251dc2c1cabf",
        "nama": "xirkaplant",
        "alamat": "Kompleks Puri Syailendra Jl. Lemah Neundeut No.Kav-30, Sukawarna, Setrasari, West Java",
        "latitude": 2312,
        "longitude": 21221,
        "pv_capacity": 12,
        "tanggal_instalasi": "2023-10-21T00:00:00.000Z",
        "__v": 0
    },
    {
        "_id": "63e2029cd10e251dc2c1cac2",
        "nama": "xirkaplant2",
        "alamat": "Kompleks Puri Syailendra Jl. Lemah Neundeut No.Kav-30, Sukawarna, Setrasari, West Java",
        "latitude": 2312,
        "longitude": 21221,
        "pv_capacity": 12,
        "tanggal_instalasi": "2023-10-21T00:00:00.000Z",
        "__v": 0
    }
]
```


---


### POST /
| End Point | Method | Body                                                                                                              |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /plant    | post   | nama,  alamat,  latitude,  longitude,  pv_capacity,  tanggal_instalasi, |
#### Response
```json
{
    "message": "Plant created succesfully",
    "newPlant": {
        "nama": "xirkaplant",
        "alamat": "Kompleks Puri Syailendra Jl. Lemah Neundeut No.Kav-30, Sukawarna, Setrasari, West Java",
        "latitude": 2312,
        "longitude": 21221,
        "pv_capacity": 12,
        "tanggal_instalasi": "2023-10-21T00:00:00.000Z",
        "_id": "63e2027dd10e251dc2c1cabf",
        "__v": 0
    }
}
```


---

### GET /:id
| End Point  | Method | Body |
| ---------- | ------ | ---- |
| /plant/:id | get    | none |
#### Response
```json
{
    "_id": "63e2027dd10e251dc2c1cabf",
    "nama": "xirkaplant",
    "alamat": "Kompleks Puri Syailendra Jl. Lemah Neundeut No.Kav-30, Sukawarna, Setrasari, West Java",
    "latitude": 2312,
    "longitude": 21221,
    "pv_capacity": 12,
    "tanggal_instalasi": "2023-10-21T00:00:00.000Z",
    "__v": 0
}
```


---

### PUT /:id


| End Point  | Method | Body                                                                                                                                                                                         |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /plant/:id | put    | nama,  alamat,  latitude,  longitude,  pv_capacity,  tanggal_instalasi|
#### Response
```json
{
    "message": "Plant updated succesfully.",
    "updatedPlant": {
        "_id": "63e2027dd10e251dc2c1cabf",
        "nama": "xirkaplant",
        "alamat": "Kompleks Puri Syailendra Jl. Lemah Neundeut No.Kav-30, Sukawarna, Setrasari, West Java",
        "latitude": 2312,
        "longitude": 21221,
        "pv_capacity": 12,
        "tanggal_instalasi": "2023-10-21T00:00:00.000Z",
        "__v": 0
    }
}
```



---


### DELETE /:id

| End Point  | Method | Body |
| ---------- | ------ | ---- |
| /plant/:id | delete | none |

#### Response

```json
{
    "message": "Plant deleted succesfully.",
    "deletedPlant": {
        "_id": "63e2027dd10e251dc2c1cabf",
        "nama": "xirkaplant",
        "alamat": "Kompleks Puri Syailendra Jl. Lemah Neundeut No.Kav-30, Sukawarna, Setrasari, West Java",
        "latitude": 2312,
        "longitude": 21221,
        "pv_capacity": 12,
        "tanggal_instalasi": "2023-10-21T00:00:00.000Z",
        "__v": 0
    }
}
```


---


Payment
============

### POST /

| End Point | Method | Body |
| --------- | ------ | ---- |
| /payment    | post    | https://snap-docs.midtrans.com/#request-body-json-parameter |
#### Response
```json
{
    "message": "Transaction created succesfully",
    "transaction": {
        "token": "be3c4810-716b-41f5-aadb-b1a27bbf1425",
        "redirect_url": "https://app.sandbox.midtrans.com/snap/v3/redirection/be3c4810-716b-41f5-aadb-b1a27bbf1425"
    }
}
```


---

