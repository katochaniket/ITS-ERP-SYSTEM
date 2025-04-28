window.onload = function() {
    const canvas = document.getElementById('asteroidCanvas');
        }

        function scrollToHome() {
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        }

        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
            } else {
                header.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
            }
        });

        // Forgot password functionality
        document.addEventListener('DOMContentLoaded', () => {
            const forgotPasswordLink = document.getElementById('forgotPasswordLink');
            const forgotPasswordSection = document.getElementById('forgotPasswordSection');
            const backToLogin = document.getElementById('backToLogin');
            const nextButton = document.getElementById('next-button');
            const otpSection = document.getElementById('otp-section');
            const submitButton = document.getElementById('submit-button');
            const successMessage = document.querySelector('.success-message');

            forgotPasswordLink.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.login-form').style.display = 'none';
                forgotPasswordSection.style.display = 'block';
            });

            backToLogin.addEventListener('click', (e) => {
                e.preventDefault();
                forgotPasswordSection.style.display = 'none';
                document.querySelector('.login-form').style.display = 'block';
                // Reset the form
                document.getElementById('initial-section').style.display = 'block';
                otpSection.style.display = 'none';
                successMessage.style.display = 'none';
            });

            nextButton.addEventListener('click', (e) => {
                e.preventDefault();
                const email = document.getElementById('email').value;
                if (email) {
                    document.getElementById('initial-section').style.display = 'none';
                    otpSection.style.display = 'block';
                } else {
                    alert('Please enter your email or username');
                }
            });

            submitButton.addEventListener('click', (e) => {
                e.preventDefault();
                const otp = document.getElementById('otp').value;
                if (otp) {
                    otpSection.style.display = 'none';
                    successMessage.style.display = 'block';
                } else {
                    alert('Please enter the OTP');
                }
            });

            // Form submission handling
            document.querySelector('#login .login-form').addEventListener('submit', function(e) {
                e.preventDefault();
                const username = document.getElementById('usernameInput').value;
                const password = document.getElementById('password').value;

                // Accept any username or email with any password
                // Proceed with login success

            // Redirect to dashboard or show success message
            alert('Login successful!');
            window.location.href = 'dashboard.html';
        });

        document.addEventListener('DOMContentLoaded', () => {
            // Forgot password functionality
            const forgotPasswordLink = document.getElementById('forgotPasswordLink');
            const forgotPasswordSection = document.getElementById('forgotPasswordSection');
            const backToLogin = document.getElementById('backToLogin');
            const nextButton = document.getElementById('next-button');
            const otpSection = document.getElementById('otp-section');
            const submitButton = document.getElementById('submit-button');
            const successMessage = document.querySelector('.success-message');

            forgotPasswordLink.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.login-form').style.display = 'none';
                forgotPasswordSection.style.display = 'block';
            });

            backToLogin.addEventListener('click', (e) => {
                e.preventDefault();
                forgotPasswordSection.style.display = 'none';
                document.querySelector('.login-form').style.display = 'block';
                // Reset the form
                document.getElementById('initial-section').style.display = 'block';
                otpSection.style.display = 'none';
                successMessage.style.display = 'none';
            });

            nextButton.addEventListener('click', (e) => {
                e.preventDefault();
                const email = document.getElementById('email').value;
                if (email) {
                    document.getElementById('initial-section').style.display = 'none';
                    otpSection.style.display = 'block';
                } else {
                    alert('Please enter your email or username');
                }
            });

            submitButton.addEventListener('click', (e) => {
                e.preventDefault();
                const otp = document.getElementById('otp').value;
                if (otp) {
                    otpSection.style.display = 'none';
                    successMessage.style.display = 'block';
                } else {
                    alert('Please enter the OTP');
                }
            });

            // Logout button handling
            const logoutButton = document.getElementById('logoutButton');
            if (logoutButton) {
                logoutButton.addEventListener('click', () => {
                    // Redirect to login page on logout
                    window.location.href = 'login.html';
                });
            }
        });

            // Toggle password visibility
            const togglePassword = document.getElementById('togglePassword');
            const passwordInput = document.getElementById('password');

            togglePassword.addEventListener('click', () => {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                // Change icon based on visibility
                togglePassword.textContent = type === 'password' ? '\u{1F441}' : '\u{1F576}';
            });

            // Contact form submission
            document.querySelector('#contact form').addEventListener('submit', function(e) {
                e.preventDefault();
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;

                if (!name || !email || !message) {
                    alert('Please fill in all fields');
                    return;
                }

            // Here you would typically send the data to your server
            // Show popup message at the end of the query form
            const popup = document.getElementById('querySuccessPopup');
            popup.style.display = 'block';
            popup.classList.add('show');
            setTimeout(() => {
                popup.classList.remove('show');
                popup.style.display = 'none';
            }, 5000); // Hide after 5 seconds
            this.reset();
        });

        // Add click event for Contact link in login page to redirect to homepage query form
        if (document.body.classList.contains('login')) {
            const contactLink = document.querySelector('nav a[href="#contact"]');
            if (contactLink) {
                contactLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    window.location.href = 'index.html#queryForm';
                });
            }

            // Add click event for Contact button inside login form to redirect to homepage query form
            const contactButton = document.getElementById('contactButton');
            if (contactButton) {
                contactButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    window.location.href = 'index.html#queryForm';
                });
            }
        }
        });
