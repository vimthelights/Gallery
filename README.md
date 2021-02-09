# Project Name

> `Gallery Service`

Summary :
  My module is going to fetch information of a particular house along with the pictures of that house.This module also have the ability to post, edit and delete the house information.

## Requirments:

 - [PostgreSQL](https://www.postgresql.org/download/)
 - Node 6.13.0
## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
</br>

### PhotoGallery

</br>

### Get the home matching the id

-GET `/api/home/:id`

**Returns:** a single row
```json
    {
        "id": 1,
        "AddressLine1": "1",
        "AddressLine2": "lablablab",
        "AskingPrice": 200000,
        "NumBeds": 3,
        "NumBaths": 1,
        "SqFt": 130400
    }

```

-POST `/api/home`


**Request Body**

```json
    {
        "AddressLine1": "1",
        "AddressLine2": "lablablab",
        "AskingPrice": 200000,
        "NumBeds": 3,
        "NumBaths": 1,
        "SqFt": 130400
    }

```
### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully added a home"
    }
```

```json
    {
      "message": "Failed to add a home."
    }
```
### Path responses:

**Success Status Code:** `201`

</br>

-PATCH `/api/home/:id`
**Path Parameters:**
- `id` - homeId

**Request Body**

```json
    {
        "id": 1,
        "AddressLine1": "1",
        "AddressLine2": "lablablab"
    }

```

### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully updates a home"
    }
```

```json
    {
      "message": "Failed to update a home."
    }

```
### Path responses:

**Success Status Code:** `201`

</br>


-DELETE `/api/home/:id`

**Path Parameters:**
- `id` - Home ID

### Response format:

* Returns: JSON

```json
    {
      "message": "Successfully deleted a home"
    }
```

```json
    {
      "message": "Failed to delete a home."
    }
```

### Path responses:

**Success Status Code:** `204`

</br>

### Get Images of the home with matchind id

-GET `/api/home/:homeId/images`

**Returns:** a collection of rows

```json
   [{
        "id": 1,
        "id_Home": 1,
        "imageUrl": 1,
        "displayOrder":1
    },
    {
      "id": 2,
      "id_Home": 1,
      "imageUrl": 2,
      "displayOrder":1
    }]

```

-POST `/api/home/:homeId/images`

**Request Body**

```json
    {
        "homeId": 1,
        "imageUrl": "loremflicker.blob",
        "displayOrder": 2
    }

```
### Response format:
* Returns: JSON

```json
    {
      "message": "Image successfully added."
    }
```

```json
    {
      "message": "Failed to add the image."
    }
```
### Path responses:

**Success Status Code:** `201`

</br>

-DELETE `/api/home/:homeId/images/:imageId`

**Path Parameters:**
- `id` - imageId

### Response format:

* Returns: JSON

```json
    {
      "message": "Successfully deleted the image"
    }
```

```json
    {
      "message": "Failed to delete the image."
    }
```

### Path responses:

**Success Status Code:** `204`

### Get user favorites

-GET `/api/users/:userId/favorites`

**Returns:** a collection of rows

```json
   [{
     "id": 1,
     "user_id":1,
     "home_id":2,

   },
   {
     "id": 2,
     "user_id":1,
     "home_id":3,

   },
   ]

```


-POST `/api/users/:userId/favorites`

**Request Body**

```json
    {
     "user_id":1,
     "home_id":2,

    }

```
### Response format:
* Returns: JSON

```json
    {
      "message": "Home successfully added to favorites."
    }
```

```json
    {
      "message": "Failed to add the favorites."
    }
```
### Path responses:

**Success Status Code:** `201`

</br>