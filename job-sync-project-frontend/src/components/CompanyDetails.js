import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CompanyDetail = () => {
  const navigate = useNavigate();

  // State for form fields and errors
  const [companyDetails, setCompanyDetails] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    businessLicenseNumber: "",
  });

  const [errors, setErrors] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    businessLicenseNumber: "",
  });

  // Function to handle form submission
  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    // Clear previous validation errors
    setErrors({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      businessLicenseNumber: "",
    });

    // Basic validations
    let formIsValid = true;

    if (companyDetails.companyName === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        companyName: "Company Name is required.",
      }));
      formIsValid = false;
    }

    if (companyDetails.contactPerson === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        contactPerson: "Contact Person is required.",
      }));
      formIsValid = false;
    }

    if (companyDetails.email === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required.",
      }));
      formIsValid = false;
    } else if (!isValidEmail(companyDetails.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email format.",
      }));
      formIsValid = false;
    }

    if (companyDetails.phone === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Phone number is required.",
      }));
      formIsValid = false;
    } else if (!isValidPhoneNumber(companyDetails.phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Invalid phone number format.",
      }));
      formIsValid = false;
    }

    if (companyDetails.address === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        address: "Address is required.",
      }));
      formIsValid = false;
    }

    if (companyDetails.city === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        city: "City is required.",
      }));
      formIsValid = false;
    }

    if (companyDetails.state === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        state: "State is required.",
      }));
      formIsValid = false;
    }

    if (companyDetails.businessLicenseNumber === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        businessLicenseNumber: "Business License Number is required.",
      }));
      formIsValid = false;
    }

    // If form is valid, proceed with submission (currently navigating for testing)
    if (formIsValid) {
      // Simulating form submission by navigating
      navigate("/companyList");
      // You can integrate your mutation logic here once ready
    }
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Function to validate phone number format
  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  return (
    <div className="company-detail">
      <div className="container">
        <h3>Company Detail</h3>
        <form onSubmit={handleOnSubmit} className="mx-3 py-2">
          <div className="form-group">
            <div className="row">
              <div className="col-md-2">
                <label className="col-form-label">
                  Company Name <span className="error-list">*</span>
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  value={companyDetails.companyName}
                  onChange={(e) =>
                    setCompanyDetails({
                      ...companyDetails,
                      companyName: e.target.value,
                    })
                  }
                />
                {errors.companyName && (
                  <div className="error-list">{errors.companyName}</div>
                )}
              </div>
              <div className="col-md-2">
                <label className="col-form-label">
                  Contact Person <span className="error-list">*</span>
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  value={companyDetails.contactPerson}
                  onChange={(e) =>
                    setCompanyDetails({
                      ...companyDetails,
                      contactPerson: e.target.value,
                    })
                  }
                />
                {errors.contactPerson && (
                  <div className="error-list">{errors.contactPerson}</div>
                )}
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col-md-2">
                <label className="col-form-label">
                  Email <span className="error-list">*</span>
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="email"
                  value={companyDetails.email}
                  onChange={(e) =>
                    setCompanyDetails({
                      ...companyDetails,
                      email: e.target.value,
                    })
                  }
                />
                {errors.email && <div className="error-list">{errors.email}</div>}
              </div>
              <div className="col-md-2">
                <label className="col-form-label">
                  Phone <span className="error-list">*</span>
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="tel"
                  value={companyDetails.phone}
                  onChange={(e) =>
                    setCompanyDetails({
                      ...companyDetails,
                      phone: e.target.value,
                    })
                  }
                />
                {errors.phone && <div className="error-list">{errors.phone}</div>}
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col-md-2">
                <label className="col-form-label">
                  Address <span className="error-list">*</span>
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  value={companyDetails.address}
                  onChange={(e) =>
                    setCompanyDetails({
                      ...companyDetails,
                      address: e.target.value,
                    })
                  }
                />
                {errors.address && (
                  <div className="error-list">{errors.address}</div>
                )}
              </div>
              <div className="col-md-2">
                <label className="col-form-label">
                  City <span className="error-list">*</span>
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  value={companyDetails.city}
                  onChange={(e) =>
                    setCompanyDetails({
                      ...companyDetails,
                      city: e.target.value,
                    })
                  }
                />
                {errors.city && <div className="error-list">{errors.city}</div>}
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col-md-2">
                <label className="col-form-label">
                  State <span className="error-list">*</span>
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  value={companyDetails.state}
                  onChange={(e) =>
                    setCompanyDetails({
                      ...companyDetails,
                      state: e.target.value,
                    })
                  }
                />
                {errors.state && <div className="error-list">{errors.state}</div>}
              </div>
              <div className="col-md-2">
                <label className="col-form-label">
                  Business License Number <span className="error-list">*</span>
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  value={companyDetails.businessLicenseNumber}
                  onChange={(e) =>
                    setCompanyDetails({
                      ...companyDetails,
                      businessLicenseNumber: e.target.value,
                    })
                  }
                />
                {errors.businessLicenseNumber && (
                  <div className="error-list">
                    {errors.businessLicenseNumber}
                  </div>
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

export default CompanyDetail;
