# API
Repository yang berisi tentang kebutuhan untuk implementasi API dari aplikasi.

### **Admin**
#### GET

```http
  GET /admin
```

| Arguments | Output              |
| :-------- | :------------------ |
| `()`      | Semua daftar admin  |


```http
  GET /admin/{id}
```

| Params | Type     | Output               |
| :----- | :------- | :------------------- |
| `id`   | `string` | Admin berdasarkan ID |


```http
  GET /admin/image/{name}
```

| Params   | Type     | Output                   |
| :------- | :------- | :----------------------- |
| `name`   | `string` | Foto profile dari admin  |


#### PUT

```http
  PUT /admin
```

| Payloads  | Type     | Output                         |
| :-------- | :------- | :----------------------------- |
| `name`    | `string` | Admin berhasil diubah datanya  |
| `email`   | `string` |                                |
| `oldImage`| `string` |                                |
| `newImage`| `files`  |                                |


#### DELETE

```http
  DELETE /admin
```

| Payloads  | Type     | Output                  |
| :-------- | :------- | :---------------------- |
| `email`   | `string` | Admin berhasil dihapus  |


#### POST

```http
  POST /admin
```

| Payloads  | Type     | Output                 |
| :-------- | :------- | :--------------------- |
| `name`    | `string` | Admin berhasil dibuat  |
| `email`   | `string` |                        |
| `image`   | `files`  |                        |


```http
  POST /admin-login
```

| Payloads     | Type     | Output                 |
| :----------- | :------- | :--------------------- |
| `name`       | `string` | Admin berhasil login   |
| `password`   | `string` |                        |


### **Forum**
#### GET

```http
  GET /forum
```

| Arguments | Output            |
| :-------- | :---------------- |
| `()`      | Semua data forum  |


```http
  GET /forum/{id}
```

| Params    | Type     | Output               |
| :-------- | :------- | :------------------- |
| `id`      | `string` | Forum berdasarkan ID |


```http
  GET /forumDates
```

| Arguments | Output                               |
| :-------- | :----------------------------------- |
| `()`      | Semua data forum berdasarkan tanggal |

```http
  GET /forumCat/{id}
```

| Params    | Type     | Output                                     |
| :-------- | :------- | :----------------------------------------- |
| `id`      | `string` | Semua daftar forum berdasarkan id kategori |


```http
  GET /forumDis/{id}
```

| Params    | Type     | Output                                    |
| :-------- | :------- | :---------------------------------------- |
| `id`      | `string` | Semua daftar forum berdasarkan id diskusi |


```http
  GET /search-forum/{title}
```

| Params    | Type     | Output                         |
| :-------- | :------- | :----------------------------- |
| `title`   | `string` | Daftar forum berdasarkan title |


#### PUT
```http
  PUT /forum
```

| Payloads  | Type     | Output                        |
| :-------- | :------- | :---------------------------- |
| `id`      | `string` | Forum berhasil diubah datanya |
| `title`   | `string` |                               |
| `oldImage`| `string` |                               |
| `newImage`| `files`  |                               |


```http
  PUT /forumUpVote
```

| Payloads  | Type     | Output                                         |
| :-------- | :------- | :--------------------------------------------- |
| `id`      | `string` | Memperbarui up vote forum berdasarkan id forum |


```http
  PUT /forumDownVote
```

| Payloads  | Type     | Output                                         |
| :-------- | :------- | :--------------------------------------------- |
| `id`      | `string` | Memperbarui up vote forum berdasarkan id forum |


#### DELETE
```http
  DELETE /forum
```

| Payloads  | Type     | Output                 |
| :-------- | :------- | :--------------------- |
| `id`      | `string` | Forum berhasil dihapus |


#### POST
```http
  POST /forum
```

| Payloads  | Type     | Output              |
| :-------- | :------- | :------------------ |
| `title`   | `string` | Forum berhasil buat |
| `image`   | `string` |                     |


### **Kategori**
#### GET

```http
  GET /categories
```

| Arguments | Output                |
| :-------- | :-------------------- |
| `()`      | Semua daftar kategori |


```http
  GET /categories/{id}
```

| Params    | Type     | Output                  |
| :-------- | :------- | :---------------------- |
| `id`      | `string` | Kategori berdasarkan ID |


