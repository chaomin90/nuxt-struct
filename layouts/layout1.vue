<template>
	<div class="container">
		<header>
			自定义布局
			<p :class="$style.gray">测试</p>
		</header>
		<section>
			<Nuxt />
		</section>
	</div>
</template>

<style lang="scss" module>
	header {
		font-size: 28px;
		font-weight: 600;
		text-align: center;
		margin: 20px;
	}
	.gray {
		color: #666;
	}
</style>