import { useState } from "react";
const SignUp = () => {
  const [newUser, setNewUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    age: 0,
    dateOfBirth: "",
    email: "",
    studentId: "",
    currentStatus: true,
  });

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dateOfBirthError, setDateOfBirthError] = useState("");
  const [studentIdError, setStudentIdError] = useState("");
  const [studentTypeError, setStudentTypeError] = useState("");
  const [currentStatusError, setCurrentStatusError] = useState("");

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    // Clear previous validation errors
    setFirstNameError("");
    setLastNameError("");
    setAgeError("");
    setEmailError("");
    setStudentIdError("");
    setCurrentStatusError("");
    setStudentTypeError("");
    setDateOfBirthError("");

    // Basic validations
    if (newUser.firstName === "") {
      setFirstNameError("First Name is required.");
    }

    if (newUser.lastName === "") {
      setLastNameError("Last Name is required.");
    }

    if (newUser.email === "") {
      setEmailError("email is required.");
    }

    if (newUser.studentId === "") {
      setStudentIdError("Student is required.");
    }
    if (newUser.studentType === "") {
      setStudentTypeError("Student Type is required.");
    }
    if (!newUser.dateOfBirth) {
      setDateOfBirthError("Date Of Birth is required.");
    }

    // age validation
    const age = parseInt(newUser.age);
    if (isNaN(age) || age < 20 || age > 70) {
      setAgeError("age must be a number between 20 and 70.");
    }
    //Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(newUser.email)) {
      setEmailError("Please enter a valid email address.");
    }

    // Validation for string fields
    const stringRegex = /^[a-zA-Z\s]+$/;

    if (!stringRegex.test(newUser.firstName)) {
      setFirstNameError("Please enter characters in First Name.");
    }

    if (!stringRegex.test(newUser.lastName)) {
      setLastNameError("Please enter Last Name.");
    }

    if (!stringRegex.test(newUser.email)) {
      setEmailError("Please enter characters in email.");
    }

    if (!stringRegex.test(newUser.studentId)) {
      setStudentIdError("Please enter characters in Student Id.");
    }

    // Validation for number fields (currentStatus)
    const currentStatus = newUser.currentStatus;
    if (currentStatus === "") {
      setCurrentStatusError("Current Status is required.");
    }

    // Check if any validation errors exist
    if (
      newUser.firstName === "" ||
      newUser.lastName === "" ||
      newUser.email === "" ||
      newUser.studentId === "" ||
      isNaN(age) ||
      age < 20 ||
      age > 70
    ) {
      // Display error messages and prevent form submission
      return;
    }

    setNewUser({
      firstName: "",
      lastName: "",
      age: 0,
      dateOfBirth: "",
      email: "",
      studentId: "",
      studentType: "",
      currentStatus: true,
    });
  };

  return (
    <div className="employee-add">
      <div className="container">
        <h3>Sign Up for User</h3>
        <form onSubmit={(e) => handleOnSubmit(e)} className="mx-3 py-2">
          <div className="form-group">
            <div className="row">
              <div className="col-md-2">
                <label className="col-form-label">
                  First Name <span className="error-list">*</span>
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  value={newUser.firstName}
                  onChange={(e) =>
                    setNewUser((currNewEmployee) => {
                      return {
                        ...currNewEmployee,
                        firstName: e.target.value,
                      };
                    })
                  }
                />
              </div>

              <div className="col-md-2">
                <label className="col-form-label">
                  Last Name <span className="error-list">*</span>
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  value={newUser.lastName}
                  onChange={(e) =>
                    setNewUser((currNewEmployee) => {
                      return {
                        ...currNewEmployee,
                        lastName: e.target.value,
                      };
                    })
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-4">
                {firstNameError && (
                  <div className="error-list">{firstNameError}</div>
                )}
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-4">
                {lastNameError && (
                  <div className="error-list">{lastNameError}</div>
                )}
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col-md-2">
                <label className="col-form-label">
                  Age <span className="error-list">*</span>
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  value={newUser.age}
                  onChange={(e) =>
                    setNewUser((currNewEmployee) => {
                      return {
                        ...currNewEmployee,
                        age: e.target.value,
                      };
                    })
                  }
                />
              </div>

              <div className="col-md-2">
                <label className="col-form-label">
                  Date Of Birth <span className="error-list">*</span>
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="date"
                  value={newUser.dateOfBirth}
                  onChange={(e) =>
                    setNewUser((currNewEmployee) => {
                      return {
                        ...currNewEmployee,
                        dateOfBirth: e.target.value,
                      };
                    })
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-4">
                {ageError && <div className="error-list">{ageError}</div>}
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-4">
                {dateOfBirthError && (
                  <div className="error-list">{dateOfBirthError}</div>
                )}
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col-md-2">
                <label className="col-form-label">
                  StudentID <span className="error-list">*</span>
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  value={newUser.studentId}
                  onChange={(e) =>
                    setNewUser((currNewEmployee) => {
                      return {
                        ...currNewEmployee,
                        studentId: e.target.value,
                      };
                    })
                  }
                />
              </div>

              <div className="col-md-2">
                <label className="col-form-label">
                  Email <span className="error-list">*</span>
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser((currNewEmployee) => {
                      return {
                        ...currNewEmployee,
                        email: e.target.value,
                      };
                    })
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-4">
                {studentIdError && (
                  <div className="error-list">{studentIdError}</div>
                )}
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-4">
                {emailError && <div className="error-list">{emailError}</div>}
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col-md-2">
                <label className="col-form-label">
                  Student Type <span className="error-list">*</span>
                </label>
              </div>
              <div className="col-md-4">
                <select
                  name="studentType"
                  value={newUser.studentType}
                  onChange={(e) =>
                    setNewUser((currNewEmployee) => {
                      return {
                        ...currNewEmployee,
                        studentType: e.target.value,
                      };
                    })
                  }
                >
                  <option value="FullTime">Full Time</option>
                  <option value="PartTime">Part Time</option>
                </select>
              </div>

              <div className="col-md-2">
                <label className="col-form-label">Current Status</label>
              </div>
              <div className="col-md-4">
                <div>
                  <input
                    type="radio"
                    id="status-active"
                    name="status"
                    value="true"
                    checked={newUser.currentStatus === true}
                    onChange={(e) =>
                      setNewUser((currNewEmployee) => {
                        return {
                          ...currNewEmployee,
                          currentStatus: e.target.value === "true",
                        };
                      })
                    }
                  />
                  <label htmlFor="status-active">Active</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="status-inactive"
                    name="status"
                    value="false"
                    checked={newUser.currentStatus === false}
                    onChange={(e) =>
                      setNewUser((currNewEmployee) => {
                        return {
                          ...currNewEmployee,
                          currentStatus: e.target.value === "true",
                        };
                      })
                    }
                  />
                  <label htmlFor="status-inactive">Inactive</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-4">
                {studentTypeError && (
                  <div className="error-list">{studentTypeError}</div>
                )}
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-4">
                {currentStatusError && (
                  <div className="error-list">{currentStatusError}</div>
                )}
              </div>
            </div>
          </div>

          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
