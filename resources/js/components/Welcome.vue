<template>
	<div class="min-h-screen font-sans bg-slate-50 text-slate-900">
		<!-- Navbar -->
		<nav
			class="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50"
		>
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex justify-between items-center h-16">
					<div class="flex items-center gap-2">
						<span class="font-bold text-xl tracking-tight text-slate-900"
							>SimpleVue</span
						>
					</div>
					<div class="hidden md:flex items-center space-x-8">
						<a
							href="#"
							class="text-slate-600 hover:text-indigo-600 transition-colors font-medium"
							>Home</a
						>
						<a
							href="#"
							class="text-slate-600 hover:text-indigo-600 transition-colors font-medium"
							>About</a
						>
						<a
							href="#"
							class="text-slate-600 hover:text-indigo-600 transition-colors font-medium"
							>Contact</a
						>
					</div>
					<div class="flex items-center gap-4">
						<router-link
							to="/login"
							class="text-slate-600 hover:text-indigo-600 font-medium transition-colors"
							>Sign in</router-link
						>
						<router-link
							to="/register"
							class="px-5 py-2.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all shadow-sm hover:shadow-md"
							>Register</router-link
						>
					</div>
				</div>
			</div>
		</nav>

		<!-- Hero Section -->
		<main
			class="relative isolate overflow-hidden pt-14 pb-24 sm:pt-32 sm:pb-32"
		>
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto max-w-4xl text-center">
					<h1
						class="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 sm:text-7xl mb-6 animate-fade-in-up animation-delay-100"
					>
						I AM <br class="hidden sm:block" />
						<span class="text-indigo-600 relative">
							Ran Bahadur kc
							<svg
								class="absolute w-full h-3 -bottom-1 left-0 text-indigo-200 -z-10"
								viewBox="0 0 100 10"
								preserveAspectRatio="none"
							>
								<path
									d="M0 5 Q 50 10 100 5"
									stroke="currentColor"
									stroke-width="8"
									fill="none"
								/>
							</svg>
						</span>
					</h1>

					<p
						class="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200"
					>
						I am a full stack developer with 5+ years of experience in web
						development with react and vue js i want to full time job in any
						timezone and i am open to work
					</p>

					<img
						:src="'/rn.jpg'"
						alt="Ran Bahadur Kc"
						class="w-32 h-32 rounded-full mx-auto"
					/>
				</div>
			</div>
		</main>

		<!-- Footer -->
		<footer class="bg-white border-t border-slate-200 py-12">
			<div
				class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center"
			>
				<div class="mb-4 md:mb-0">
					<span class="text-slate-900 font-bold text-lg">SimpleVue</span>
					<p class="text-slate-500 text-sm mt-1">
						© 2026 SimpleVue. All rights reserved .
					</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
export default {
	name: "Welcome",
};
</script>

