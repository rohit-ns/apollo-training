export default {
  createTrainee(name,email,password) {
    console.log('!!!!!!!!!!!!!!!!!',name,email,password)
    if (name === '' && email === 'rohan@successive.tech' && password === '1234') {
      throw new Error('Name cannot be empty');
    }
    if (name ==='rohan' && email === '' && password === '1234') {
      throw new Error('Email cannot be empty');
    }
    if (name === 'rohan' && email === 'rohan@successive.tech' && password === '') {
      throw new Error('Password cannot be empty')
    }
    if (name === 'rohan' && email === 'rohan@successive.tech' && password === '1234') {
      return {
        "message": "Trainee Created Successfully",
        "status": "200",
        "data": {
          "id": "5d7f245b566e401bc4584390",
          "name": "rohan",
          "email": "rohan@successive.tech",
          "role": "trainee",
          "createdBy": "5d7b3c37fa10e63fe5abc2cc",
          "UpdatedBy": null,
          "originalId": "5d7f245b566e401bc4584390"
        }
      };
    }
  },
  updateTrainee() {
    return {
      "message": "Trainee update successfully",
      "status": "200",
      "data": {
        "id": "5d7f245b566e401bc4584390"
      }

    }
  },
  deleteTrainee() {
    return {
      "message": "Trainee deleted successfully",
      "status": "200",
      "data": {
        "id": "5d7f245b566e401bc4584390"
      }
    }
  },
  getTrainee() {
    return {
      "message": "Successfully fetched Trainees",
      "status": "200",
      "data": {
        "count": "2",
        "records": [
          {
            "_id": "5d7f365039c07f10c41e402a",
            "createdBy": "5d7b3c37fa10e63fe5abc2cc",
            "UpdatedBy": null,
            "password": null,
            "email": "ram@successive.tech",
            "name": "ram",
            "role": "trainee",
            "originalId": "5d7f365039c07f10c41e402a"
          },
          {
            "_id": "5d7f366439c07f10c41e402b",
            "createdBy": "5d7b3c37fa10e63fe5abc2cc",
            "UpdatedBy": null,
            "password": null,
            "email": "rohan@successive.tech",
            "name": "rohan",
            "role": "trainee",
            "originalId": "5d7f366439c07f10c41e402b"
          }
        ]
      }
    }
  }
}
