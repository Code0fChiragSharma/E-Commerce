
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>JSP Page</title>
    <style>
        body {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        #form {
            height: 300px;
            width: 400px;
            background: linear-gradient(135deg, rgb(255, 0, 0), rgb(28, 27, 27) 80%);
            text-align: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            padding: 20px;
          color: white;
            border-radius: 20px;
            border: 2px solid;
        }
form{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
}
        input {
            padding: 10px 60px;
        
            border-radius: 9px;
            border: none;
        }
        button{
            padding: 10px 20px;
            border-radius: 8px;
            border: none;
        }
    </style>
</head>

<body>
    <div id='form'>
        <h1>Login Form</h1>
        <form method="post" action="code1.jsp">
            <input type="text" name="name" placeholder="Enter Your Name" />
            <input type="email" name="email" placeholder="Enter Your Email" />
            <input type="password" name="password" placeholder="Enter Your Password" />
            <input type="number" name="mobile" placeholder="Enter Your mobile" />

            <button type="submit">Submit</button>
        </form>
    </div>
</body>

</html>