#### PUT
```http
  PUT /categories
```

| Payloads  | Type     | Output                           |
| :-------- | :------- | :------------------------------- |
| `name`    | `string` | Kategori berhasil diubah datanya |
| `title`   | `string` |                                  |


#### DELETE
```http
  DELETE /categories
```

| Payloads  | Type     | Output                    |
| :-------- | :------- | :------------------------ |
| `id`      | `string` | Kategori berhasil dihapus |


#### POST
```http
  POST /categories
```

| Payloads  | Type     | Output                   |
| :-------- | :------- | :----------------------- |
| `title`   | `string` | Kategori berhasil dibuat |


### **Kategori Forum**
#### GET

```http
  GET /kategori_forum
```

| Arguments | Output                      |
| :-------- | :-------------------------- |
| `()`      | Semua daftar kategori forum |


```http
  GET /kategori_forum/{id}
```

| Params | Type     | Output                        |
| :----- | :------- | :---------------------------- |
| `id`   | `string` | Kategori forum berdasarkan ID |


#### POST
```http
  POST /kategori_forum
```

| Payloads    | Type     | Output                         |
| :-----------| :------- | :----------------------------- |
| `forumId`   | `string` | Kategori forum berhasil dibuat |
| `kategoriId`| `string` |                                |


### **Kategori Post**
#### GET

```http
  GET /kategori_post
```

| Arguments | Output                     |
| :-------- | :------------------------- |
| `()`      | Semua daftar kategori post |


```http
  GET /kategori_post/{id}
```

| Params | Type     | Output                       |
| :----- | :------- | :--------------------------- |
| `id`   | `string` | Kategori post berdasarkan ID |


#### POST
```http
  POST /kategori_post
```

| Payloads    | Type     | Output                        |
| :-----------| :------- | :---------------------------- |
| `postId`    | `string` | Kategori post berhasil dibuat |
| `kategoriId`| `string` |                               |


### **Komentar Forum**
#### GET

```http
  GET /komentar_forum
```

| Arguments | Output                      |
| :-------- | :-------------------------- |
| `()`      | Semua daftar komentar forum |


```http
  GET /komentar_forum/{id}
```

| Params | Type     | Output                        |
| :----- | :------- | :---------------------------- |
| `id`   | `string` | Komentar forum berdasarkan ID |

#### PUT
```http
  PUT /komentar_forum
```

| Payloads    | Type     | Output                         |
| :-----------| :------- | :----------------------------- |
| `content`   | `string` | Komentar forum berhasil diubah |


#### DELETE
```http
  DELETE /komentar_forum
```

| Payloads  | Type     | Output                          |
| :-------- | :------- | :------------------------------ |
| `id`      | `string` | Komentar forum berhasil dihapus |


#### POST
```http
  POST /komentar_forum
```

| Payloads  | Type     | Output                              |
| :-------- | :------- | :---------------------------------- |
| `content` | `string` | Komentar forum berhasil ditambahkan |
| `forumId` | `string` |                                     |


### **Komentar Post**
#### GET

```http
  GET /komentar_post
```

| Arguments | Output                   |
| :-------- | :----------------------- |
| `()`      | Data berhasil didapatkan |


```http
  GET /komentar_post/{id}
```

| Params | Type     | Output                                  |
| :----- | :------- | :-------------------------------------- |
| `id`   | `string` | Data berhasil didapatkan berdasarkan ID |


#### PUT
```http
  PUT /komentar_post
```

| Payloads    | Type     | Output                        |
| :-----------| :------- | :---------------------------- |
| `content`   | `string` | Komentar post berhasil diubah |


#### DELETE
```http
  DELETE /komentar_post
```

| Payloads  | Type     | Output                         |
| :-------- | :------- | :----------------------------- |
| `id`      | `string` | Komentar post berhasil dihapus |


#### POST
```http
  POST /komentar_post
```

| Payloads  | Type     | Output                              |
| :-------- | :------- | :---------------------------------- |
| `content` | `string` | Komentar forum berhasil ditambahkan |
| `forumId` | `string` |                                     |


### **Log**
#### GET

```http
  GET /log
```

| Arguments | Output           |
| :-------- | :--------------- |
| `()`      | Semua daftar log |


