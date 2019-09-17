export default {
  getMe() {
    console.log('>>>>>>InGEtME');
    return {
      "message": "User get Successfully",
      "status": "200",
      "data": {
        "_id": "5d7b3c37fa10e63fe5abc2cc",
        "email": "rohit@successive.tech",
        "name": "Rohit",
        "role": "head-trainer",
        "createdBy": "5d7b3c37fa10e63fe5abc2cc",
        "originalId": "5d7b3c37fa10e63fe5abc2cc",
        "createdAt": "2019-09-13T06:50:31.175Z"
      }
    };
  },
  loginUser() {
    console.log('>>>>>>In Login User');
    return {
      "message": "Login Successfully",
      "status": 200,
      "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDdiM2MzN2ZhMTBlNjNmZTVhYmMyY2MiLCJlbWFpbCI6InJvaGl0QHN1Y2Nlc3NpdmUudGVjaCIsIm5hbWUiOiJSb2hpdCIsInBhc3N3b3JkIjoiJDJiJDEwJHQyVU0vQnR3dGx5eExXOFlNM1FDRi5hQS5HTFYzOENCWmNESEJ0RVNwbmNBMk5YYjNUSzVlIiwicm9sZSI6ImhlYWQtdHJhaW5lciIsImNyZWF0ZWRCeSI6IjVkN2IzYzM3ZmExMGU2M2ZlNWFiYzJjYyIsIm9yaWdpbmFsSWQiOiI1ZDdiM2MzN2ZhMTBlNjNmZTVhYmMyY2MiLCJjcmVhdGVkQXQiOiIyMDE5LTA5LTEzVDA2OjUwOjMxLjE3NVoiLCJ1cGRhdGVkQXQiOiIyMDE5LTA5LTEzVDA2OjUwOjMxLjE3NVoiLCJfX3YiOjAsImlhdCI6MTU2ODM2MjQyNiwiZXhwIjoxNTY4MzYzMzI2fQ.aARUEu2WCOxiCXnXUesGzfzvXEh9ndPVHu72Fdmcd2s"
    };
  }
}
