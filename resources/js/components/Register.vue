<template>
	<div
		class="min-h-screen font-sans bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
	>
		<div class="sm:mx-auto sm:w-full sm:max-w-md">
			<div class="flex justify-center gap-2 mb-6">
				<span
					class="font-bold text-xl tracking-tight text-slate-900 self-center"
					>SimpleVue</span
				>
			</div>
			<h2
				class="mt-2 text-center text-3xl font-bold tracking-tight text-slate-900"
			>
				Create your account
			</h2>
			<p class="mt-2 text-center text-sm text-slate-600">
				Already have an account?
				<router-link
					to="/login"
					class="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
					>Sign in</router-link
				>
			</p>
		</div>

		<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
			<div
				class="bg-white py-8 px-4 shadow-xl shadow-slate-200/50 sm:rounded-xl sm:px-10 border border-slate-100"
			>
				<form class="space-y-6" @submit.prevent="handleRegister">
					<div>
						<label
							for="name"
							class="block text-sm font-medium leading-6 text-slate-900"
							>Full Name</label
						>
						<div class="mt-2">
							<input
								id="name"
								name="name"
								type="text"
								v-model="formData.name"
								required
								class="block w-full rounded-lg border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-shadow"
								placeholder="Enter your name"
							/>
							<div v-if="errors.name" class="text-red-600 text-xs mt-1">
								{{ errors.name[0] }}
							</div>
						</div>
					</div>

					<div>
						<label
							for="email"
							class="block text-sm font-medium leading-6 text-slate-900"
							>Email address</label
						>
						<div class="mt-2">
							<input
								id="email"
								name="email"
								type="email"
								v-model="formData.email"
								autocomplete="email"
								required
								class="block w-full rounded-lg border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-shadow"
								placeholder="Enter your email"
							/>
							<div v-if="errors.email" class="text-red-600 text-xs mt-1">
								{{ errors.email[0] }}
							</div>
						</div>
					</div>

					<div>
						<label
							for="password"
							class="block text-sm font-medium leading-6 text-slate-900"
							>Password</label
						>
						<div class="mt-2 relative">
							<input
								:type="showPassword ? 'text' : 'password'"
								id="password"
								name="password"
								v-model="formData.password"
								required
								class="block w-full rounded-lg border-0 py-2.5 px-3 pr-10 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-shadow"
								placeholder="Enter your password"
							/>
							<button
								type="button"
								@click="showPassword = !showPassword"
								class="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 cursor-pointer"
							>
								<svg
									v-if="!showPassword"
									class="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745A10.551 10.551 0 012.492 6.54a.75.75 0 011.06-.04zm13.626 13.626l-1.487-1.487A10.573 10.573 0 0017.508 6.54a.75.75 0 00-1.06.04 8.27 8.27 0 01-1.353 1.258l-1.255-1.255A9.773 9.773 0 0110 5.25c-3.1 0-5.83.69-8.113 1.839L.81 6.027a.75.75 0 011.06-1.06L16.906 15.846z"
										clip-rule="evenodd"
									/>
								</svg>
								<svg
									v-else
									class="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
									<path
										fill-rule="evenodd"
										d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
						</div>
						<div v-if="errors.password" class="text-red-600 text-xs mt-1">
							{{ errors.password[0] }}
						</div>
					</div>

					<div>
						<label
							for="password_confirmation"
							class="block text-sm font-medium leading-6 text-slate-900"
							>Confirm Password</label
						>
						<div class="mt-2 relative">
							<input
								:type="showConfirmPassword ? 'text' : 'password'"
								id="password_confirmation"
								name="password_confirmation"
								v-model="formData.password_confirmation"
								required
								class="block w-full rounded-lg border-0 py-2.5 px-3 pr-10 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-shadow"
								placeholder="••••••••"
							/>
							<button
								type="button"
								@click="showConfirmPassword = !showConfirmPassword"
								class="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 cursor-pointer"
							>
								<svg
									v-if="!showConfirmPassword"
									class="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745A10.551 10.551 0 012.492 6.54a.75.75 0 011.06-.04zm13.626 13.626l-1.487-1.487A10.573 10.573 0 0017.508 6.54a.75.75 0 00-1.06.04 8.27 8.27 0 01-1.353 1.258l-1.255-1.255A9.773 9.773 0 0110 5.25c-3.1 0-5.83.69-8.113 1.839L.81 6.027a.75.75 0 011.06-1.06L16.906 15.846z"
										clip-rule="evenodd"
									/>
								</svg>
								<svg
									v-else
									class="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
									<path
										fill-rule="evenodd"
										d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
						</div>
					</div>

					<div class="flex items-start">
						<div class="flex h-6 items-center">
							<input
								id="terms"
								name="terms"
								type="checkbox"
								v-model="formData.terms"
								required
								class="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
							/>
						</div>
						<div class="ml-3 text-sm leading-6">
							<label
								for="terms"
								class="font-medium text-slate-900 cursor-pointer select-none"
								>I agree to the
								<a
									href="#"
									class="font-semibold text-indigo-600 hover:text-indigo-500"
									>Terms</a
								>
								and
								<a
									href="#"
									class="font-semibold text-indigo-600 hover:text-indigo-500"
									>Privacy Policy</a
								>.</label
							>
						</div>
					</div>

					<div>
						<button
							type="submit"
							:disabled="isLoading"
							class="flex w-full justify-center rounded-lg bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
						>
							<svg
								v-if="isLoading"
								class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									class="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									stroke-width="4"
								></circle>
								<path
									class="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
							{{ isLoading ? "Creating account..." : "Create account" }}
						</button>
					</div>
				</form>

				<div
					v-if="successMessage"
					class="mt-4 p-4 text-green-700 bg-green-100 rounded-lg"
				>
					{{ successMessage }}
				</div>
				<div
					v-if="generalError"
					class="mt-4 p-4 text-red-700 bg-red-100 rounded-lg"
				>
					{{ generalError }}
				</div>
			</div>
		</div>
		<!-- goto home page -->
		<div class="mt-6 text-center">
			<p class="text-sm text-slate-600">
				<router-link
					to="/"
					class="font-medium text-indigo-600 hover:text-indigo-500"
				>
					Go to Home
				</router-link>
			</p>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "Register",
	data() {
		return {
			formData: {
				name: "",
				email: "",
				password: "",
				password_confirmation: "",
				terms: false,
			},
			errors: {},
			showPassword: false,
			showConfirmPassword: false,
			isLoading: false,
			successMessage: "",
			generalError: "",
		};
	},
	methods: {
		async handleRegister() {
			this.errors = {};
			this.generalError = "";
			this.successMessage = "";

			if (this.formData.password !== this.formData.password_confirmation) {
				this.errors.password = ["Passwords do not match!"];
				return;
			}

			if (!this.formData.terms) {
				this.generalError = "You must agree to the terms.";
				return;
			}

			this.isLoading = true;

			try {
				// Initialize CSRF protection (optional for API routes but good practice if using Sanctum stateful)
				// await axios.get('/sanctum/csrf-cookie');

				const response = await axios.post("/api/register", {
					name: this.formData.name,
					email: this.formData.email,
					password: this.formData.password,
					password_confirmation: this.formData.password_confirmation,
				});

				if (response.data.success) {
					this.successMessage =
						"Registration successful! Redirecting to login...";
					setTimeout(() => {
						this.$router.push("/login");
					}, 2000);
				}
			} catch (error) {
				if (error.response && error.response.status === 422) {
					this.errors = error.response.data.errors;
				} else {
					this.generalError =
						"An error occurred during registration. Please try again.";
					console.error(error);
				}
			} finally {
				this.isLoading = false;
			}
		},
	},
};
</script>
