import React from "react";

export default function RegisterForm() {
    return (
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">

            <div class="py-5 text-center">
                <img class="d-block mx-auto mb-4" src="	https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
                <h2>Register form</h2>
                <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
            </div>



            <form class="needs-validation p-4 p-md-5 border border-primary rounded-3 bg-white" novalidate="">
                <div class="row g-3">
                    <div class="col-sm-6">
                        <label for="firstName" class="form-label">First name</label>
                        <input type="text" class="form-control border-primary" id="firstName" placeholder="" value="" required=""/>
                        <div class="invalid-feedback">
                            Valid first name is required.
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <label for="lastName" class="form-label">Last name</label>
                        <input type="text" class="form-control border-primary" id="lastName" placeholder="" value="" required=""/>
                        <div class="invalid-feedback">
                            Valid last name is required.
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="username" class="form-label">Username</label>
                        <div class="input-group has-validation">
                            <span class="input-group-text border-primary">@</span>
                            <input type="text" class="form-control border-primary" id="username" placeholder="Username" required=""/>
                        <div class="invalid-feedback">
                            Your username is required.
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="email" class="form-label">Email <span class="text-muted">(Required)</span></label>
                        <input type="email" class="form-control border-primary" id="email" placeholder="you@example.com"/>
                        <div class="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="address" class="form-label">Address</label>
                        <input type="text" class="form-control border-primary" id="address" placeholder="1234 Main St" required=""/>
                        <div class="invalid-feedback">
                            Please enter your shipping address.
                        </div>
                    </div>

                    <div class="col-md-5">
                        <label for="country" class="form-label">Country</label>
                        <select class="form-select border-primary" id="country" required="">
                            <option value="">Choose...</option>
                            <option>United States</option>
                            <option>Algeria</option>
                            <option>France</option>
                        </select>
                        <div class="invalid-feedback">
                            Please select a valid country.
                        </div>
                    </div>
                </div>

                <hr class="my-4"/>

                <div class="form-check">
                    <input type="checkbox" class="form-check-input border-primary" id="save-info"/>
                    <label class="form-check-label" for="save-info">I have read and accept the privacy policy</label>
                </div>

                <hr class="my-4"/>

                <button class="w-100 btn btn-primary btn-lg " type="submit">Continue to checkout</button>
            </form>
        </div>
    )
}