### **Post**
#### GET

```http
  GET /posts
```

| Arguments | Output            |
| :-------- | :---------------- |
| `()`      | Semua daftar post |


```http
  GET /posts/{id}
```

| Params | Type     | Output              |
| :----- | :------- | :------------------ |
| `id`   | `string` | Post berdasarkan ID |


```http
  GET /postsDates
```
| Arguments | Output                                |
| :-------- | :------------------------------------ |
| `()`      | Semua daftar post berdasarkan tanggal |


```http
  GET /postsCat/{id}
```
| Params | Output                                    |
| :----- | :---------------------------------------- |
| `id`   | Semua daftar post berdasarkan id kategori |


```http
  GET /postsCom/{id}
```
| Params | Type     | Output                                         |
| :----- | :------- | :--------------------------------------------- |
| `id`   | `string` | Semua daftar post berdasarkan komentar dari ID |


```http
  GET /search-post/{title}
```

| Params    | Type     | Output                        |
| :-------- | :------- | :---------------------------- |
| `title`   | `string` | Daftar post berdasarkan title |


#### PUT 
```http
  PUT /postsCat
```

| Payloads  | Type     | Output                         |
| :-------- | :------- | :----------------------------- |
| `id`      | `string` | Berhasil memperbarui data post |
| `title`   | `string` |                                |
| `content` | `string` |                                |
| `oldImage`| `string` |                                |
| `newImage`| `files`  |                                |


```http
  PUT /postsUpVote
```

| Payloads | Type     | Output                            |
| :------- | :------- | :-------------------------------- |
| `id`     | `string` | Berhasil memperbarui up vote post |


```http
  PUT /postsDownVote
```

| Payloads | Type     | Output                              |
| :------- | :------- | :---------------------------------- |
| `id`     | `string` | Berhasil memperbarui down vote post |


#### DELETE
```http
  DELETE /posts
```

| Payloads | Type     | Output                       |
| :------- | :------- | :--------------------------- |
| `id`     | `string` | Berhasil menghapus data post |


#### POST
```http
  POST /posts
```

| Payloads  | Type     | Output                    |
| :-------  | :------- | :------------------------ |
| `title`   | `string` | Post berhasil ditambahkan |
| `content` | `string` |                           |
| `image`   | `files`  |                           |


### **Role**
#### GET

```http
  GET /roles
```

| Arguments | Output            |
| :-------- | :---------------- |
| `()`      | Semua daftar role |


```http
  GET /roles/{id}
```

| Params | Type     | Output              |
| :----- | :------- | :------------------ |
| `id`   | `string` | Role berdasarkan ID |


#### POST
```http
  POST /roles
```

| Payloads | Type     | Output                    |
| :------- | :------- | :------------------------ |
| `role`   | `string` | Role berhasil ditambahkan |


### **User**
#### GET
```http
  GET /user
```

| Arguments | Output            |
| :-------- | :---------------- |
| `()`      | Semua daftar user |


```http
  GET /user/{id}
```

| Params | Type     | Output              |
| :----- | :------- | :------------------ |
| `id`   | `string` | User berdasarkan ID |


```http
  GET /user/image/{name}
```

| Params | Type     | Output                     |
| :----- | :------- | :------------------------- |
| `name` | `file`   | Berhasil mendapatkan image |


#### PUT
```http
  PUT /user
```

| Payloads  | Type     | Output                   |
| :-------- | :------- | :----------------------- |
| `name`    | `string` | User berhasil diperbarui |
| `email`   | `string` |                          |
| `oldImage`| `string` |                          |
| `newImage`| `files`  |                          |


#### DELETE
```http
  DELETE /user
```

| Payloads | Type     | Output                       |
| :------  | :------- | :--------------------------- |
| `email`  | `string` | Berhasil menghapus data user |


#### POST
```http
  POST /user
```

| Payloads  | Type     | Output                    |
| :-------- | :------- | :------------------------ |
| `name`    | `string` | User berhasil ditambahkan |
| `email`   | `string` |                           |
| `image`   | `files`  |                           |


```http
  POST /user-login
```

| Payloads     | Type     | Output                 |
| :----------- | :------- | :--------------------- |
| `name`       | `string` | User berhasil login    |
| `password`   | `string` |                        |
