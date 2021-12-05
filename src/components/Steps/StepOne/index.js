import React from "react";

const StepOne = () => {
  return (
    <div>
      <p></p>
      <form class="needs-validation" novalidate>
        <div class="row g-3">
          <div class="col-sm-6">
            <label for="lastName" class="form-label">
              Last name
            </label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              placeholder=""
              value=""
              required
            />
            <div class="invalid-feedback">Valid last name is required.</div>
          </div>

          <div class="col-12">
            <label for="username" class="form-label">
              Username
            </label>
            <div class="input-group has-validation">
              <span class="input-group-text">@</span>
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Username"
                required
              />
              <div class="invalid-feedback">Your username is required.</div>
            </div>
          </div>
          <div class="col-sm-6">
            <label for="lastName" class="form-label">
              Last name
            </label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              placeholder=""
              value=""
              required
            />
            <div class="invalid-feedback">Valid last name is required.</div>
          </div>

          <div class="col-12">
            <label for="username" class="form-label">
              Username
            </label>
            <div class="input-group has-validation">
              <span class="input-group-text">@</span>
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Username"
                required
              />
              <div class="invalid-feedback">Your username is required.</div>
            </div>
          </div>
          <div class="col-12">
            <label for="username" class="form-label">
              Username
            </label>
            <div class="col-3">
              {" "}
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Username"
                required
              />
            </div>
            <div class="col-3">
              {" "}
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Username"
                required
              />
            </div>
            <div class="col-6">
              {" "}
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Username"
                required
              />
            </div>
          </div>
          <div class="col-12">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="same-address"
              />
              <label class="form-check-label" for="same-address">
                Shipping address is the same as my billing address
              </label>
            </div>
            <button>Continuar</button>
          </div>
        </div>
      </form>
    </div>
  );
};
