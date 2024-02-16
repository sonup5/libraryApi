# Library api

This Api will going to handle all the stuff for mangagin Library

# Features

1. Password Hashing
2. Tokenization
3. search book by query parameter

# usage:

**Endpoints:**


POST :  `user/signup`

<h6>Note: Input Field name should be <br><br> 1. For username : 'username' <br> 2. For email : 'email' <br> 3. For password : 'password'


POST :  `user/login`

<h6> Note: Input Field name should be <br> <br> 1. For userIdentification either email or unique UserName : 'userField' <br> 2. For password Field: 'password'


POST :  `admin/postBook`

<h4> note: it is only accessible when user or Admin is logined<br> note: input field should be named as Follows:<br> 1. bookName:'bookName' <br> 2. author: 'author' <br> 3. genre: 'genre' <br> 4. token: 'token' (token should is provided as token verification is done in serverSide)

* POST :` /getBook/:bookName`

  <h4> A particular book can be searched using book name it accpt a query string parameter 

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
