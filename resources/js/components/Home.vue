<template>
	<div class="min-h-screen bg-slate-50 font-sans">
		<nav class="bg-white border-b border-slate-200 shadow-sm">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex justify-between h-16">
					<div class="flex">
						<div class="flex-shrink-0 flex items-center">
							<span class="font-bold text-xl tracking-tight text-slate-900"
								>SimpleVue</span
							>
						</div>
						<div class="hidden sm:ml-6 sm:flex sm:space-x-8">
							<router-link
								to="/home"
								class="border-indigo-500 text-slate-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
							>
								Dashboard
							</router-link>
						</div>
					</div>
					<div class="flex items-center">
						<div class="flex-shrink-0">
							<button
								@click="handleLogout"
								type="button"
								class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Logout
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>

		<div class="py-10">
			<header>
				<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 class="text-3xl font-bold leading-tight text-slate-900">
						Dashboard
					</h1>
				</div>
			</header>
			<main>
				<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
					<div class="px-4 py-8 sm:px-0">
						<div
							class="border-4 border-dashed border-slate-200 rounded-lg h-96 flex items-center justify-center"
						>
							<div class="text-center">
								<h2 class="text-xl font-medium text-slate-600">
									Welcome to your dashboard!
								</h2>
								<p class="mt-2 text-slate-500">
									You are successfully logged in.
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "Home",
	methods: {
		async handleLogout() {
			try {
				const token = localStorage.getItem("auth_token");
				if (token) {
					await axios.post(
						"/api/logout",
						{},
						{
							headers: {
								Authorization: `Bearer ${token}`,
							},
						}
					);
				}
			} catch (error) {
				console.error("Logout error", error);
			} finally {
				localStorage.removeItem("auth_token");
				delete axios.defaults.headers.common["Authorization"];
				this.$router.push("/login");
			}
		},
	},
};
</script>
