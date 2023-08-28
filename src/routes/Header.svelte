<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import logo from '$lib/img/logo.webp';
	import UserStatus from './UserStatus.svelte';

</script>

<header>
	<div class="p-0">
		<Navbar let:hidden let:toggle>
			<NavBrand href="/">
				<img src={logo} class="mr-3 h-6 sm:h-9" alt="Echo Mind logo" />
				<span class="self-center whitespace-nowrap text-xl text-gray-400">ECHO MIND</span>
			</NavBrand>
			<NavHamburger on:click={toggle} />
			<NavUl {hidden}>
				<NavLi href="/" on:click={toggle}>Home</NavLi>
				<NavLi href="/cards" on:click={toggle}>Create Flash Card</NavLi>
				<NavLi href="/cards" on:click={toggle}>Your Flash Cards</NavLi>
				<NavLi href="/login" on:click={toggle}>Log In</NavLi>
				<NavLi href="/register" on:click={toggle}>Sign Up</NavLi>
			</NavUl>
		</Navbar>
	</div>
	
	<div>
		<UserStatus />
	</div>
</header>
