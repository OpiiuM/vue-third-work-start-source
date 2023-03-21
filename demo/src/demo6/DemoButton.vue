<template>
	<button>
		<slot />
	</button>
</template>

<script setup></script>

<style lang="scss" scoped>
button {
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;

  position: relative;
  touch-action: manipulation;
  
	display: inline-block;
	appearance: none;
  
	box-sizing: border-box;
  margin: 20px;
  padding: 6px 16px;
  
  user-select: none;
  -webkit-user-select: none;
  text-align: center;
  cursor: pointer;
	
	text-decoration: none;
  vertical-align: middle;
  white-space: nowrap;
  
  color: #fff;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
	background-color: #008a9c;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
}
</style>