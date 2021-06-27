<!-- Code from: https://svelte.dev/tutorial/spring -->
<script>
	import { spring } from 'svelte/motion';

	let coords = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.01,
			damping: 0.6
		}
	);

	let size = spring(10);
	// let y;
</script>

<!-- <svelte:window bind:scrollY={y}/> -->
<div
	class="blur-container"
	on:mousemove={(e) => coords.set({ x: e.clientX, y: e.clientY })}
	on:mousedown={() => size.set(30)}
	on:mouseup={() => size.set(10)}
	on:scroll={() => coords.set({ x: coords.x, y: coords.y + y })}
>
	<div
		class="blur"
		style="will-change: transform; transform: translate3d({$coords.x}px, {$coords.y}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
	/>
</div>

<style>
	.blur-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		/* z-index:0; */
		/* pointer-events: none; */
	}
	.blur {
		position: absolute;
		will-change: transform;
		/* transform: translate3d(99.98%, -54.012%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); */
		transform-style: preserve-3d;
		top: -15rem;
		right: auto;
		bottom: auto;
		left: -15rem;
		z-index: -1;
		display: flex;
		width: 30rem;
		height: 30rem;
		justify-content: center;
		align-items: center;
		border-radius: 30rem;
		background-image: linear-gradient(132deg, #ff7448 32%, #ff4848 51%, #6248ff 73%);
		-webkit-filter: blur(7rem);
		filter: blur(7rem);
	}
</style>
