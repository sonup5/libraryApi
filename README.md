# Library api

This Api will going to handle all the stuff for mangagin Library

# Features

1. Password Hashing
2. Tokenization
3. search book by query parameter

# usage:

**Endpoints:**

* POST :  `user/signup`

  <h6>Note: Input Field name should be <br><br> 1. For username : 'username' <br> 2. For email : 'email' <br> 3. For password : 'password'
* POST :  `user/login`

  <h6> Note: Input Field name should be <br> <br> 1. For userIdentification either email or unique UserName : 'userField' <br> 2. For password Field: 'password'

---

### Request format :

<h3> Both endpoints accept JSON requests with the following format:<br>

1. For signUp

   ![1707927328111](image/README/1707927328111.png)
2. For Login

   ![1707927366348](image/README/1707927366348.png)

   # Response Fromat:


   <h3> It returns response in the form of JSON

   1. For Signup :

      ![1707927481931](image/README/1707927481931.png)
   2. For Login :

      ![1707927513729](image/README/1707927513729.png)
